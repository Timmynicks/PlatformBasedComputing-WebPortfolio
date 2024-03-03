// Click Me
var hello = "hello";
console.log("Helps with debugging " + hello);

// Print 3 Ways
var print3Ways = function() {
    alert("hello world"); // Alert pop-up
    console.log("Hello World"); // Writes to console
    document.write("<b>Hello World</b>"); // Changes the screen to whatever's in the function
}

// Fun With Arrays
var a = [1,2,3,4,5];
var funWithArrays = function() {
    document.write(sumArray() + "<br>");
    document.write(findMin() + "<br>");
    document.write(findMax() + "<br>");

    function sumArray() {
        let sum = 0;
        for (let i = 0; i < a.length; i++) {
            sum += a[i]
        }
        return sum;
    }

    function findMin() {
        let min = a[0];
        for (let i = 1; i < a.length; i++) {
            if (a[i] < min) min = a[i];
        }
        return min
    }

    function findMax() {
        let max = a[0];
        for (let i = 1; i < a.length; i++) {
            if (a[i] > max) max = a[i];
        }
        return max
    }
}

// So Many Functions
function plainOldFunction(a="default") {
    console.log("plainOldFunction " + a);
}

var soManyFunctions = function() {
    plainOldFunction();
    plainOldFunction("send argument");
    firstFunction(callback);
    firstFunction();
}

var firstFunction = function(func= function() {console.log("default function")}) {
    func();
}

var callback = function() {
    console.log("this is a callback function");
}