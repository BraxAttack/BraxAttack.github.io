//alert("yay");
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {




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
