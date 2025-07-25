# AI Stock Discovery Application

An interactive web application that performs comprehensive market analysis to identify profitable stock opportunities using real-time data, web search, and AI-powered analysis.

## Project Overview

This application analyzes current political, economic, geopolitical, and market factors to provide actionable investment recommendations with technical analysis charts and detailed investment thesis for each stock recommendation.

## Project Structure

```
stocks-discovery/
├── frontend/           # React Native/Expo application
│   ├── App.tsx        # Main app component
│   ├── index.ts       # App entry point
│   ├── package.json   # Frontend dependencies
│   └── app.json       # Expo configuration
├── backend/           # Node.js/Express API server
│   ├── src/
│   ├── package.json   # Backend dependencies
│   └── tsconfig.json
├── package.json       # Root package.json for scripts
└── README.md
```

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI (installed globally or via npx)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd stocks-discovery
   ```

2. **Install all dependencies**
   ```bash
   npm run install:all
   ```
   This will install dependencies for the root, backend, and frontend projects.

## Running the Application

### Option 1: Run Both Frontend and Backend (Development)
```bash
npm run dev
```
This starts both the backend API server and the Expo development server concurrently.

### Option 2: Run Frontend Only (Expo)

1. **Navigate to the frontend directory**
   ```bash
   cd frontend
   ```

2. **Start the Expo development server**
   ```bash
   npx expo start
   ```

3. **Access the application**
   - **Web Browser**: Press `w` in the terminal or visit http://localhost:8081
   - **iOS Simulator**: Press `i` (requires Xcode on macOS)
   - **Android Emulator**: Press `a` (requires Android Studio)
   - **Physical Device**: Scan QR code with Expo Go app

### Option 3: Run Backend Only
```bash
npm run backend:dev
```
Backend API will be available at http://localhost:3000

## Expo-Specific Commands

All Expo commands must be run from the `frontend/` directory:

```bash
cd frontend

# Start development server
npx expo start

# Start with cleared cache
npx expo start --clear

# Start web version directly
npx expo start --web

# Start for specific platform
npx expo start --ios
npx expo start --android

# Start on specific port
npx expo start --port 8082
```

## Development Workflow

1. **Frontend Development**: Work in the `frontend/` directory
   - Main app logic: `App.tsx`
   - Entry point: `index.ts`
   - Configuration: `app.json`

2. **Backend Development**: Work in the `backend/` directory
   - API routes: `src/routes/`
   - Services: `src/services/`
   - Types: `src/types/`

3. **Testing**: Use Puppeteer for automated testing
   ```bash
   cd frontend
   node test-app.js
   ```

## Troubleshooting

### Common Expo Issues

**"Unable to resolve module ../../App" Error**
- Make sure you're running `npx expo start` from the `frontend/` directory
- Check that `package.json` has the correct `"main": "index.ts"` entry

**Port Conflicts**
- If port 8081 is in use, Expo will prompt you to use a different port
- Or manually specify a port: `npx expo start --port 8082`

**Cache Issues**
- Clear Metro bundler cache: `npx expo start --clear`
- Delete node_modules and reinstall: `rm -rf node_modules && npm install`

**Web Dependencies Missing**
If you get web-related errors, install required packages:
```bash
cd frontend
npx expo install react-dom react-native-web @expo/metro-runtime
```

### Project Structure Issues

**Running from Wrong Directory**
- Always run Expo commands from `frontend/` directory
- Backend commands from `backend/` directory  
- Root scripts from project root

## Available Scripts

From project root:
- `npm run dev` - Start both frontend and backend
- `npm run frontend:dev` - Start only frontend (Expo)
- `npm run backend:dev` - Start only backend
- `npm run install:all` - Install all dependencies

From frontend directory:
- `npm start` - Start Expo development server
- `npm run web` - Start web version
- `npm run android` - Start Android version
- `npm run ios` - Start iOS version

## Core Features

- **Single Action Interface**: Prominent "Discover Profitable Stocks" button
- **Comprehensive Analysis**: Political, economic, geopolitical, and market factors
- **Real-time Data**: Integration with financial APIs and news sources
- **AI-Powered Recommendations**: 4-5 carefully selected stock recommendations
- **Technical Analysis**: Interactive price charts and technical indicators
- **Risk Assessment**: Risk levels and position sizing recommendations

## Technology Stack

**Frontend:**
- React Native with Expo
- TypeScript
- Tailwind CSS (NativeWind)
- React Navigation
- Victory Charts for data visualization

**Backend:**
- Node.js with Express
- TypeScript
- PostgreSQL/MongoDB for data storage
- Various APIs (Yahoo Finance, Alpha Vantage, News APIs)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly (especially Expo functionality)
5. Submit a pull request

## License

[Add your license information here]