angular.module('personApp').factory('PersonService', function() {
    let persons = [];
    let nextId = 1;

    return {
        getAll: function() {
            return persons;
        },
        add: function(person) {
            person.id = nextId++;
            persons.push(person);
        },
        update: function(updatedPerson) {
            for (let i = 0; i < persons.length; i++) {
                if (persons[i].id === updatedPerson.id) {
                    persons[i] = updatedPerson;
                    break;
                }
            }
        },
        delete: function(id) {
            persons = persons.filter(person => person.id !== id);
        }
    };
});
