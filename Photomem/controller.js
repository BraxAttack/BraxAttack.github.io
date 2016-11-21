//alert("yay");
var app = angular.module('myApp', ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "login.html"
    })
    .when("/home", {
        resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        },
        templateUrl : "home.html"
    })
    .when("/pastTests", {
        resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        },
        templateUrl : "pastTests.html"
    })
    .when("/MemoryTests", {
        resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        },
        templateUrl : "MemoryTests.html"
    })
    .when("/settings", {
        resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        },
        templateUrl : "settings.html"
    })
    .when("/TestOne", {
        resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        },
        templateUrl : "TestOne.html"
    })
    .when("/TestTwo", {
        resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        },
        templateUrl : "TestTwo.html"
    })
    .when("/TestThree", {
        resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        },
        templateUrl : "TestThree.html"
    })
    .otherwise({
        redirectTo : '/home'
    });
});

app.controller('loginCtrl', function($scope, $location, $rootScope) {
    $scope.submit = function(){
        console.log($scope.username);
        var uname = $scope.username;
        var password = $scope.password;
        if($scope.username == 'admin' && $scope.password == 'admin'){

            $rootScope.loggedIn = true;
            $location.path('/home');
        } else {
            alert('Wrong stuff');
        }
    };
});


app.controller('myCtrl', function($scope, $timeout, $interval) {

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

    $scope.clickhome = function() {
      window.location = "#/home";
      $scope.removemenu();
    }

    $scope.clickmemoryass = function() {
      window.location = "#/MemoryTests";
      $scope.removemenu();
    }

    $scope.clickpasttests = function() {
      window.location = "#/pastTests";
      $scope.removemenu();
    }

    $scope.clicksettings = function() {
      window.location = "#/settings";
      $scope.removemenu();
    }





    //will be pulled from database as current test used to define test
    $scope.currenttest = 'Three';



    $scope.showvar = true;
    $scope.beginTest = function(){
        //document.getElementById('headerdivid').style.visibility = "hidden";
        $scope.showvar = false;
        $timeout(function () {
          alert("Test complete");
          window.location.assign("http://localhost/photoMemoryGame/photomem.html")
        }, 900000);
    }

    $scope.showwords = function(){

        document.getElementById('clicktobegin').style.zIndex = -3;
        document.getElementById('testDiv').style.backgroundColor = "white";
      $interval(function () {
        document.getElementById('testDiv').style.backgroundColor = "white";
          $timeout(function () {
            document.getElementById('testDiv').style.backgroundColor = "black";

          }, 500);
      }, 2000);


    }

    $scope.testone = [
      {text:'', icon: 'play_circle_filled', durration: 500, fsize: '200px'}
    ];

    $scope.testtwo = [
      {text:'', icon: 'content_cut', durration: 500, fsize: '200px'}
    ];

    $scope.testthree = [
      {text:'This is a bunch of words', icon: '', durration: 500, fsize: '40px'}
    ];



});
