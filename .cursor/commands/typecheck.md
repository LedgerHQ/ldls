# Run Typecheck and Fix

## Overview
Execute the typecheck suite of the impacted apps or libs and systematically fix any failures.

## Steps
- Turn ASK mode ON
- Determines the affected nx apps or libs (compare to main) 
- Run nx build-deps in one command on affecteds 
- Run nx typecheck in one command on affecteds "--nx-bail=false"
- Show summary per libs/apps as prompt result
