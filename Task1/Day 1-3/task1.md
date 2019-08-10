
# Task 1

#### 1.  Explain the rendering of websites in the browser using a complete block diagram. Every block should be explained in your own words. List down all the names of JS engines and their creators.

The browser's rendering engine will first recieve the requested content from the networking layer. After that, the basic flow of rendering of websites is as shown in the diagram below:

![Image of Website Rendering](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/webkitflow.png)

- First the rendering engine will start parsing the HTML document and convert elements to 'DOM' nodes in a tree called as 'content tree' or **DOM Tree**.
- Then the engine parses the style sheets, both external CSS and in style elements.
- This styling information along with visual instructions in HTML is attached together to create another tree - **Render Tree**.
- After contruction of the render tree it goes through the **Layout process**. In the process, each node is given the exact coordinates where it should appear on the screen.
- Finally, in the next stage **Painting** - the render tree will be traversed and each node will be painted using the UI backend layer.

**Different JS engines and their creator:**
* CHROME - V8 engine
* SAFARI - JS Core
* MICROSOFT - Chakra core

#### 2. What is the difference between interpreted and compiled language? Give examples for each.

Compiled Language|Interpreted Language
-------------------|------------------
Takes entire program as single input and converts it into object code which is stored in a file| Takes single instruction as a single input at a time
Intermediate object code is generated|Intermediate object code is not generated
Compiled programs run faster because compilation is done before execution|Interpreted programs run slower because compilation and execution takes place simultaneously.
Memory requirement is more due to creation of object code|Memory requirment is less
Errors are displayed after entire program is compiled|Errors are displayed for every single instruction
e.g.  C,C++|e.g. Python,Javascript

#### 3. What are the different ways of defining a variable? Explain with examples. What is the disadvantage of using var?
Variable are like containers in JavaScript. The different ways of defining variables are : 
##### i) var
#
Syntax :
```javascript
var x         //Declaration and Initialization
x = "abc"     //Assignment
```
e.g:
```javascript
var x = 5                 //Number
var name = "jan"          //String
var bool = true|false     //Boolean
var n = null              //Null
var b;                    //undefined
```
Variables declared with `var` are available in the scope of the enclosing function. If there is no enclosing function, they are available globally.

##### ii) let
#
Syntax : (It is similar to var)
```javascript
let x         //Declaration and Initialization
x = "abc"     //Assignment
```
`let` is the descendant of `var` in modern JavaScript. Its scope is not only limited to the enclosing function, but also to its enclosing block statement. A block statement is everything inside { and }, (e.g. an if condition or loop). The benefit of let is it reduces the possibility of errors, as variables are only available within a smaller scope.

##### iii) const
#
Syntax :
```javascript
const x          // invalid syntax - const cannot be only declared
const x = "abc"  // needs to be initialized
```
The particularity of a constant is that you need to assign a value when declaring it and there is no way to reassign it. A `const` is limited to the scope of the enclosing block, like `let`.

##### Disadvantage of using var : 

- No error is thrown if you declare the same variable twice using var 
- Variables declared with var within a block are not block scoped, rather have a global scope.

### 4.What are the different types of Scopes in Javascript? Explain with examples each in detail.

The different types of scope in Javascript are : 
- Global Scope
- Local Scope
- Block Scope
##### i) Global Scope
#
When you start writing Javascript you are already in Global Scope. There is only one Global scope throughout a Javascript document. A variable is in Global scope if it is defined outside a function. Variable in the Global scope can be accessed and modified in any other scope.

```javascript
let a = 5    // Variable has Global scope
function abc(){
    a = 10
}
console.log(a) //logs 10
```
##### ii) Local Scope
#
Variables defined inside a function have a local scope. These variables are bounded to their respective functions, and are not accessible outside. 
```javascript
// Global Scope
function abc(){
    //Local Scope
    let a = 5   //Variable can only be accessed within this local scope.
}
//Global Scope
```
##### iii) Block Scope
#
Variables defined using `let` and `const`inside a block `{}` like `if`,`switch`,`for`,`while` are only accessible in the scope of the block, unline  `var`  which remains in scope they were already in. 
```javascript
// Global Scope
if(true){
    //Block Scope
    let a = 10 
    const b = 5  // Variables a and b can be accessed only within this block
    var c = 13   // Variable in global scope because of 'var'
}
//Global Scope
```
### 5.What are the different types of function? Explain each in detail with example. Explain the working of this in each type.
There are several types of functions in javascript :
##### i)Named Functions
#
**funcName** - name of the function
**parameters** - arguments passed to the function
**statements** - body of the function
**return** - returns value where the function was called 

Syntax :
```javascript
//function definiton
function funcName(parameters){
    statements;
    return statement;
}
//function calling
funcName(parameters);
```

##### ii)Anonymous Functions
#
An anonymous function is a function with no name and it can be assigned to a variable.
#
Syntax :
```javascript
//function definiton
let funcName = function(parameters){
    statements;
}
//function calling
funcName(parameters);
```

##### ii)Arrow Functions
#
An Arrow Function is a shorthand way for writing anonymous functions. 
#
Syntax :
```javascript
//function definiton
let funcName = (parameters) => {
    statements;
}
//function calling
funcName(parameters);
```
### 6. What is NodeJS? Explain the event loop with example.
Node.js is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine). It is is an open source, cross-platform runtime environment for developing server-side and networking applications.
##### Event Loop
#
The **Event loop** is one of the most important aspects to understand about Javascript.The Javascript code runs synchronously,i.e; single treaded. That is one thing happening at a time, one after another sequentially.

![Event Loop](https://i.imgur.com/RhSv95K.jpg)

##### Blocking the event loop
#
Any JavaScript code that takes too long to return back control to the event loop will block the execution of any JavaScript code in the page, even block the UI thread, and the user cannot click around, scroll the page, and so on.
Almost all the I/O primitives in JavaScript are non-blocking. Network requests, Node.js filesystem operations, and so on. Being blocking is the exception, and this is why JavaScript is based so much on callbacks, and more recently on promises and async/await.

##### The call stack
#
The call stack is a LIFO queue (Last In, First Out).The event loop continuously checks the call stack to see if there’s any function that needs to run. While doing so, it adds any function call it finds to the call stack and executes each one in order.
##### A simple example
#
let's take a simple example:
```javascript
console.log("first")
console.log("second")
console.log("third")
```
Output:
All the statements are executed squentially.
```javascript
first
second
third
```
Let's take another example:
Using a `setTimeout(()=>{},0)` function.
```javascript
console.log("first")
setTimeout(()=>{console.log("second")},0)
console.log("third")
```
Output:
```javascript
first
third
second
```
When setTimeout() is called, the Browser or Node.js start the timer. Once the timer expires, in this case immediately as we put 0 as the timeout, the callback function is put in the Message Queue.The loop gives priority to the call stack, and it first processes everything it finds in the call stack, and once there’s nothing in there, it goes to pick up things in the message queue.We don’t have to wait for functions like setTimeout, fetch or other things to do their own work, because they are provided by the browser, and they live on their own threads.
### 7. What is Promise? How do you create a promise? Explain with an example.
Promises are used to handle asynchronous operations in JavaScript.They can handle multiple asynchronous operations easily and provide better error handling than callbacks and events.

Syntax:
```javascript
var promise = new Promise(function(resolve,reject)){
    //do something
}
```
Parameters
- Promise constructor takes only one argument,a callback function.
- Callback function takes two arguments, resolve and reject
- Perform operations inside the callback function and if everything went well then call resolve.
- If desired operations do not go well then call reject.

let's take an example :
```javascript
var promise = new Promise(function(resolve,reject){
    const x = "success"
    if(x==="success"){
        resolve()
    }
    else{
        reject()
    }
})

promise.then(function (){
    console.log("Resolved")
}).catch(function (){
    console.log('Some Error. Rejected')
})
```
##### Promise Consumers
#
Promises can be consumed by registering functions using .then and .catch methods.
1. **then()**
then() is invoked when a promise is either resolved or rejected.
Parameters: 
then() method takes two functions as parameters.
- First function is executed if promise is resolved and a result is received.
- Second function is executed if promise is rejected and an error is received. (It is optional and there is a better way to hanlde error using .catch() method
2. **catch()**
catch() is invoked when a promise is either rejected or some error has occured in execution.
Parameters: 
catch() method takes one function as parameter.
Function to handle errors or promise rejections.(.catch() method internally calls .then(null, errorHandler), i.e. .catch() is just a shorthand for .then(null, errorHandler) )
#
#
References : 
https://stackoverflow.com/questions/2657268/whats-the-difference-between-compiled-and-interpreted-language
https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/
https://www.sitepoint.com/how-to-declare-variables-javascript/
https://scotch.io/courses/10-need-to-know-javascript-concepts/declaring-javascript-variables-var-let-and-const
https://dev.to/johnwolfe820/should-you-never-truly-use-var-bdi
https://scotch.io/tutorials/understanding-scope-in-javascript
https://flaviocopes.com/javascript-event-loop/
https://www.geeksforgeeks.org/javascript-promises/