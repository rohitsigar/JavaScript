

{


}
//block is defined by there carlie braces
//block also know as Compound Statement
//used to Combine muliple javascript into one group


// example - 

// {
//     var a = 20;
//     console.log(a);
// }

//we need to group these statements so that we can use 
//multiple javascript statements where javascript 
//expects only one statements 


// exampple 
 
// if(true)
 // here it expects single statements 
//  {
//     var a = 20;
//     console.log(a);
//  }


 //block scope 
 //WHAT ALL VEERIABLE AND FUNCTIONS WHICH WE CAN ACCESS INSIDE THE BLOCK


//  {
//     var a = 10;

//     let b =  20;

//     const c = 30;

//     console.log(a);
//     console.log(b);
//     console.log(c);    
//  }

//  console.log(a);
//  console.log(b);
//  console.log(c);

//  output - 

//  10
//  20
//  30
//  10
//  ReferenceError b is not defined 

//because b and c are block scoped and can only be accessed inside the 
//block 



// shadowing in JS


// var a = 100;


//  {
//     var a = 10;

//     let b =  20;

//     const c = 30;

//     console.log(a);
  
//  }

//  console.log(a);


//output

//10
//10
// let b = 300;

// {
//     var a = 10;

//     let b =  20;

//     const c = 30;`

    
//     console.log(b);
      
// }

//  console.log(b);

 //output 
 //10
 //300



//  const c = 300;

// {
//     var a = 10;

//     let b =  20;

//     const c = 30;

    
//     console.log(c);
      
// }

//  console.log(c);



 //output 
 //30
 //300




 //illigal shawowing

//-------------------------------
//  let a = 10;

//  {
//     var a = 20;
//  }

//this is illigal 
//because var here will have global scope 
//so it should have block scope to do this
//-------------------------


// let a = 10;


// function b()
// {
//     var a = 20;
//     console.log(a);
// }
// b();

// console.log(a);

//output 
//20
//10



//this is ligal 
//because here var a have scope of only b function


//---------------------------------------------


// var a = 10;


// {
//     let a = 200;
//     console.log(a);
// }

// console.log(a);

//legal
//output
//200
//10



//-------------------------------------


// const a = 20;

// {
//     const a = 30;
//     {

//         {

//             console.log(a);
//         }
//         console.log(a);
//     }
//     console.log(a);
// }
// console.log(a);


//output
//30
//30
//30
//20

//it also follows lixical environment
//if now find in current block look in parent block and so on 
// same in case of functions and allows functions

