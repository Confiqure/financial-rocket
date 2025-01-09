import { MonthlyData, SimulationMonth, UserInputs } from "./types.d";

export function runSimulation(
    financeData: MonthlyData[],
    user: UserInputs
  ): SimulationMonth[] {
    const results: SimulationMonth[] = [];
  
    let currentBalance = user.portfolioStart;
    const baseMonthlyExpense = user.annualExpenses / 12;
    const monthlyContribution = user.annualContributions / 12;
  
    let cumulativeInflation = 1; // Start with no inflation (1 = 100%)
  
    financeData.forEach((monthData) => {
      const { date, inflationRate, growthRate } = monthData;
  
      // 1. Update cumulative inflation multiplier
      cumulativeInflation *= (1 + inflationRate);
  
      // 2. Calculate current month's inflated expenses
      const adjustedExpenses = baseMonthlyExpense * cumulativeInflation;
  
      // 3. Subtract monthly expenses
      const postExpenseBalance = currentBalance - adjustedExpenses;
  
      // 4. Apply S&P 500 growth to remaining balance
      const growth = postExpenseBalance * growthRate;
  
      // 5. Add monthly contributions
      const endBalance = postExpenseBalance + growth + monthlyContribution;
  
      // Store the month's data
      results.push({
        date,
        startBalance: currentBalance,
        monthlyExpenses: adjustedExpenses,
        postExpenseBalance,
        sp500GrowthApplied: growth,
        inflationRate,
        endBalance: Math.max(endBalance, 0), // Ensure no negative balances
      });
  
      // Update balance for the next iteration
      currentBalance = endBalance;
    });
  
    return results;
  }