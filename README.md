# ₿ Bitcoin Tracker – Real-Time Crypto Price Web App

**Bitcoin Tracker** is a real-time cryptocurrency dashboard built using **HTML**, **Tailwind CSS**, and **JavaScript**, with live price data fetched from a public crypto API.  
It provides a clean, animated interface for tracking the **current Bitcoin price**, along with optional charts, market info, and conversion tools.

[🔗 Live Demo](https://bitcoin-web-nu.vercel.app/) &nbsp; | &nbsp; [📂 Source Code](https://github.com/deca-hue/bitcoin-web)

---

## 💡 About This Project

The Bitcoin Web App was built to:

- 💹 Explore API integration using real-world financial data  
- 📉 Present data dynamically with real-time updates  
- 🖥️ Practice responsive UI/UX design for dashboards  
- 💰 Showcase crypto tools like conversion and stats preview

It’s ideal for learning **asynchronous JavaScript**, **data-driven UI**, and **modern frontend techniques** — or for users who want a simple, no-login BTC tracker.

---

## ✨ Key Features

| Feature                        | Description |
|--------------------------------|-------------|
| 🔁 Live BTC Price               | Fetches current Bitcoin price from crypto API |
| 💱 Currency Conversion Tool     | Convert BTC to USD or other fiat (optional) |
| 📈 Chart Area *(optional)*      | Price chart with time filters (e.g., 24h, 7d) |
| 🌐 Real-Time API Integration    | Updates on refresh or every X seconds |
| 📱 Mobile-Friendly UI           | Built with Tailwind for full responsiveness |
| 🔒 No login or tracking         | Lightweight, privacy-first

---

## 🛠 Tech Stack

| Technology         | Purpose                        |
|--------------------|--------------------------------|
| **HTML5**          | Structure and layout            |
| **Tailwind CSS**   | Utility-first styling and responsiveness |
| **JavaScript (ES6)**| API logic, formatting, DOM control |
| **[CoinGecko API](https://www.coingecko.com/en/api)** | Public crypto price data source |

---

## 📁 Folder Structure

📊 Example Output
Bitcoin Price: $62,574.23

Price Change: +2.3% (24h)

Time Updated: Just now

Convert: 0.5 BTC → $31,287.12

💻 Use Cases
📉 Beginners learning API fetch & JSON formatting

💼 Freelancers building crypto dashboards

🎓 Students showing asynchronous JS in portfolios

🧠 Personal finance tools for crypto holders

🌍 Real-time data visualizations in static sites

🔮 Future Enhancements
📈 Interactive price charts with Chart.js

🌐 Select other coins (ETH, DOGE, etc.)

📲 PWA (Progressive Web App) installable on mobile

🧮 Historical data with sparkline visualizations

🔔 Alert system for price thresholds

🧠 Code Highlights
js
Copy
Edit
// Fetch Bitcoin data
fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")
  .then(res => res.json())
  .then(data => {
    const price = data.bitcoin.usd;
    document.getElementById("btc-price").textContent = `$${price.toLocaleString()}`;
  });
Includes:

fetch() with error handling

.toLocaleString() for formatting

DOM manipulation for live update

📜 License
This project is licensed under the MIT License.
You may use, remix, or extend it for personal or commercial use.

👨‍💻 Author
Developed by Your Name
Frontend Developer & API Integration Enthusiast
