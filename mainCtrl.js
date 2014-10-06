var app = angular.module('todoList');

app.controller('mainCtrl', function($scope, todoService){

	$scope.getData = function(){
		$scope.todos = todoService.getData();
		

	};

	$scope.addData = function(item){
		todoService.addData(item);
		$scope.itemtoAdd = '';
	};

	$scope.removeData = function(item){
		todoService.removeData(item);
	};

	$scope.getData();
});