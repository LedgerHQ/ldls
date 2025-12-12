# Run Tests and Fix Failures

## Overview
Execute the test suite of the impacted apps or libs and systematically fix any failures, ensuring code quality and functionality.

## Steps

1. **Run test suite**
   - Determines the affected nx apps or libs (compare to main) and run typecheck commands on these
   - Capture output and identify failures
   - Check both unit and integration tests

2. **Analyze failures**
   - Categorize by type: flaky, broken, new failures
   - Prioritize fixes based on impact
   - Check if failures are related to recent changes
   - Ask user if he wants to fix issues

3. **Fix issues systematically**
   - Start with the most critical failures
   - Fix one issue at a time
   - Re-run tests after each fix