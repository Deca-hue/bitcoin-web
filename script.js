// Simulating live market updates
// Simulated Market Data
const marketData = {
  btc: { price: 29000, change: 2.5 },
  eurUsd: { price: 1.1030, change: 0.3 },
  gbpUsd: { price: 1.2765, change: 0.2 },
  usdJpy: { price: 135.50, change: -0.1 },
};

// Update Market Data Periodically
function simulateMarketUpdates() {
  // Simulate Bitcoin Price
  marketData.btc.price += (Math.random() - 0.5) * 500;
  marketData.btc.change = ((Math.random() - 0.5) * 5).toFixed(2);

  // Simulate EUR/USD Price
  marketData.eurUsd.price += (Math.random() - 0.5) * 0.01;
  marketData.eurUsd.change = ((Math.random() - 0.5) * 1).toFixed(2);

  // Simulate GBP/USD Price
  marketData.gbpUsd.price += (Math.random() - 0.5) * 0.01;
  marketData.gbpUsd.change = ((Math.random() - 0.5) * 1).toFixed(2);

  // Simulate USD/JPY Price
  marketData.usdJpy.price += (Math.random() - 0.5) * 0.5;
  marketData.usdJpy.change = ((Math.random() - 0.5) * 0.5).toFixed(2);

  // Update HTML
  document.getElementById("btc-price").textContent = `$${marketData.btc.price.toFixed(2)}`;
  document.getElementById("btc-change").textContent = `${marketData.btc.change}%`;

  document.getElementById("eur-usd-price").textContent = `${marketData.eurUsd.price.toFixed(4)}`;
  document.getElementById("eur-usd-change").textContent = `${marketData.eurUsd.change}%`;

  document.getElementById("gbp-usd-price").textContent = `${marketData.gbpUsd.price.toFixed(4)}`;
  document.getElementById("gbp-usd-change").textContent = `${marketData.gbpUsd.change}%`;

  document.getElementById("usd-jpy-price").textContent = `${marketData.usdJpy.price.toFixed(2)}`;
  document.getElementById("usd-jpy-change").textContent = `${marketData.usdJpy.change}%`;

  // Update Ticker
  const tickerContent = `
    Bitcoin (BTC): $${marketData.btc.price.toFixed(2)} (${marketData.btc.change}%),
    EUR/USD: ${marketData.eurUsd.price.toFixed(4)} (${marketData.eurUsd.change}%),
    GBP/USD: ${marketData.gbpUsd.price.toFixed(4)} (${marketData.gbpUsd.change}%),
    USD/JPY: ${marketData.usdJpy.price.toFixed(2)} (${marketData.usdJpy.change}%)
  `;
  document.getElementById("ticker-content").textContent = tickerContent;
}

// Start Updates
setInterval(simulateMarketUpdates, 3000); // Update every 3 seconds
simulateMarketUpdates(); // Initial update

  
      function calculateProfit() {
        const tradeSize = parseFloat(document.getElementById('trade-size').value);
        const pipValue = parseFloat(document.getElementById('pip-value').value);
        const profit = tradeSize * pipValue;
        document.getElementById('profit-result').innerText = `$${profit.toFixed(2)}`;
      }
  
      function calculateRisk() {
        const accountBalance = parseFloat(document.getElementById('account-balance').value);
        const riskPercentage = parseFloat(document.getElementById('risk-percentage').value);
        const stopLoss = parseFloat(document.getElementById('stop-loss').value);
        const tradeSize = (accountBalance * (riskPercentage / 100)) / stopLoss;
        document.getElementById('risk-result').innerText = `${tradeSize.toFixed(2)} Lots`;
      }
      function toggleTheme() {
        document.body.classList.toggle('dark-mode');
      }

      