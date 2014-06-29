angular
	.module('app',['wu.masonry'])
	.factory('BricksFactory',function BricksFactory() {
		var factory = function (name) {
			this.name = name;
			this.items = [{
				header: "This is the header.",
				body: "And this is the body, and the body is very nice!"
			},{
				header: "This is the header.",
				body: "And this is the body, and the body is very nice!"
			}];
		}
		factory.prototype.addItem = function () {
			this.items.push({
				header: this.item.header,
				body: this.item.body
			});
		}
		factory.prototype.removeItem = function (i) {
			this.items.splice(i,1);
		}
		return factory;
	})
	.controller('AppController',['$scope','BricksFactory',function AppController($scope,BricksFactory) {
		$scope.bricks = [new BricksFactory("At Mom's"),new BricksFactory("Things You Need")];
	}])
;