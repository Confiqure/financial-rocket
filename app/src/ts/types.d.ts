export interface MonthlyData {
  date: Date;        // The actual JS Date object
  sp500: number;     // S&P 500 value
  gold: number;      // Gold price
  inflationRate: number; // Computed from gold prices (as a decimal, e.g., 0.02 for +2%)
  growthRate: number;    // Computed from S&P 500 (as a decimal, e.g., 0.05 for +5%)
}
  
  export interface UserInputs {
    birthMonth: number;
    birthYear: number;
    hourlyWage: number;
    portfolioStart: number;
    annualExpenses: number;
    annualContributions: number;
  }

  export interface SimulationMonth {
    date: Date;
    startBalance: number;
    monthlyExpenses: number;
    postExpenseBalance: number;
    sp500GrowthApplied: number;
    inflationRate: number;    // deduced from gold or other logic
    endBalance: number;
  }
  export interface YearSummary {
    year: number;
    startBalanceOfYear: number;
    endBalanceOfYear: number;
    totalExpenses: number;
    totalGrowth: number;
    monthlyBreakdown: SimulationMonth[]; // Optional: for expanded rows
  }