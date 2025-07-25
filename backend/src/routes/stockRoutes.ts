import { Router, Request, Response } from 'express';
import { StockDiscoveryService } from '../services/stockDiscoveryService';
import { ApiResponse, StockDiscoveryResponse } from '../types';

const router = Router();
const stockDiscoveryService = new StockDiscoveryService();

router.post('/discover-stocks', async (req: Request, res: Response) => {
  try {
    const stockData = await stockDiscoveryService.discoverStocks();
    
    const response: ApiResponse<StockDiscoveryResponse> = {
      success: true,
      data: stockData,
      timestamp: new Date().toISOString()
    };
    
    res.json(response);
  } catch (error) {
    console.error('Stock discovery error:', error);
    
    const errorResponse: ApiResponse<null> = {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
      timestamp: new Date().toISOString()
    };
    
    res.status(500).json(errorResponse);
  }
});

router.get('/health', (req: Request, res: Response) => {
  res.json({ 
    status: 'ok', 
    message: 'Stock Discovery API is running',
    timestamp: new Date().toISOString()
  });
});

export default router;