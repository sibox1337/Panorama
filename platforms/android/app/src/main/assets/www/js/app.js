var app = angular.module('PanApp',['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "groups.html",
        controller: "GroupController"
       
    })
    .when("/items/:id", {
        templateUrl : "items.html",
        controller: "ItemsController"
    });
});

app.controller('GroupController',['$scope','$http','$route',function($scope,$http,$route) {
		$scope.groups = [];
		$scope.grid;

		$scope.listGroups = function() {
		
			
			
			$http.get('http://192.168.1.101/Panorama/Panorama/www/list.php', {})
				.then(function success(e) {
					
				$scope.groups = e.data.groups;
					}, function error(e) {
						alert(e);
					});
				
			
			
		};
		$scope.listGroups();

		
		
		}]);
		
app.controller('ItemsController',['$scope','$http','$routeParams',function($scope,$http,$routeParams) {
		$scope.items = [];

		$scope.getItems = function() {
			$http.get('http://192.168.1.101/Panorama/Panorama/www/items.php?grid=' + $routeParams.id, {})
				.then(function success(e) {
					
					$scope.items = e.data.items;
					}, function error(e) {
						
					});
			
		};
		$scope.getItems();
	
		}]);