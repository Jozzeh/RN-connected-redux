# RN-connected-redux
Example of testing a React Native application with connected functional components  

The project tries to have all types of components you might have in a small RN application.   


## Keypoints  
This setupJest.js file contains all global mocks.  

In the __tests__ folder, the structure roughly matches the structure of ./src  

Interesting tests:    
- __tests__/components/elements/button/Button-test.js  
- __tests__/components/frames/home/Home-test.js  
- __tests__/redux/actions/QuoteActions-test.js  
- __tests__/redux/reducer/QuoteReducer-test.js  

Notice: ./src/redux/middleware/QueryUrl.js ... This file has the fetch function + dispatches load, success and fails.   
