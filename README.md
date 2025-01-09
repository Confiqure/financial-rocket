# FinancialRocket 🚀

FinancialRocket is an offline web application designed to help users simulate and visualize their journey to financial independence. Inspired by [the metaphor of breaking free from "financial gravity,"](https://dylanwheeler.net/writing/your-financial-rocket-a-guide-to-reaching-escape-velocity) this tool models your portfolio growth, expenses, and inflation over time to show when you'll reach "escape velocity"—the point where your investments grow faster than your expenses.

## Why FinancialRocket?

Imagine your life as a rocket ready to launch. Every dollar you've saved is fuel, every expense is gravity, and compound growth is the engine that propels you forward. FinancialRocket was created to empower users to understand their financial trajectories, experiment with scenarios, and visualize the impact of their decisions in an engaging and inspiring way.

This tool is more than just numbers—it’s about reclaiming time, pursuing dreams, and designing a life of freedom and creativity.

## Features

- **Offline:** Runs entirely in your browser with no internet required.
- **Historical Data Integration:** Models portfolio growth using historical S&P 500 data, gold prices for inflation, and realistic compounding scenarios.
- **Custom Scenarios:** Configure portfolio size, expenses, income contributions, and more to simulate various financial paths.
- **Interactive Projections:** Explore year-by-year breakdowns of your financial journey, complete with monthly details.
- **Rocket Animation:** Watch your financial rocket take off, showing the sustainability of your financial trajectory.

## Getting Started

Follow these steps to set up and run FinancialRocket locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (bundled with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Confiqure/financial-rocket.git
   cd financial-rocket
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to use the app.

### Build for Production

To create an optimized production build:

```bash
npm run build
```

This will generate a `dist/` folder containing the production-ready app.

## Data Sources and Documentation

The financial data used in this app (S&P 500 and gold prices) has been cleaned and preprocessed into a CSV file located in the `data/` directory. For detailed documentation on how the data was collected, cleaned, and processed, refer to the accompanying data notebook (`clean_data.ipynb.ipynb`).

## Contributing

Contributions are welcome! If you have ideas for improving the app or adding features, feel free to submit a pull request.

## License

This project is licensed under the MIT License. See the [`LICENSE`](LICENSE) file for details.

## Acknowledgments

FinancialRocket is inspired by the journey to financial independence and the transformative power of understanding your financial trajectory. Special thanks to the creators of the datasets that make this app possible.

---

### Ignite Your Financial Journey

Financial independence isn’t just about money—it’s about freedom. It’s about designing a life that reflects your dreams, values, and passions. With FinancialRocket, take the first step toward building your path to freedom and watch your financial rocket soar to the stars. 🚀
