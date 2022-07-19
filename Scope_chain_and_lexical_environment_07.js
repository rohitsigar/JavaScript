function a()
{
    var b = 10;

    c();

    function c()
    {
        console.log(b);
    }
}

a();
console.log(b);  // here b in not in the scope

// b is inside the scope of function a;
// b is inside the scope of function c;

