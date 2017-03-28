var app = angular.module('banheiro',[]);
 
app.controller('ListaCtrl',function($scope,$http){
$scope.hoteis2 = function (x,y) {
        console.log(x+"-"+y);
        window.sessionStorage.setItem("lat",x);
        window.sessionStorage.setItem("lng",y);
        location.href="mapa.html";
    }
	$http.get('./json/banheiros.json').success(function(data, status, headers, config) {
		$scope.privadas = data.data;
	}).error(function(data, status, headers, config) {
		console.log($postosaude);
  });
});
app.filter('searchFor', function(){
return function(arr, searchString){
		if(!searchString){
			return arr;
		}
		var result= [] ;
		searchString = searchString.toLowerCase();
		angular.forEach(arr, function(item){
			if((item.name.toLowerCase().indexOf(searchString)  !== -1) || (item.geoResult.address.toLowerCase().indexOf(searchString)  !== -1)  ){
			result.push(item);
		}
		});
		return result;
	};
});

			  		function index(){
				location.href="index.html"
			}
			  		function sobre(){
				location.href="sobre.html"
			}
  
var app = angular.module('delegacia',[]);
 
app.controller('ListaCtrl',function($scope,$http){
$scope.hoteis2 = function (x,y) {
        console.log(x+"-"+y);
        window.sessionStorage.setItem("lat",x);
        window.sessionStorage.setItem("lng",y);
        location.href="mapa.html?lat="+x+"&lng="+y;
    }
	$http.get('./json/delegacias.json').success(function(data, status, headers, config) {
		$scope.delegacias = data.data;
	}).error(function(data, status, headers, config) {
		
  });
});
app.filter('searchFor', function(){
return function(arr, searchString){
		if(!searchString){
			return arr;
		}
		var result= [] ;
		searchString = searchString.toLowerCase();
		angular.forEach(arr, function(item){
			if((item.name.toLowerCase().indexOf(searchString)  !== -1) || (item.geoResult.address.toLowerCase().indexOf(searchString)  !== -1)  ){
			result.push(item);
		}
		});
		return result;
	};
});
	

			  		function index(){
				location.href="index.html"
			}
			  		function delegaciaF(){
				location.href="gmDelegacia/delegaciaF.html"
			}
  
var app = angular.module('evento',[]);
 
app.controller('ListaCtrl',function($scope,$http){
$scope.hoteis2 = function (x,y) {
        console.log(x+"-"+y);
        window.sessionStorage.setItem("lat",x);
        window.sessionStorage.setItem("lng",y);
        location.href="mapa.html?lat="+x+"&lng="+y;
    }
	$http.get('./json/jogos-olimpicos.json').success(function(data, status, headers, config) {
		$scope.eventos = data.data;
	}).error(function(data, status, headers, config) {
		console.log($postosaude);
  });
});
app.filter('searchFor', function(){
return function(arr, searchString){
		if(!searchString){
			return arr;
		}
		var result= [] ;
		searchString = searchString.toLowerCase();
		angular.forEach(arr, function(item){
			if(item.name.toLowerCase().indexOf(searchString)  !== -1){
			result.push(item);
		}
		});
		return result;
	};
});
			  		function index(){
				location.href="index.html"
			}
			  		function sobre(){
				location.href="sobre.html"
			}
  
var app = angular.module('MyApp2',[]);


 
app.controller('ListaCtrl',function($scope,$http){
	$scope.hoteis2 = function (x,y) {
        console.log(x+"-"+y);
        window.sessionStorage.setItem("lat",x);
        window.sessionStorage.setItem("lng",y);
        location.href="mapa.html?lat="+x+"&lng="+y;
    }

	$http.get('./json/postos-saude.json').success(function(data, status, headers, config) {
		$scope.postossaude = data;
	}).error(function(data, status, headers, config) {
		console.log($postosaude);
  });
});
app.filter('searchFor', function(){
return function(arr, searchString){
		if(!searchString){
			return arr;
		}
		var result= [] ;
		searchString = searchString.toLowerCase();
		angular.forEach(arr, function(item){
			if((item.name.toLowerCase().indexOf(searchString)  !== -1) || (item.geoResult.address.toLowerCase().indexOf(searchString)  !== -1) ||(item.description.text.toLowerCase().indexOf(searchString)  !== -1) ){
			result.push(item);
		}
		});
		return result;
	};
});
	
	function index(){
				location.href="index.html"
			}
			function hospitalF(){
				location.href="gmHopital/hospitalF.html"
			}	
  
var app = angular.module('hotel',[]);
 
app.controller('ListaCtrl',function($scope,$http){
$scope.hoteis2 = function (x,y) {
        console.log(x+"-"+y);
        window.sessionStorage.setItem("lat",x);
        window.sessionStorage.setItem("lng",y);
        location.href="mapa.html?lat="+x+"&lng="+y;
    }
	$http.get('./json/hoteis.json').success(function(data, status, headers, config) {
		$scope.hoteis = data.data;
	}).error(function(data, status, headers, config) {
		
  });
});
app.filter('searchFor', function(){
return function(arr, searchString){
		if(!searchString){
			return arr;
		}
		var result= [] ;
		searchString = searchString.toLowerCase();
		angular.forEach(arr, function(item){
			if((item.name.toLowerCase().indexOf(searchString)  !== -1) || (item.geoResult.address.toLowerCase().indexOf(searchString)  !== -1)  ){
			result.push(item);
		}
		});
		return result;
	};
});
	

			  		function index(){
				location.href="index.html"
			}
			  		function sobre(){
				location.href="sobre.html"
			}
  
  
  		
		

var app = angular.module('pontos',[]);
 
app.controller('ListaCtrl',function($scope,$http){
$scope.hoteis2 = function (x,y) {
        console.log(x+"-"+y);
        window.sessionStorage.setItem("lat",x);
        window.sessionStorage.setItem("lng",y);
        location.href="mapa.html?lat="+x+"&lng="+y;
    }
	$http.get('./json/pontos-turisticos.json').success(function(data, status, headers, config) {
		$scope.turismo = data.data;
	}).error(function(data, status, headers, config) {
		
  });
});
app.filter('searchFor', function(){
return function(arr, searchString){
		if(!searchString){
			return arr;
		}
		var result= [] ;
		searchString = searchString.toLowerCase();
		angular.forEach(arr, function(item){
		if(item.name.toLowerCase().indexOf(searchString)  !== -1){
			result.push(item);
		}
		});
		return result;
	};
});
	

			  		function index(){
				location.href="index.html"
			}
			  		function sobre(){
				location.href="sobre.html"
			}
  

var app = angular.module('praia',[]);
 
app.controller('ListaCtrl',function($scope,$http){
$scope.hoteis2 = function (x,y) {
        console.log(x+"-"+y);
        window.sessionStorage.setItem("lat",x);
        window.sessionStorage.setItem("lng",y);
        location.href="mapa.html?lat="+x+"&lng="+y;
    }
	$http.get('./json/praias.json').success(function(data, status, headers, config) {
		$scope.beach = data.data;
	}).error(function(data, status, headers, config) {
		
  });
});
app.filter('searchFor', function(){
return function(arr, searchString){
		if(!searchString){
			return arr;
		}
		var result= [] ;
		searchString = searchString.toLowerCase();
		angular.forEach(arr, function(item){
			if((item.name.toLowerCase().indexOf(searchString)  !== -1) || (item.geoResult.neighbourhood.toLowerCase().indexOf(searchString)  !== -1) ) {
			result.push(item);
		}
		});
		return result;
	};
});
	

			  		function index(){
				location.href="index.html"
			}
			  		function sobre(){
				location.href="sobre.html"
			}
  
var app = angular.module('restaurante',[]);
 
app.controller('ListaCtrl',function($scope,$http){
$scope.hoteis2 = function (x,y) {
        console.log(x+"-"+y);
        window.sessionStorage.setItem("lat",x);
        window.sessionStorage.setItem("lng",y);
        location.href="mapa.html?lat="+x+"&lng="+y;
    }
	$http.get('./json/restaurantes.json').success(function(data, status, headers, config) {
		$scope.comer = data.data;
	}).error(function(data, status, headers, config) {
		console.log($postosaude);
  });
});
app.filter('searchFor', function(){
return function(arr, searchString){
		if(!searchString){
			return arr;
		}
		var result= [] ;
		searchString = searchString.toLowerCase();
		angular.forEach(arr, function(item){
			if(item.name.toLowerCase().indexOf(searchString)  !== -1) {
			result.push(item);
		}
		});
		return result;
	};
});
			  		function index(){
				location.href="index.html"
			}
			  		function sobre(){
				location.href="sobre.html"
			}
  
