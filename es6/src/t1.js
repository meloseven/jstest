/**
 * Created by melo on 2017/3/16.
 */
//use let
(function(){
    {
        let a =1;
        var b = 2;
    }
    console.log(a);
    console.log(b);
})();

//use let for loop
(function(){
    var a = [];
    for(let i=1;i<10;i++){
        a[i] = function(){
            console.log(i);
        }
    }
   a[6]();
})();

//use variable before claim
(function(){
    console.log(a);
    let a =1;
})();

//use let in block area
(function(){
    if (true) {
        // TDZ开始
        tmp = 'abc'; // ReferenceError
        console.log(tmp); // ReferenceError

        let tmp; // TDZ结束
        console.log(tmp); // undefined

        tmp = 123;
        console.log(tmp); // 123
    }
})();


//use repeat let
{
    //function f1(){
    //    let a = 1;
    //    var a = 1;
    //}
    //function f2(){
    //    let a = 1;
    //    let a = 2;
    //}
}

//test nest scope
{
    function a (){
        return 2;
    }
    {
        let b =a();
        console.log(b);
    }
}


