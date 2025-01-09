import { YearSummary } from './types.d';

export function renderYearlyTable(yearSummaries: YearSummary[]): void {
    const tableBody = document.getElementById(
      "yearly-tbody"
    ) as HTMLTableSectionElement;
    tableBody.innerHTML = "";
  
    yearSummaries.forEach((yearData) => {
      // Create a row for the yearly summary
      const tr = document.createElement("tr");
  
      tr.innerHTML = `
        <td>${yearData.year}</td>
        <td>${yearData.startBalanceOfYear.toFixed(2)}</td>
        <td>${yearData.endBalanceOfYear.toFixed(2)}</td>
        <td>${yearData.totalExpenses.toFixed(2)}</td>
        <td>${yearData.totalGrowth.toFixed(2)}</td>
      `;
  
      // Add a click handler to toggle monthly breakdown
      tr.addEventListener("click", () => {
        const isExpanded = tr.classList.contains("expanded");
        if (isExpanded) {
          // Collapse
          document.querySelector(`#details-${yearData.year}`)?.remove();
          tr.classList.remove("expanded");
        } else {
          // Expand
          const detailsRow = document.createElement("tr");
          detailsRow.id = `details-${yearData.year}`;
          detailsRow.innerHTML = `
            <td colspan="5">
              <table>
                <thead>
                  <tr>
                    <th>Month</th>
                    <th>Start Balance</th>
                    <th>Expenses</th>
                    <th>Post-Expense Balance</th>
                    <th>Growth Applied</th>
                    <th>End Balance</th>
                  </tr>
                </thead>
                <tbody>
                  ${yearData.monthlyBreakdown
                    .map(
                      (month) => `
                      <tr>
                        <td>${month.date.toLocaleDateString()}</td>
                        <td>${month.startBalance.toFixed(2)}</td>
                        <td>${month.monthlyExpenses.toFixed(2)}</td>
                        <td>${month.postExpenseBalance.toFixed(2)}</td>
                        <td>${month.sp500GrowthApplied.toFixed(2)}</td>
                        <td>${month.endBalance.toFixed(2)}</td>
                      </tr>
                    `
                    )
                    .join("")}
                </tbody>
              </table>
            </td>
          `;
          tr.classList.add("expanded");
          tr.after(detailsRow);
        }
      });
  
      tableBody.appendChild(tr);
    });
  }