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
    })
    .when('/mods', {
    		templateUrl: "mods.html",
    		controller: "ModsController"
			})
	.when('items/:iditem/insert/table/:idtable', {
			templateUrl: "items_insert.html",
			controller:  "InsertController"
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
		$scope.params = $routeParams.id;
		$scope.getItems = function() {
			$http.get('http://192.168.1.101/Panorama/Panorama/www/items.php?grid=' + $routeParams.id, {})
				.then(function success(e) {
					
					$scope.items = e.data.items;
					}, function error(e) {
						
					});
			
		};
		$scope.getItems();
	
		}]);
		
app.controller('ModsController',['$scope','$http',function($scope,$http) {
		$scope.mods = [];

		$scope.listMods = function() {
		
			
			
			$http.get('http://192.168.1.101/Panorama/Panorama/www/mods.php', {})
				.then(function success(e) {
					
				$scope.mods = e.data.mods;
					}, function error(e) {
						alert(e);
					});
				
			
			
		};
		$scope.listMods();
	
		}]);
		
app.controller('InsertController',['$scope','$http','$routeParams',function($scope,$http,$routeParams) {
			$scope.$routeParams = $routeParams;
		}]);