angular
	.module('app',['wu.masonry'])
	.factory('MasonFactory',function MasonFactory() {
		var mason = function () {
			this.stones = [new Stone({
				header: "This is the header.",
				body: "This is the body, and it is a nice one."
			}),new Stone({
				header: "This is the header.",
				body: "This is the body, and it is a nice one."
			})];
		}
		mason.prototype.mortar = function (mortar) {
			var wall = angular.element('#wall');
			wall.masonry(mortar);
		}
		return mason;
		function Stone (stone) {
			this.header = stone.header;
			this.body = stone.body;
		}
	})
	.controller('AppController',['$scope','MasonFactory',function AppController($scope,MasonFactory) {
		$scope.mason = new MasonFactory();
		$scope.mason.mortar({
	        columnWidth:  300,
	        itemSelector: '.brick',
	        isFitWidth: true
	    });
	}])
;