"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const stockDiscoveryService_1 = require("../services/stockDiscoveryService");
const router = (0, express_1.Router)();
const stockDiscoveryService = new stockDiscoveryService_1.StockDiscoveryService();
router.post('/discover-stocks', async (req, res) => {
    try {
        const stockData = await stockDiscoveryService.discoverStocks();
        const response = {
            success: true,
            data: stockData,
            timestamp: new Date().toISOString()
        };
        res.json(response);
    }
    catch (error) {
        console.error('Stock discovery error:', error);
        const errorResponse = {
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error occurred',
            timestamp: new Date().toISOString()
        };
        res.status(500).json(errorResponse);
    }
});
router.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        message: 'Stock Discovery API is running',
        timestamp: new Date().toISOString()
    });
});
exports.default = router;
//# sourceMappingURL=stockRoutes.js.map