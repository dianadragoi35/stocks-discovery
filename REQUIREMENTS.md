Stock Discovery Mobile App - Requirements
Core Functionality Requirements
Primary Feature

Single prominent button labeled "Discover Profitable Stocks"
When clicked, performs comprehensive web searches and market analysis
Analyzes current political, economic, geopolitical, and market factors
Displays organized results with technical analysis charts
Provides actionable investment recommendations

Key Features to Implement

Mobile-First UI Design

Professional financial theme with dark mode aesthetics
Large, touch-friendly button design
Loading indicators with skeleton screens during analysis
Responsive design for different phone sizes (iPhone/Android)
Clear typography optimized for mobile reading
Pull-to-refresh functionality for data updates


Real-Time Data Integration

Web search integration for current market conditions
Financial data APIs for stock prices and market data
News APIs for political and economic developments
Economic data sources (Federal Reserve, economic indicators)


Comprehensive Market Analysis Engine

Political Factors: Federal Reserve policy, Congressional legislation, regulatory changes, trade agreements, antitrust investigations, healthcare policy, environmental regulations, infrastructure spending
Economic Dynamics: Supply chain disruptions, commodity prices, consumer spending, housing market, employment data, currency fluctuations, credit markets, M&A activity, IPO conditions
Geopolitical Events: Regional conflicts, climate events, cybersecurity threats, space technology, pandemic trends, international alliances, technology restrictions, energy independence
Technology & Innovation: AI/ML adoption, quantum computing, biotechnology, renewable energy, autonomous vehicles, 5G/6G networks, blockchain, semiconductor innovation
Industry-Specific Catalysts: Seasonal cycles, demographic shifts, subscription economy, ESG trends, real estate development, food security, entertainment competition, fintech disruption


Mobile-Optimized Results Display

Card-based layout for 4-5 stock recommendations
Swipeable cards for easy navigation between stocks
Collapsible sections for detailed analysis
Horizontal scrolling charts for price trends
Bottom sheet modal for detailed stock information
Each recommendation includes:

Company name, ticker, and current price
Detailed investment thesis based on current factors
Risk level assessment with color coding
Suggested position size (% of portfolio)
Expected timeline and key upcoming catalysts
Interactive technical analysis charts
Price targets with upside potential percentage


Technical Specifications
Mobile Frontend Architecture (React Native with Expo)

Framework: React Native with TypeScript
Platform: Expo Go compatible
Navigation: React Navigation 6.x for screen transitions
State Management: React hooks (useState, useReducer, useContext)
Charts: Victory Native or React Native Chart Kit for technical analysis
Styling: React Native StyleSheet with custom dark theme
Icons: @expo/vector-icons or React Native Vector Icons
Networking: Expo fetch API with proper error handling
Storage: AsyncStorage for user preferences and caching

Backend Architecture

Framework: Node.js with Express
Database: PostgreSQL or MongoDB for storing analysis results
APIs:

Financial data (Yahoo Finance, Alpha Vantage, Polygon.io)
News sources (NewsAPI, Financial Modeling Prep)
Economic data (FRED API)
Claude API for intelligent analysis


Web Scraping: Puppeteer or Cheerio for real-time market data
Caching: Redis for API response caching
Mobile API: RESTful API optimized for mobile data consumption