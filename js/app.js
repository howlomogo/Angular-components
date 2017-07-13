angular.module('myApp', [])


.component('componentOne', {
	bindings: {
		name: '@'
	},
	template: `
		<h2>This is a component name is {{Ctrl1.name}}</h2>
		<component-two add-name='Ctrl1.addName(thename)'></component-two>
		<input ng-model='Ctrl1.tempName'></input>
		<input type='submit' ng-click='Ctrl1.saveName(Ctrl1.tempName)'></input>
	`,
	controller: function($log, $location) {
		var vm1 = this;

		vm1.addName = function(name){
			vm1.name = name;
		}

		vm1.$onInit = function(){

		}

		vm1.saveName = function(tempName) {
			vm1.tempName = '';
			vm1.name = tempName;
			$log.log(vm1.name);

		}
	},
	controllerAs: 'Ctrl1'
})

.component('componentTwo', {
	bindings: {
		addName: '&'
	},
	template: `
		<h4>This is component two</h4>
		<input ng-model="Ctrl2.newName">
		<button ng-click="Ctrl2.addAName()">Add Name</button>,
		`,
	controller: function($log) {
		var vm2 = this;

		vm2.addAName = function() {
			vm2.addName({thename: vm2.newName});
			vm2.newName = '';
		}

		vm2.$onInit = function(){
			vm2.blah = 'blah blah blah';

		}
	},
	controllerAs: 'Ctrl2'
})