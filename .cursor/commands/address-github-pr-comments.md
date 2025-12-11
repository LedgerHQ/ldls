# Adress github pull request comments

## Overview
Fetch the unresolved comments from github and fix them

## Steps

1. **Fetch the comments**
   - Use gh CLI to fetch unresolved comments body
   - For each comment make a brief summary of the comment 
   - Render the result in a table 
   - Ask in the prompt if it should be fixed

2. **Fix comments**
   - Fix comments one by one
   - Make sure lint and tests pass