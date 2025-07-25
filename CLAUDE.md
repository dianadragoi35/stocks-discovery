
# Stock Discovery Mobile App - Development Guidelines

## Task Master AI Instructions
**Import Task Master's development workflow commands and guidelines, treat as if import is in the main CLAUDE.md file.**
@./.taskmaster/CLAUDE.md

## Testing Requirements - MANDATORY FOR EACH TASK

### Puppeteer Testing Strategy
After completing EACH task, you MUST create and run Puppeteer tests to validate the implementation:

#### 1. Task Completion Testing Protocol
```javascript
// Required for every completed task
const puppeteer = require('puppeteer');

describe('Task [ID] - [Task Name]', () => {
  let browser, page;
  
  beforeEach(async () => {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();
    await page.setViewport({ width: 375, height: 812 }); // iPhone X dimensions
  });
  
  afterEach(async () => {
    await browser.close();
  });
  
  // Add specific tests based on task requirements
});
```

#### 2. Mobile-First Testing Requirements
All Puppeteer tests MUST include:
- **Mobile viewport testing** (iPhone/Android dimensions)
- **Touch interaction simulation** using `page.tap()`
- **Network condition testing** (slow 3G, offline scenarios)
- **Performance monitoring** with `page.metrics()`
- **Accessibility testing** with axe-puppeteer

#### 3. Task-Specific Testing Guidelines

**Task 1 - Project Setup:**
- Test app launches without errors
- Verify TypeScript compilation works
- Test React Navigation routing
- Validate all dependencies load correctly

**Task 2 - Design System:**
- Test dark theme applies correctly
- Verify component responsiveness across screen sizes
- Test touch target sizes (minimum 44px)
- Validate color contrast ratios

**Task 3 - Main Discovery Interface:**
- Test discovery button renders and responds to taps
- Verify loading states display correctly
- Test pull-to-refresh functionality
- Validate error handling displays

**Task 4 - Backend API:**
- Test API endpoints with Puppeteer requests
- Verify CORS headers for mobile requests
- Test rate limiting and error responses
- Validate mobile-optimized response payloads

**Task 5 - Financial Data Integration:**
- Test real API data fetching with network delays
- Verify data displays correctly in mobile format
- Test offline data caching behavior
- Validate API error handling

**Task 6 - News Integration:**
- Test news loading with simulated slow network
- Verify news categorization displays
- Test news refresh functionality
- Validate web scraping stability

**Task 7 - Market Analysis Engine:**
- Test analysis results display in mobile format
- Verify complex data renders without performance issues
- Test analysis with mocked market conditions
- Validate factor categorization accuracy

**Task 8 - AI Recommendations:**
- Test recommendation loading states
- Verify AI-generated content displays properly
- Test recommendation interactions (taps, swipes)
- Validate recommendation quality with sample data

**Task 9 - Interactive Charts:**
- Test chart rendering on mobile viewports
- Verify touch interactions (pinch, zoom, pan)
- Test horizontal scrolling behavior
- Validate chart performance with large datasets

**Task 10 - Results Display:**
- Test card swiping gestures
- Verify bottom sheet modal interactions
- Test collapsible sections functionality
- Validate mobile layout responsiveness

**Task 11 - Caching & Performance:**
- Test offline functionality with DevTools
- Verify cache invalidation strategies
- Test app performance under memory constraints
- Validate background refresh behavior

**Task 12 - Testing & Deployment:**
- Test complete user flows end-to-end
- Verify deployment builds work correctly
- Test app store compliance requirements
- Validate production performance metrics

#### 4. Mandatory Test Execution Command
After completing each task, run:
```bash
npm run test:puppeteer:task-[ID]
```

#### 5. Mobile Testing Best Practices
- **Always test on actual mobile viewports**
- **Simulate touch interactions, not mouse clicks**
- **Test with realistic network conditions**
- **Validate against mobile performance budgets**
- **Test accessibility with screen reader simulation**

#### 6. Test Reporting Requirements
Each task completion MUST include:
- Screenshot evidence of working functionality
- Performance metrics (load time, memory usage)
- Accessibility compliance report
- Mobile responsiveness verification
- Error handling validation

#### 7. Integration with Task Master
When marking tasks as complete:
```bash
# Before marking complete, ensure tests pass
npm run test:puppeteer:task-[ID]

# Update task with test results
task-master update-subtask --id=[ID] --prompt="Puppeteer tests passing: [test summary]"

# Then mark complete
task-master set-status --id=[ID] --status=done
```

## Development Workflow Integration

### Required Package.json Scripts
```json
{
  "scripts": {
    "test:puppeteer": "jest --config=puppeteer.config.js",
    "test:puppeteer:mobile": "MOBILE=true npm run test:puppeteer",
    "test:puppeteer:task-1": "jest --testNamePattern='Task 1'",
    "test:puppeteer:task-2": "jest --testNamePattern='Task 2'",
    // ... add for each task
  }
}
```

### Testing Environment Setup
- Install puppeteer, jest, axe-puppeteer
- Configure mobile device emulation
- Set up network throttling presets
- Create accessibility testing utilities

## IMPORTANT NOTES
- **NO TASK IS COMPLETE WITHOUT PUPPETEER TESTS**
- All tests must pass before marking task as done
- Mobile-first testing is mandatory, not optional
- Performance testing is required for every task
- Document all test failures and resolutions
