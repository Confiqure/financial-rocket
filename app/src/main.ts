import "./styles/main.css";
import { loadFinanceData } from "./ts/dataManager";
import { runSimulation } from "./ts/simulation";
import { SimulationMonth, UserInputs } from "./ts/types.d";
import { renderYearlyTable } from "./ts/ui";

async function init() {
  // Step 1: Load finance data
  const financeData = await loadFinanceData();

  // Step 2: Define user inputs
  const user: UserInputs = {
    birthMonth: 1,
    birthYear: 1990,
    hourlyWage: 20,
    portfolioStart: 100000,
    annualExpenses: 40000,
    annualContributions: 10000,
  };

  // Step 3: Run simulation
  const monthlyResults = runSimulation(financeData, user);

  // Step 4: Aggregate results by year
  const yearSummaries = aggregateByYear(monthlyResults);

  // Step 5: Render the yearly summary table
  renderYearlyTable(yearSummaries);

  document.getElementById("run-simulation")?.addEventListener("click", () => {
    // Get user inputs from the form
    const birthMonth = (document.getElementById("birthMonth") as HTMLInputElement).valueAsNumber;
    const birthYear = (document.getElementById("birthYear") as HTMLInputElement).valueAsNumber;
    const hourlyWage = (document.getElementById("hourlyWage") as HTMLInputElement).valueAsNumber;
    const portfolioStart = (document.getElementById("portfolioStart") as HTMLInputElement).valueAsNumber;
    const annualExpenses = (document.getElementById("annualExpenses") as HTMLInputElement).valueAsNumber;
    const annualContributions = (document.getElementById("annualContributions") as HTMLInputElement).valueAsNumber;
  
    const userInputs = {
      birthMonth,
      birthYear,
      hourlyWage,
      portfolioStart,
      annualExpenses,
      annualContributions,
    };
  
    console.log("User Inputs:", userInputs);
  
    // Re-run the simulation with these inputs
    loadFinanceData()
      .then((financeData) => {
        const monthlyResults = runSimulation(financeData, userInputs);
        const yearlySummary = aggregateByYear(monthlyResults);
        renderYearlyTable(yearlySummary);
      })
      .catch((err) => console.error("Error loading finance data:", err));
  });
}

init();

export function aggregateByYear(monthlyResults: SimulationMonth[]) {
  const grouped: Record<number, SimulationMonth[]> = {};

  // Group by year
  monthlyResults.forEach((month) => {
    const year = month.date.getFullYear();
    if (!grouped[year]) grouped[year] = [];
    grouped[year].push(month);
  });

  // Compute annual summaries
  return Object.keys(grouped).map((yearString) => {
    const year = parseInt(yearString);
    const months = grouped[year];
    const startBalance = months[0].startBalance;
    const endBalance = months[months.length - 1].endBalance;
    const totalExpenses = months.reduce((acc, x) => acc + x.monthlyExpenses, 0);
    const totalGrowth = months.reduce((acc, x) => acc + x.sp500GrowthApplied, 0);

    return {
      year,
      startBalanceOfYear: startBalance,
      endBalanceOfYear: endBalance,
      totalExpenses,
      totalGrowth,
      monthlyBreakdown: months, // Attach monthly data for expanding rows
    };
  });
}