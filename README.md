Question 1,
global.browser = new BrowserHelpers()
answer:
global.expect = chai.expect;
answer:


Question 2. In your README to the best of your knowledge please explain why we are placing the let fizzBuzz = new FizzBuzz outside the it block?
answer:
```This line of code creates a new FizzBuzz object. Probably, the way we will implement the code further down, will create a new instance of the object (fizzBuzz), every time the user types in a number. For testng purposes ne need it present before each test, until we implement it in the JavaScript file.```


Question 3. In your README to the best of your knowledge please explain the difference between using === and == in JS?

Question 4. In your README to the best of your knowledge please explain why we are moving (number % 5 === 0) to the top?