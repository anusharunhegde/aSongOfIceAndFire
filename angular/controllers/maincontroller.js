myApp.controller('mainController',['$http','appService', function($http,appService){

	var main=this;

	this.displayBooks=true;
	this.displayHouses=false;
	this.displayCharacters=false;

	this.books=[];
	this.houses=[];
	this.characters=[];

	this.allBooks=function(){
			main.displayBooks=true;
			main.displayHouses=false;
			main.displayCharacters=false;
		//console.log('advfherk');
		appService.getAllBooks()
		.then(function successCallback(response){
			main.books=response.data;
			//console.log(main.books);

		},function errorCallback(response){

		});
	};

	this.allBooks();

	this.allHouses=function(){

			main.displayHouses=true;
			main.displayCharacters=false;
			main.displayBooks=false;

		appService.getAllHouses()
		.then(function successCallback(response){
				main.houses=response.data;
				console.log(main.houses);
		},function errorCallback(response){
				alert('some error occured!!');
				console.log(response);
		});
	}

		this.allCharacters=function(){

			main.displayHouses=false;
			main.displayCharacters=true;
			main.displayBooks=false;

		appService.getAllCharacters()
		.then(function successCallback(response){
				main.characters=response.data;

				//console.log(main.characters);
		},function errorCallback(response){
				alert('some error occured!!');
				console.log(response);
		});
	}

	
}]);