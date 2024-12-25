# 📈Stock Trader Dashboard📈
  - Welcome to the **Stock Trader Dashboard!** This project provides a comprehensive platform for tracking, analyzing, and visualizing stock market data in real time. Users can search for stocks by their symbol, view detailed stock information (price, volume, price changes), and explore interactive graphs to understand market trends.




# Features

## 1. Search for Stocks by Symbol
- Users can search for any stock (e.g., AAPL, MSFT) by its symbol.
- Retrieve detailed information such as stock price, trading volume, price changes, etc.
## 2. Trending Stocks Dropdown
- A dropdown menu dynamically lists the top 10 trending stocks.
 Users can select a stock from the list to view its current data and historical graph.
## 3. Stock Price Visualization
- Visualize stock prices over time using a line graph, allowing users to track performance and trends.
## 4. Dynamic Comparison Table
- A table lets users compare selected stocks based on key metrics like price, change, and volume.
 The table updates dynamically based on user selections.
## 5. Responsive Design
- The dashboard is designed to be responsive, ensuring it works seamlessly on desktops, tablets, and mobile devices.
## 6. Real-Time Data Updates
- Real-time stock data is retrieved from Polygon.io API.
 The webpage dynamically updates with the latest stock information based on user input and API responses.

# Tech Stack
- **HTML5**: For structuring the content and layout.
- **CSS3**: For styling and making the interface responsive to different screen sizes.
- **JavaScript**: For DOM manipulation, making API requests, and adding interactivity to the dashboard.
- **Chart.js**: For visualizing stock price trends through graphs.
- **Polygon.io API**: For fetching real-time stock market data.


# Usage : 
- Search for a Stock: Type the stock symbol (e.g., AAPL) in the search bar to view the current stock data.
- Select a Trending Stock: Use the dropdown to select from the top 10 trending stocks.
- Compare Multiple Stocks: Add stocks to the comparison table to track multiple stocks side-by-side.
- View Stock Trends: Check the graph to see how stock prices have moved over time.

# API Integration
- This dashboard uses the Polygon.io API to fetch real-time stock data. You can easily modify the api.js file to integrate additional APIs or change data sources as needed.

# Polygon.io API Key
- To get started, sign up for an account on Polygon.io to get your API key and update the apiKey variable in the project to fetch data.

# Acknowledgements
- Thanks to Polygon.io for providing the API that powers this dashboard.
- **Chart.js** for simplifying the creation of interactive graphs.
