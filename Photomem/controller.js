//alert("yay");
var app = angular.module('myApp', ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home.html"
    })
    .when("/red", {
        templateUrl : "red.html"
    })
    .when("/MemoryTests", {
        templateUrl : "MemoryTests.html"
    })
    .when("/blue", {
        templateUrl : "blue.html"
    });
});

app.controller('myCtrl', function($scope, $timeout) {

    $scope.alertfunction = function() {

          alert("theings");

    }

    $scope.removemenu = function() {
      document.getElementById('slideoutdiv2').style.opacity = "0";
      document.getElementById('slideoutdiv1').style.left = "-50vw";
      $timeout(function () {
        //alert("Test complete");
        document.getElementById('slideoutdiv2').style.left = "-200vw";
      }, 200);


    }

    $scope.addmenu = function() {
      //alert("dslkaj");
      document.getElementById('slideoutdiv2').style.left = "0vw";
      $timeout(function () {
        document.getElementById('slideoutdiv2').style.opacity = "1";
        document.getElementById('slideoutdiv1').style.left = "0vw";
      }, 10);
    }


    $scope.PageLists = [
      {name:'Test one', link: 'testone.html'},
      {name:'Test two', link: 'testtwo.html'},
      {name:'Test three', link: 'testthree.html'},
      {name:'Test four', link: 'testfour.html'},
      {name:'Test five', link: 'testfive.html'},
      {name:'Test six', link: 'testsix.html'},
      {name:'Test seven', link: 'testseven.html'},
      {name:'Test eight', link: 'testeight.html'},
      {name:'Test nine', link: 'testnine.html'}
    ];



});
