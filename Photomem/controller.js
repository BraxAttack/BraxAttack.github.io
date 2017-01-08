//alert("yay");
var app = angular.module('myApp', ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "login.html"
    })
    .when("/home", {
        /* resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        }, */
        templateUrl : "home.html"
    })
    .when("/pastTests", {
        /* resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        }, */
        templateUrl : "pastTests.html"
    })
    .when("/MemoryTests", {
        /* resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        }, */
        templateUrl : "MemoryTests.html"
    })
    .when("/settings", {
        /* resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        }, */
        templateUrl : "settings.html"
    })
    .when("/tutorial", {
        /* resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        }, */
        templateUrl : "tutorial.html"
    })
    .when("/TestOne", {
        /* resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        }, */
        templateUrl : "testpages/TestOne.html"
    })
    .when("/TestTwo", {
        /* resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        }, */
        templateUrl : "testpages/TestTwo.html"
    })
    .when("/TestThree", {
        /* resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        }, */
        templateUrl : "testpages/TestThree.html"
    })
    .when("/TestFour", {
        /* resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        }, */
        templateUrl : "testpages/TestFour.html"
    })
    .when("/TestFive", {
        /* resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        }, */
        templateUrl : "testpages/TestFive.html"
    })
    .when("/TestSix", {
        /* resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        }, */
        templateUrl : "testpages/TestSix.html"
    })
    .when("/TestSeven", {
        /* resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        }, */
        templateUrl : "testpages/TestSeven.html"
    })
    .when("/TestEight", {
        /* resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        }, */
        templateUrl : "testpages/TestEight.html"
    })

    .when("/TestNine", {
        /* resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        }, */
        templateUrl : "testpages/TestNine.html"
    })
    .when("/TestTen", {
        /* resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        }, */
        templateUrl : "testpages/TestTen.html"
    })
    .when("/TestEleven", {
        /* resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        }, */
        templateUrl : "testpages/TestEleven.html"
    })
    .when("/TestTwelve", {
        /* resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        }, */
        templateUrl : "testpages/TestTwelve.html"
    })
    .when("/TestThirteen", {
        /* resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        }, */
        templateUrl : "testpages/TestThirteen.html"
    })
    .when("/TestFourteen", {
        /* resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        }, */
        templateUrl : "testpages/TestFourteen.html"
    })
    .when("/TestFifteen", {
        /* resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        }, */
        templateUrl : "testpages/TestFifteen.html"
    })
    .when("/TestSixteen", {
        /* resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        }, */
        templateUrl : "testpages/TestSixteen.html"
    })
    .when("/TestSeventeen", {
        /* resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        }, */
        templateUrl : "testpages/TestSeventeen.html"
    })
    .when("/TestEighteen", {
        /* resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        }, */
        templateUrl : "testpages/TestEighteen.html"
    })
    .when("/TestNineteen", {
        /* resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        }, */
        templateUrl : "testpages/TestNineteen.html"
    })
    .when("/TestTwenty", {
        /* resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        }, */
        templateUrl : "testpages/TestTwenty.html"
    })
    .when("/TestTwentyOne", {
        /* resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        }, */
        templateUrl : "testpages/TestTwentyOne.html"
    })
    .when("/TestTwentyOne", {
        /* resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        }, */
        templateUrl : "testpages/TestTwentyTwo.html"
    })
    .when("/TestTwentyTwo", {
        /* resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        }, */
        templateUrl : "testpages/TestTwentyTwo.html"
    })
    .when("/TestTwentThree", {
        /* resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        }, */
        templateUrl : "testpages/TestTwentyThree.html"
    })

    .when("/TestTwentyFour", {
        /* resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        }, */
        templateUrl : "testpages/TestTwentyFour.html"
    })
    .when("/TestTwentyFive", {
        /* resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        }, */
        templateUrl : "testpages/TestTwentyFive.html"
    })
    .when("/TestTwentySix", {
        /* resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        }, */
        templateUrl : "testpages/TestTwentySix.html"
    })
    .when("/TestTwentySeven", {
        /* resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        }, */
        templateUrl : "testpages/TestTwentySeven.html"
    })
    .when("/TestTwentyEight", {
        /* resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        }, */
        templateUrl : "testpages/TestTwentyEight.html"
    })
    .when("/TestTwentyNine", {
        /* resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        }, */
        templateUrl : "testpages/TestTwentyNine.html"
    })
    .when("/TestThirty", {
        /* resolve: {
            "check": function($location, $rootScope) {
              if(!$rootScope.loggedIn){
                  $location.path('/');
              }
            }
        }, */
        templateUrl : "testpages/TestThirty.html"
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

    $scope.removeprogress = function() {
      document.getElementById('slideoutdiv2').style.opacity = "0";
      document.getElementById('progressbarIDdiv').style.left = "-110vw";
      $timeout(function () {
        //alert("Test complete");
        document.getElementById('slideoutdiv2').style.left = "-200vw";
      }, 200);


    }

    $scope.addprogress = function() {
      //alert("dslkaj");
      document.getElementById('slideoutdiv2').style.left = "0vw";
      $timeout(function () {
        document.getElementById('slideoutdiv2').style.opacity = "1";
        document.getElementById('progressbarIDdiv').style.left = "0vw";
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

    //value to be returned by function as percentage of tests done (percentage)
    $scope.percentagereturn = 10;
    $scope.contrapercentagecompleted = 100 - $scope.percentagereturn;
    $scope.percentagecompleted = $scope.percentagereturn;



    $scope.showvar = true;
    $scope.beginTest = function(){
        //document.getElementById('headerdivid').style.visibility = "hidden";
        $scope.showvar = false;
        $timeout(function () {
          alert("Test complete");
          window.location.assign("http://localhost/photoMemoryGame/photomem.html")
        }, 900000);
    }

    $scope.endTest = function(){
        //document.getElementById('headerdivid').style.visibility = "hidden";
        $scope.showvar = true;

    }

    $scope.showwords = function(){

        document.getElementById('clicktobegin').style.zIndex = -3;
        document.getElementById('testDiv').style.backgroundColor = "black";
      $interval(function () {
        document.getElementById('testDiv').style.backgroundColor = "white";
          $timeout(function () {
            document.getElementById('testDiv').style.backgroundColor = "black";

          }, 500);
      }, 2000);


    };

    $scope.testsarray = [
      {testname: 'Test One', redirectlink: '/TestOne', completed: true},
      {testname: 'Test Two', redirectlink: '/TestTwo', completed: true},
      {testname: 'Test Three', redirectlink: '/TestThree', completed: true},
      {testname: 'Test Four', redirectlink: '/TestFour', completed: true},
      {testname: 'Test Five', redirectlink: '/TestFive', completed: true},
      {testname: 'Test Six', redirectlink: '/TestSix', completed: true},
      {testname: 'Test Seven', redirectlink: '/TestSeven', completed: true},
      {testname: 'Test Eight', redirectlink: '/TestEight', completed: true},
      {testname: 'Test Nine', redirectlink: '/TestNine', completed: true},
      {testname: 'Test Ten', redirectlink: '/TestTen', completed: true},
      {testname: 'Test Eleven', redirectlink: '/TestEleven', completed: true},
      {testname: 'Test Twelve', redirectlink: '/TestTwelve', completed: true},
      {testname: 'Test Thirteen', redirectlink: '/TestThirteen', completed: true},
      {testname: 'Test Fourteen', redirectlink: '/TestFourteen', completed: true},
      {testname: 'Test Fifteen', redirectlink: '/TestFifteen', completed: true},
      {testname: 'Test Sixteen', redirectlink: '/TestSixteen', completed: true},
      {testname: 'Test Seventeen', redirectlink: '/TestSeventeen', completed: true},
      {testname: 'Test Eighteen', redirectlink: '/TestEighteen', completed: true},
      {testname: 'Test Nineteen', redirectlink: '/TestNineteen', completed: true},
      {testname: 'Test Twenty', redirectlink: '/TestTwenty', completed: true},
      {testname: 'Test Twentyone', redirectlink: '/testTwentyOne', completed: true},
      {testname: 'Test Twentytwo', redirectlink: '/TestTwentyTwo', completed: true},
      {testname: 'Test Twentythree', redirectlink: '/TestTwentyThree', completed: true},
      {testname: 'Test Twentyfour', redirectlink: '/TestTwentyFour', completed: true},
      {testname: 'Test Twentyfive', redirectlink: '/TestTwentyFive', completed: true},
      {testname: 'Test Twentysix', redirectlink: '/TestTwentySix', completed: true},
      {testname: 'Test Twentyseven', redirectlink: '/TestTwentySeven', completed: true},
      {testname: 'Test Twentyeight', redirectlink: '/TestTwentyEight', completed: true},
      {testname: 'Test Twentynine', redirectlink: '/TestTwentyNine', completed: true},
      {testname: 'Test Thirty', redirectlink: '/TestThirty', completed: true}


    ];




    $scope.testone = [
      {text:'', icon: 'play_circle_filled', durration: 500, fsize: '200px'}
    ];

    $scope.testtwo = [
      {text:'', icon: 'content_cut', durration: 500, fsize: '200px'}
    ];

    $scope.testthree = [
      {text:'A BLACK HORSE', icon: '', durration: 500, fsize: '50px'}
    ];

    $scope.testfour = [
      {text:'', icon: 'MY VERY FIRST SENTANCE', durration: 500, fsize: '40px'}
    ];

    $scope.testfive = [
      {text:'', icon: 'content_cut', durration: 500, fsize: '200px'}
    ];

    $scope.testsix = [
      {text:'', icon: 'content_cut', durration: 500, fsize: '200px'}
    ];

    $scope.testseven = [
      {text:'', icon: 'content_cut', durration: 500, fsize: '200px'}
    ];

    $scope.testeight = [
      {text:'', icon: 'content_cut', durration: 500, fsize: '200px'}
    ];

    $scope.testnine = [
      {text:'', icon: 'content_cut', durration: 500, fsize: '200px'}
    ];

    $scope.testten = [
      {text:'', icon: 'content_cut', durration: 500, fsize: '200px'}
    ];

    $scope.testeleven = [
      {text:'', icon: 'content_cut', durration: 500, fsize: '200px'}
    ];

    $scope.testtwelve = [
      {text:'', icon: 'content_cut', durration: 500, fsize: '200px'}
    ];

    $scope.testthirteen = [
      {text:'', icon: 'content_cut', durration: 500, fsize: '200px'}
    ];

    $scope.testfourteen = [
      {text:'', icon: 'content_cut', durration: 500, fsize: '200px'}
    ];

    $scope.testfifteen = [
      {text:'', icon: 'content_cut', durration: 500, fsize: '200px'}
    ];

    $scope.testsixteen = [
      {text:'', icon: 'content_cut', durration: 500, fsize: '200px'}
    ];

    $scope.testseventeen = [
      {text:'', icon: 'content_cut', durration: 500, fsize: '200px'}
    ];

    $scope.testeighteen = [
      {text:'', icon: 'content_cut', durration: 500, fsize: '200px'}
    ];

    $scope.testnineteen = [
      {text:'', icon: 'content_cut', durration: 500, fsize: '200px'}
    ];

    $scope.testtwenty = [
      {text:'', icon: 'content_cut', durration: 500, fsize: '200px'}
    ];

    $scope.testtwentyone = [
      {text:'', icon: 'content_cut', durration: 500, fsize: '200px'}
    ];

    $scope.testtwentytwo = [
      {text:'', icon: 'content_cut', durration: 500, fsize: '200px'}
    ];

    $scope.testtwentythree = [
      {text:'', icon: 'content_cut', durration: 500, fsize: '200px'}
    ];

    $scope.testtwentyfour = [
      {text:'', icon: 'content_cut', durration: 500, fsize: '200px'}
    ];

    $scope.testtwentyfive = [
      {text:'', icon: 'content_cut', durration: 500, fsize: '200px'}
    ];

    $scope.testtwentysix = [
      {text:'', icon: 'content_cut', durration: 500, fsize: '200px'}
    ];

    $scope.testtwentyseven = [
      {text:'', icon: 'content_cut', durration: 500, fsize: '200px'}
    ];

    $scope.testtwentyeight = [
      {text:'', icon: 'content_cut', durration: 500, fsize: '200px'}
    ];

    $scope.testtwentynine = [
      {text:'', icon: 'content_cut', durration: 500, fsize: '200px'}
    ];

    $scope.testthirty = [
      {text:'', icon: 'content_cut', durration: 500, fsize: '200px'}
    ];






});
