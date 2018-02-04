myApp.config(['$routeProvider',function($routeProvider){

	$routeProvider
	.when('/',{

		templateUrl : 'views/about.html'
	})
	.when('/books',{

		templateUrl : 'views/books.html',

		controller : 'mainController',

		controllerAs : 'main'
		
	})
	.when('/abook/:bookid',{

		templateUrl : 'views/bookDetails.html',

		controller : 'a-bookController',

		controllerAs : 'abook'
	})
	.when('/ahouse/:houseid',{

		templateUrl : 'views/houseDetails.html',

		controller : 'a-houseController',

		controllerAs : 'ahouse'
	})
	.when('/achar/:charid',{

		templateUrl : 'views/charDetails.html',

		controller : 'a-charController',

		controllerAs : 'achar'
	})
	.otherwise({
		template : "<h1>404. Page Not Found</h1>"
	});
}]);