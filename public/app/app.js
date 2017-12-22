var app = angular.module('bookapp', ['ui.router', 'angularUtils.directives.dirPagination']);
app.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');
})
app.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
		$stateProvider
			.state('home', {
				url: "/home",
				templateUrl: "templates/home.html"
			})
	}
]);


app.controller('submit-n-number', function($scope, $http, $state) {
	$scope.number = {};
	$scope.wordslength = {};
	$scope.topnwords = {};
	$scope.pageSize = 5;
	$scope.currentPage = 1;
	$scope.myValue = false;
	$scope.getwords = function() {
		var payload = {
			"number": $scope.number.no
		}
		$http.post("/topnwords", payload).success(function(res) {
			$scope.topnwords = res.data;
			$scope.wordslength = res.wordslength;
			$scope.myValue = true;
			$scope.number = "";
			$state.go("home");
		});
	};
});