var app = angular.module('PanApp',['ngRoute','bc.AngularKeypad','angularRipple'])
.constant('ipService', {
	ip: 'http://192.168.1.101/Panorama/Panorama/www/'
	});


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
	.when('/login', {
			templateUrl:  "login.html",
			controller: "LoginController"
			});
			
	
});

app.controller('GroupController',['$scope','$http','$route','ipService',function($scope,$http,$route,ipService) {
		$scope.groups = [];
		$scope.grid;

		$scope.listGroups = function() {
		
		
			
			$http.get(ipService.ip + 'list.php', {})
				.then(function success(e) {
					
				$scope.groups = e.data.groups;
					}, function error(e) {
						alert(e);
					});
				
			
			
		};
		$scope.listGroups();

		
		
		}]);
		
app.controller('ItemsController',['$scope','$http','$routeParams','ipService',function($scope,$http,$routeParams,ipService) {
		$scope.items = [];
		$scope.params = $routeParams.id;
		$scope.getItems = function() {
			$http.get(ipService.ip + 'items.php?grid=' + $routeParams.id, {})
				.then(function success(e) {
					
					$scope.items = e.data.items;
					}, function error(e) {
						
					});
			
		};
		
		
		$scope.getItems();
		
		$scope.insertTobon = function($params) {
			
			$http({
				method: 'post',
				url: ipService.ip + 'add_items.php',
				
				data: {
					itemid: $params,
			
						},
				
				
					}).success(function(response) {
						console.log(response);
					}).error(function(response) {
						console.log(response);	
					});
			
		};
		}]);
		
app.controller('ModsController',['$scope','$http','ipService',function($scope,$http,ipService) {
		$scope.mods = [];

		$scope.listMods = function() {
		
			
			
			$http.get(ipService.ip + 'mods.php', {})
				.then(function success(e) {
					
				$scope.mods = e.data.mods;
					}, function error(e) {
						alert(e);
					});
				
			
			
		};
		$scope.listMods();
		
		$scope.insertToDish = function($params) {
			$http({
			method: 'post',
			url: ipService.ip + 'add_modificator.php',
			data: {
				modid: $params,
			},
			
			}).success(function(response) {
				console.log(response);
				}).error(function(response) {
				console.log(response);	
				});
			
		}
	
		}]);
		
app.controller('LoginController',['$scope','$http','ipService',function($scope,$http,ipService) {
	
		$scope.submit = function() {
			
			$http({
				method: 'post',
				url: ipService.ip + 'login.php',
				data: {
					pin: $scope.numbers,
				},
				
			}).success(function(response) {
				console.log(response);
					}).error(function(response) {
						console.log(response);
					})
			
			
			
		}
	
		}]);
		
