/**
 * Created by ayushimittal on 20/08/17.
 */
var app = angular.module('myApp',[]);
app.controller('myCtrl',function ($scope) {

   $scope.persons =[
       {
           fname:'Ayushi',
           lname:'Mittal'
       },
       {
           fname:'Vishal',
           lname:'Raghav'
       },
       {
           fname:'Ujjwal',
           lname:'Mittal'
       }
   ];
   $scope.cars =['wagonR','eco sport','swift','BMW','suzuki'];
});
