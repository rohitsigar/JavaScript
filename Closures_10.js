

// function x()
// {
//     var a = 7;

//     function y()
//     {
//         console.log(a);
//     }
//     y();
// }

// x();

//------------------------------




// function x()
// {
//     var a = 7;

//     function y()
//     {
//         console.log(a);
//     }
//     return y;
// }

// var z = x();

// console.log(z);

// z();


//output 

// ƒ y()
//     {
//         console.log(a);
//     }

//7

//-----------------------------------


// function x()
// {
//     var a = 7;

//     function y()
//     {
//         console.log(a);
//     }
//     a = 100;
//     return y;
// }

// var z = x();


// z();

// output -

// 100





//----------------------------------------------
// {


//       function y()
//       {

//       }

//       return y;
// }




// {
//     return function y(){
        
//     }
// }


//both are same thing 

//------------------------------------------------

// function z()
// {
//     var b = 900;

// return function x()
// {
//     var a = 7;

//     function y()
//     {
//         console.log(a  , b);
//     }
//     a = 100;
//     return y;
// }

// }

// var z1 = z();

// var y1 = z1();

// y1();

//output
//100 900

