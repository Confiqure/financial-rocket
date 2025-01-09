import Papa from "papaparse";
import { MonthlyData } from "./types.d";

export async function loadFinanceData(): Promise<MonthlyData[]> {
  return new Promise((resolve, reject) => {
    Papa.parse("/cleaned_finance_data.csv", {
      download: true,
      header: true,
      complete: (results) => {
        const rawData: any[] = results.data;

        const parsedData: MonthlyData[] = rawData.map((row, index) => {
          const date = new Date(row.Date);
          const sp500 = parseFloat(row.SP500);
          const gold = parseFloat(row.Gold);

          // Previous row for calculations
          const prevRow = index > 0 ? rawData[index - 1] : null;
          const prevSP = prevRow ? parseFloat(prevRow.SP500) : null;
          const prevGold = prevRow ? parseFloat(prevRow.Gold) : null;

          // Calculate inflation and growth
          const inflationRate =
            prevGold !== null ? (gold - prevGold) / prevGold : 0;
          const growthRate =
            prevSP !== null ? (sp500 - prevSP) / prevSP : 0;

          return {
            date,
            sp500,
            gold,
            inflationRate, // Monthly inflation
            growthRate, // Monthly growth
          };
        });

        console.log("Parsed and computed finance data:", parsedData);
        resolve(parsedData);
      },
      error: (err) => reject(err),
    });
  });
}