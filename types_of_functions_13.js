
//function statement

// function a()
// {
//     console.log("a Called");
// }



//function Expression

// var b = function()
// {
//    console.log("b called");
// }

//function act as a value here

// difference between function statement and function Expression
// hoisting
//can not call b() before definig but can call a()
//as before defining b, it acts as a veriable 
//and assigned undefined 
//so if we call b() before it will give type error 
//: b is not a function 



//function declaration another name of function statement 


// anonymous function

//  function()
//  {

//  }

//alone it give sintex error
 // anonymous functions does not have its own idenitiy

 //anonymous functions are used as values 
 //use it to assign value to a veriable 


 //named funtion expresson

//  var c = function xyz()
//  {
//     console.log("xyz called ");
//  }

 //here xyz function can be called from inside the xyz function 
 //but not from outside because it is not in global scope 



 //difference between parameters and arguments 


//  function f(param1)
//  {

//  }

//  f(1);

//  1 is arguements and param1 is parameters 

//first class functions 

//the ability of functions to be used as values is known as first class functions 

//functions can be passed as arguements in another functions 
//functions can return any functions 
//functions are first class Citizens


//example 

// function a(param1)
// {
//     console.log(param1);
// }

// a(function(){
//     console.log("first class functions");
// })


//output

// ƒ (){
//     console.log("first class functions");
// }

//arrow functions 







