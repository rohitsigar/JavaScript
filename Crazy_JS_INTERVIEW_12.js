

// function outer()
// {
//     var a = 10;
//     function inner()
//     {
//         console.log(a);
//     }
//     return inner;
// }

// outer()(); // --> same as var z = outer(); z();


//output
//10

//-------------------------------------

// function outer()
// {
    
//     function inner()
//     {
//         console.log(a , b , x);
//     }
//     const a = 10;
//     let b = 100;
//     return inner;
// }

// let x = 1000;

// outer()(); // --> same as var z = outer(); z();


//output
//10 100 1000



// --------------------------------------


// function outer(b)
// {
    
//     function inner()
//     {
//         console.log(a , b);
//     }
//     let a = 10;
//     return inner;
// }



// outer("Rohit Sigar")(); //-> same as var z = outer("Rohit Sigar"); z();

//output
//10 'Rohit Sigar'

//-----------------------------------------------------

// function outest()
// {
//     var c = 1000;
// return function outer(b)
// {
    
//     function inner()
//     {
//         console.log(a , b , c);
//     }
//     let a = 10;
//     return inner;
// }

// }


// outest()("Rohit Sigar")();


//output

//10 'Rohit Sigar' 1000

//-------------------------

// function outest()
// {
//     var c = 1000;
// return function outer(b)
// {
    
//     function inner()
//     {
//         console.log(a , b , c);
//     }
//     let a = 10;
//     return inner;
// }

// }

// let a = 100;


// outest()("Rohit Sigar")();

//output

//10 'Rohit Sigar' 1000
// same output because both a are different 
// a in inner function has block scope which is not stored 
//globally



//-----------------------------------------------

// function outest()
// {
//     var c = 1000;
// return function outer(b)
// {
    
//     function inner()
//     {
//         console.log(a , b , c);
//     }

//     return inner;
// }

// }

// let a = 100;


// outest()("Rohit Sigar")();

//100 'Rohit Sigar' 1000


// advantages of Closures
//------------------------------------

// var counter = 0;

// function incrementCounter()
// {
//     counter++;
// }


//major dis is that anybody in out code can access counter
//and chnage it

//----------------------------------------------------

// function counter()
// {
//     var count = 0;
//    return function incrementCounter()
//   {  
//     count++;
//     console.log(count);
//   } 

// }

// var counter1 = counter();
// counter1();
// counter1();


// output -
// 1
// 2


// so now here count is kind of private we
// cannot access count difectly 
//added data hiding

// ------------------------------------------------


//another advantage

// function counter()
// {
//     var count = 0;
//    return function incrementCounter()
//   {  
//     count++;
//     console.log(count);
//   } 

// }

// var counter1 = counter();
// counter1();
// counter1();

// var counter2 = counter();
// counter2();


// counter2 is a seprate counter all together



// output -
// 1
// 2
// 1

//----------------------------------------------------

//if we have to add decrement function as well to count 
//then above code is not scaleable and not good
//so we have to use constructor function here

// function counter()
// {
//     var count = 0;
//    this.increment = function()
//    {
//     count++;
//     console.log(count);
//    }

//    this.decrement = function()
//    {
//     count--;
//     console.log(count);
//    }
// }

// var counter1 = new counter();

// counter1.increment();
// counter1.increment();
// counter1.decrement();

// output -
// 1
// 2
// 1


//-----------------------------------------------------

//disadvantage of Closure

//their could be overConsumption of memory in case of Closures
//because the variable in functon of Closure are not garbage Collected 
//till the progrm ends
//if not handles properly it may lead to memory leaks

//what is garbage collector ?

//it is like a program in javaScript engine or Browser which kind of 
//freze up the unutilized memory 
//in programming language like c , c++
// we generally 
//how we allocate or deallocte is upto developers
//but in high level programming language like JavaScript
//most of the work is done by javaScript engine 
//thier is a Garbage Collector in javaScript 
//whenever there are some unused veriables it kind of like take it out of memroy
//or freeze up that memory when get to know that these veriable are no longer needed


//how Closures and Garbage Clooector related to each other ? 



// function a()
// {
//     var x = 0;

//     return function b()
//     {
//         console.log(x);
//     }
// }

// var y = a();

//so ideally after the exection of a at line 293 
//memory should be free up 
//but as y contain closure of b and its lexical envroment
// x is not garbage colleection element
//so if we create lot of Closure if kind of acmulates lot of memory



//but is modern browers like crome and V8 have smart garbage collection machanism
//it find outs which verialbe in closure are not been used and collect them as Garbage veriable

//example


function a()
{
    var x = 0;

    return function b()
    {
        console.log(x);
    }
}

var y = a();







