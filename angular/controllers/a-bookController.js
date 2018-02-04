
 myApp.controller('a-bookController',['appService','$routeParams',function(appService,$routeParams){

  		var main=this;

 		this.bookid=$routeParams.bookid;
 		this.details=[];

 		this.bookDetails=function(){
 			appService.getAbook(main.bookid)
 			.then(function successCallback(response){
 				main.details=response.data;
 				console.log(main.details);
 			},function errorCallback(response){
 				alert('some error occured!!');
 				console.log(response);
 			});
 		}
 		this.bookDetails();
 	
 }]);