//alert("yay");
var app = angular.module('myApp', ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home.html"
    })
    .when("/pastTests", {
        templateUrl : "pastTests.html"
    })
    .when("/MemoryTests", {
        templateUrl : "MemoryTests.html"
    })
    .when("/settings", {
        templateUrl : "settings.html"
    })
    .when("/TestOne", {
        templateUrl : "TestOne.html"
    });
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
      window.location = "#/";
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






    $scope.showvar = true;
    $scope.beginTest = function(){

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



});
