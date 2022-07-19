
// function x()
// {
//     var i = 1;

//     setTimeout(function(){
//         console.log(i);
//     } , 3000);
//     console.log("Rohit Sigar");
// }

// x();

//here setTimeout will take the Closure of the function
//store in seprate memory for 3 seconds 
//and after 3 seconds it will call back the function 
//and execute it
//for that time being code will execute 


//output
//Rohit Sigar
//1


//question -> print 1 after 1 second 
//2 after 2 second 
//3 after 3 second 
//4 after 4 second
//5 after 5 second


//first try

// function y()
// {
//     for(var i=1;i<=5;i++)
//     {
//         setTimeout(function()
//         {
//             console.log(i);
//         } , i*1000);
//     }
// }

// y();


//output
// 6
// 6
// 6
// 6
// 6

//reason  i is of type var so it is store globally 
//are five function are stored saptertely but 
//for loops runs very fast so i will become 6
//and which all setTimeout function will access


// function y()
// {
//     for(let i=1;i<=5;i++)
//     {
//         setTimeout(function()
//         {
//             console.log(i);
//         } , i*1000);
//     }
// }

// y();

// output-
// 1
// 2
// 3
// 4
// 5

//output if currect because here we have used let and let
//have only block scope so every five function have their 
//own i 



//but what if we have to do it using var only


function y()
{
    
    for(var i=1;i<=5;i++)
    {
        function x(t)
        {
            setTimeout(function()
            {
                console.log(t);
            } , t*1000);

        }
        x(i);  
    }
}

y();


// output-
// 1
// 2
// 3
// 4
// 5
//here we are making 5 copy of function x and each x function have its own t
// everytime we have a new veriable var t which is different for all 5
//setTimeout functions so they will access that 
