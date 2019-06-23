Fizzbuzz JavaScript Challange

-Written in JavaScript

-Feature test done using e2e training wheels

-Package used was npm

-Semantic UI used for styling

-githublink: https://github.com/erikwesterberg/Fizzbuzz

QUEASTIONS PEOPLE!

Question 1,
global.browser = new BrowserHelpers()
answer:
global.expect = chai.expect;

answer:
-- The lines above are requiring BrowseHelpers from e2_training_wheels and chai from modules. Global means we initialize these on a global scope. BrowseHelpers let us run the code in the browser and chai is a library tool for BDD.


Question 2. In your README to the best of your knowledge please explain why we are placing the let fizzBuzz = new FizzBuzz outside the it block?
answer:
-- It means that its creating a new instace of the Fizzbuzz. its outside because its often many test thats need its function to run


Question 3. In your README to the best of your knowledge please explain the difference between using === and == in JS?
answer:
-- "===" checks to see if object are indentical, 2 === "2" = false
"==" checks if both object are equal
2 == "2" true 


Question 4. In your README to the best of your knowledge please explain why we are moving (number % 5 === 0) to the top?
answer:
-- The function always start to run from the top and goes to the bottom. 


Question 5. In your README to the best of your knowledge please explain the difference between feature and unit test
answer:
-- Unit test are for small pieces of function code. or a few codes sometimes.
Feture checks if the behavior of our program does what we want. Like in this challange its opens up the webpage , fills in input and expect the right output.

describe('User can input a value and get FizzBuzz results', () => {
    before(async () => {
        await  browser.init()
        await  browser.visitPage('http://localhost:8080/')
    });

    beforeEach(async () => {
        await  browser.page.reload();
    })

    after(async ()=> {
        await  browser.close();
    })
})

Answer:
-- its open up new browser window and goes to the local server
then its reloads beforeeach test
then the browser closes after the test is finnished, and for me its always green. 
and we use async for speed and also for being more in control

Question 7. In your README to the best of your knowledge please explain what expectations in the context of testing are¨
answer:
-- 
The test will run and open your browser on the host and it search for a input with the id=value and put 3 in there.
the test will click the button with value='check'
and then the test put value in id='display answer in a new variable and the test expects the new variables contect to be equal to the outcome Fizz.



Question 8. In your README to the best of your knowledge please write a line to line explanation of what is happening in this code

<script src="js/fizzbuzz.js"></script>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            let button = document.getElementById('button')
            let displayDiv = document.getElementById('display_answer')
            button.addEventListener('click', () =>{
                let value = document.getElementById('value').value
                let fizzBuzz = new FizzBuzz
                let result = fizzBuzz.check(value)
                displayDiv.innerHTML = result;
            })
        })
    </script>

    answer:
    --
-first of all we load the fizz-buzz.js file so we can take use of all the JS code(in this example the FizzBuzz function and a reload function).
- a eventlisteners runs a function when the DOM is loaded.
-then a variable called button gets assigned an element with the id "button"
-A variable displayDiv ar assigned a elemnt with the id "display_answe"
-The variable button gets assigned an addventlistener that runs a functions when the button is clicked. 
-then anothor variable called value gets assigned element by id "value"
-After this a new instance of Fizzbuzz is created and put in to new variable fizzbuzz. 
-then the variable 'result' is assigned the instance of fizzbuzz and a function called check with argument"value"(that we created ) is applied to fizbuzz.
Then this is displayed at the webpage trough the variable 'result' trough our index.html


Question 9. In your README to the best of your knowledge please explain what a CDN (Content Delivery Network) is?

answer:
--  content delivery network or content distribution network (CDN) is a geographically distributed network of proxy servers and their data centers. They allow distribution of internet trough html files

