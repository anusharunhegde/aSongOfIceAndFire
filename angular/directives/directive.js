
myApp.directive('booksView',function(){
	return{
		restrict : 'E',
		templateUrl : 'views/booksView.html'
	}
});


myApp.directive('housesView',function(){
	return{
		restrict : 'E',
		templateUrl : 'views/housesView.html'
	}
});


myApp.directive('charactersView',function () {
	return{
		restrict : 'E',
		templateUrl : 'views/charactersView.html'
	}
})