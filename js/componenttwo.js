angular.module('componentTwoModule', [])

.component('componentTwo', {
	bindings: {
		addName: '&'
	},
	templateUrl: '../componenttwo.html',
	controller: testController2,
	controllerAs: 'Ctrl'
})

function testController2($log) {
	var vm = this;

	vm.addAName = function() {
		vm.addName({name: vm.newName});
		vm.newName = '';
	}

	vm.$onInit = function(){
		vm.blah = 'blah blah blah';

	}
}