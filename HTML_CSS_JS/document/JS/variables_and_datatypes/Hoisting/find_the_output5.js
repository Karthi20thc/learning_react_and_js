sayHi(); // Returns TypeError, Because only variable is hoisted, not function body. 

var sayHi = function () {
    console.log("Hi");
};