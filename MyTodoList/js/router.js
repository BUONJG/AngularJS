MyTodoApp.config(function($routeProvider) {
	$routeProvider.
		when('/home' , { controller: HomeCtrl  , templateUrl: 'partials/home.html' }).
		when('/todo' , { controller: TodoCtrl  , templateUrl: 'partials/todo.html' }).
		when('/stock', { controller: StockCtrl , templateUrl: 'partials/stock.html' }).
		otherwise({redirectTo:'/home'});
});