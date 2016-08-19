angular
    .module('todoApp')
    .controller('ListController', ListController)

function ListController() {
    var vm = this;

    vm.list = {
        name: 'Saturday Chores',
        tasks: [
            {
                name: "Take out trash",
                complete: false
            },
            {
                name: "Paint kitchen",
                complete: false
            },
            {
                name: "Take dog to the vet",
                complete: true
            },
            {
                name: "Go surfing",
                complete: false
            },
            {
                name: "Change the cars breaks",
                complete: false
            }
        ]

    }


}
