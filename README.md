# Test Plan for Sauce Demo
## Brief Summary
This test plan outlines the regression test strategy for the Sauce Demo e-commerce application. The purpose of regression testing is to ensure that existing functionalities continue to work after code updates, deployments, or bug fixes.
## Scope of Testing
Regression testing will cover under workflows across:
- Authenication
- Product Inventory Page
- Product Details Page
- Shopping Cart
- Checkout Process
- UI & Cross-browser functionality
## Features in Scope
- Login
   - Input validation
   - Successful login with valid users
   - Invalid attempts
   - Locked-out user behavior
- Product Page
   - Sorting filters
   - Add/remove products to cart
   - Product images and names
- Product Detail Page
   - Display accuracy
   - Add to cart
   - back-navigation
- Cart Page
   - Modify cart items
   - Price accuracy
   - Navigation to checkout
- Checkout Step 1
   - Name/address validation
   - Navigation to next step
- Checkout Step 2
   - Price tax total calculations
   - Item accuracy
- Checkout Complete
   - Order success message
   - Return to home button
- UI/UX
   - Page rendering
   - Responsive layout consistency
- Browser/Mobile Compatibility
   - Chrome
   - Firefox
   - Safari (as applicable)
   - Phones (iOS vs Android)
   - Tablets (Orientation)
## Features Out of Scope
- Backend database validation
- Performance testing
- Accessibility testing (unless requested)
## Test Environment
- URL: https://www.saucedemo.com/
- Test Data: (provided users, password: secret_sauce)
   - standard_user
   - locked_out_user
   - problem_user
   - error_User
   - performance_glitch_user
   - visual_user
- Browsers
   - Chrome
   - Firefox
   - Safari
## Entry Criteria
- Build deployed to test environment
- All critical defects from prior release resolved
- Required test data available
## Exit Criteria 
- All regression test cases executed
- All high/critical defects resolved or accepted with business approval
- Test summary and sign-off acquired
## Risks & Assumptions
### Risks
- Frequent UI changes may require frequent script updates
- Unreliable test data could block checkout tests
### Assumptions
- No changes to auth service during execution
- Environment remains stable
## Regression Test Suite (Sample Test Cases)
<table>
  <tr>
    <th>Test Case</th>
    <th>Priority</th>
  </tr>
  <tr>
    <td>Verify standard_user can successfully log in</td>
    <td>High</td>
  </tr>
  <tr>
    <td>Verify locked_out_user cannot log in</td>
    <td>High</td>
  </tr>
  <tr>
    <td>Verify invalid attempts cannot log in</td>
    <td>Medium</td>
  </tr>
  <tr>
    <td>More coming soon</td>
    <td>High/Medium/Low</td>
  </tr>
</table>

## Deliverables
- Regression Test Cases in Test Management Tool (JIRA, TestRail, Zephyr)
- Test Execution Report
- Defect Reports

## Automation Framework
- Playwright
- VS Code
- TypeScript
- GitHub (CICD)
