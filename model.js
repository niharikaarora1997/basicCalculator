app.factory("myfactory",()=>{
    var object = { compute(first,second,operator){
        var x=eval(first + operator + second);
        return x;
    }}
    return object;
});
