angular.module('almundoController', []);

function mainController($scope, $http) {
	$scope.formData = {};
	$scope.formData.stars = new Array(7);
	/**
	 * Load hotels data from API
	 */
	$http.get('http://localhost:3000/api/search/hotel')
		.success(function(data) {
			$scope.hotels = data;
			console.log(data)
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	$scope.getStars = function(num){
		return new Array(num); 
	}

	$scope.searchHotel = function () {
		console.log($scope.formData);
		console.log(typeof $scope.formData.stars);

		if (typeof $scope.formData.name !== 'undefined' && typeof $scope.formData.stars !== 'undefined') {
			$http.post('/api/search/hotel/', $scope.formData)
			.success(function (data) {
				$scope.hotels = data;
				console.log(data)
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
		} else if (typeof $scope.formData.name == 'undefined' && typeof $scope.formData.stars !== 'undefined') {
			$http.get('/api/search/hotel/stars/' + $scope.formData.stars)
			.success(function (data) {
				$scope.hotels = data;
				console.log(data)
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
		} else if (typeof $scope.formData.name !== 'undefined' && typeof $scope.formData.stars == 'undefined') {
			
			$http.get('/api/search/hotel/name/' + $scope.formData.name)
			.success(function (data) {
				$scope.hotels = data;
				console.log(data)
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
		}
		else{
			$http.get('/api/search/hotel')
			.success(function(data) {
			$scope.hotels = data;
			console.log(data)
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
		}

	}

}