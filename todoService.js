var app = angular.module('todoList');

app.service('todoService', function(){

	var todos = ['happ', 'sdfj'];

	this.getData = function(){
		return todos;
	};

	this.addData = function(newItem){
		todos.unshift(newItem);
	
	};

	this.removeData = function(itemToRemove){
		for(var i = 0; i < todos.length; i++) {
			if(todos[i] === itemToRemove) {
				todos.splice(i, 1); 
            	return;
            };
        };
	};

	
});