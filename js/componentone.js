angular.module('componentOneModule', [])

.component('componentOne', {
	bindings: {
		name: '@'
	},
	templateUrl: '../componentone.html',
	controller: testController,
	controllerAs: 'Ctrl'
})

function testController($log, $location) {
	var vm = this;

	vm.addName = function(name){
		vm.name = name;
	}

	vm.$onInit = function(){

	}

	vm.saveName = function(tempName) {
		vm.tempName = '';
		vm.name = tempName;
		$log.log(vm.name);

	}
}