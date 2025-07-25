export interface StockRecommendation {
    symbol: string;
    companyName: string;
    currentPrice: number;
    investmentThesis: string;
    riskLevel: 'Low' | 'Medium' | 'High';
    suggestedPositionSize: number;
    expectedTimeline: string;
    upcomingCatalysts: string[];
    priceTarget: number;
    upsidePotential: number;
}
export interface MarketAnalysis {
    politicalFactors: string[];
    economicDynamics: string[];
    geopoliticalEvents: string[];
    technologyInnovation: string[];
    industryCatalysts: string[];
}
export interface StockDiscoveryResponse {
    recommendations: StockRecommendation[];
    marketAnalysis: MarketAnalysis;
    analysisTimestamp: string;
}
export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    timestamp: string;
}
//# sourceMappingURL=index.d.ts.map