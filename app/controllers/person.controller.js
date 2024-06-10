angular.module('personApp').controller('PersonController', ['$scope', 'PersonService', function($scope, PersonService) {
    $scope.persons = PersonService.getAll();

    $scope.addPerson = function() {
        if ($scope.newPerson && $scope.newPerson.name && $scope.newPerson.age > 0) {
            PersonService.add($scope.newPerson);
            $scope.newPerson = {};
        } else {
            alert("A idade deve ser maior que 0.");
        }
    };

    $scope.editPerson = function(person) {
        $scope.editedPerson = angular.copy(person);
    };

    $scope.updatePerson = function() {
        if ($scope.editedPerson && $scope.editedPerson.id !== null && $scope.editedPerson.age > 0) {
            PersonService.update($scope.editedPerson);
            $scope.editedPerson = null;
        } else {
            alert("A idade deve ser maior que 0.");
        }
    };

    $scope.deletePerson = function(id) {
        PersonService.delete(id);
        $scope.persons = PersonService.getAll(); // Atualiza a lista após a exclusão
    };
}]);
