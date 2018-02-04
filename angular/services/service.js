
myApp.factory('appService',function($http){

	var baseUrl='https://anapioficeandfire.com/api';
	var appData={};

	appData.getAllBooks=function(){

		return $http.get(baseUrl + '/books?page=1&pageSize=15');
	}

	appData.getAllHouses=function(){
		return $http.get(baseUrl + '/houses?page=1&pageSize=50');
	}

	appData.getAllCharacters=function(){
		return $http.get(baseUrl + '/characters?page=1&pageSize=50');
	}
	
	appData.getAbook=function(bookid){
		return $http.get(baseUrl + '/books/'+bookid)
	}
	appData.getAhouse=function(houseid){
		return $http.get(baseUrl + '/houses/'+houseid)
	}
	appData.getAcharacter=function(charid){
		return $http.get(baseUrl + '/characters/'+charid)
	}
	return appData;
});