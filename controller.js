app.controller("myctrl",($scope,myfactory)=>{
    $scope.add=function(){
       var result = myfactory.compute($scope.num1,$scope.num2,"+");
       $scope.res=result;
       console.log(result);
    } 
    $scope.sub=function(){
       var result = myfactory.compute($scope.num1,$scope.num2,"-");
       $scope.res=result;
       console.log(result);
    } 
    $scope.mul=function(){
       var result = myfactory.compute($scope.num1,$scope.num2,"*");
       $scope.res=result;
       console.log(result);
    } 
    $scope.div=function(){
       var result = myfactory.compute($scope.num1,$scope.num2,"/");
       $scope.res=result;
       console.log(result);
    } 
   });