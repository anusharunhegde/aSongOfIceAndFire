myApp.controller('a-charController',['appService','$routeParams',function(appService,$routeParams){

 		
 		var main=this;

 		this.charid=$routeParams.charid;
 		this.details=[];

 		this.charDetails=function(){
 			appService.getAcharacter(main.charid)
 			.then(function successCallback(response){
 				main.details=response.data;
 				console.log(main.details);
 			},function errorCallback(response){
 				alert('some error occured!!');
 				console.log(response);
 			});
 		}
 		this.charDetails();
 		
 }]);