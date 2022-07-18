
//---------------------------------------
//basic
// var x = 7;

// function getName()
// {
//     console.log("Rohit Sigar");
// }

// getName();

// console.log(x);
//output -> 

//Rohit Sigar
//7 



//----------------------------------------------


//example of hoisting ->eir  we can even access functions
// and veriables even before their initialization and declaration

// getName();

// console.log(x);


// var x = 7;

// function getName()
// {
//     console.log("Rohit Sigar");
// }

//output -> 

//Rohit Sigar
//undefined 


//--------------------------------------------

// getName();

// console.log(x);



// function getName()
// {
//     console.log("Rohit Sigar");
// }

//give error
//  x is not defined


//-=-------------------------------------------------------------


// console.log(getName);



// function getName()
// {
//     console.log("Rohit Sigar");
// }


// output 
//will print complete code 
// ƒ getName()
// {
//     console.log("Rohit Sigar");
// }

//--------------------------------------------------




// console.log(getName);

// var getName = () => {
//     console.log("Rohit Sigar");
// }


//output
//undefined
//---------------------------------------------------


// console.log(getName);

// var getName = function() {
//     console.log("Rohit Sigar");
// }


//output
//undefined







