'use strict';

function TodoCtrl($scope, $http) {
  
  
  $scope.todos = [];
  
  // Adding New Task In TodoList
  $scope.newTodoLabel = '';
  $scope.addNewTodo = function() {
  	var newTodo = $scope.newTodoLabel.trim();
  	$scope.newTodoLabel = '';
	if (!newTodo.length) {
		return;
	}

  	$scope.todos.push({label: newTodo, completed: false});
  };
}