myApp.controller('a-houseController',['appService','$routeParams',function(appService,$routeParams){

 		
 		var main=this;

 		this.houseid=$routeParams.houseid;
 		this.details=[];

 		this.houseDetails=function(){
 			appService.getAhouse(main.houseid)
 			.then(function successCallback(response){
 				main.details=response.data;
 				console.log(main.details);
 			},function errorCallback(response){
 				alert('some error occured!!');
 				console.log(response);
 			});
 		}
 		this.houseDetails();
 		
 }]);