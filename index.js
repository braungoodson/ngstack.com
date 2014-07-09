angular
	.module('app',[])
	.factory('BricksFactory',function BricksFactory() {
		var factory = function (brick) {
			this.name = brick.name;
			this.items = [{
				body: '13308: Trip pages are hashed, and the root cause of 12972.',
				ok: true
			}];
		}
		factory.prototype.addItem = function () {
			this.items.push({
				body: this.item.body
			});
			this.items.reverse();
		}
		factory.prototype.removeItem = function (i) {
			this.items.splice(i,1);
		}
		return factory;
	})
	.controller('ClockController',['$scope','$interval',function($scope,$interval){
		tick();
		$interval(tick,1000);
		function tick () {
			var time;
			var date = new Date();
			var hours = date.getHours() % 12;
			var minutes = date.getMinutes();
			var seconds = date.getSeconds();
			var meridiem = hours >= 12 ? 'AM' : 'PM';
			minutes = minutes < 10 ? '0' + minutes : minutes;
			seconds = seconds < 10 ? '0' + seconds : seconds;
			time = hours + ':' + minutes + ':' + seconds + ' ' + meridiem;
			$scope.time = time;
		}
	}])
	.controller('AppController',['$scope','BricksFactory',function AppController($scope,BricksFactory) {
		$scope.bricks = [
			new BricksFactory({name:'Monday Work Items'})
		];
		$scope.addBrick = function () {
			$scope.bricks.push(new BricksFactory({name:$scope.list.name}));
			$scope.bricks.reverse();
		}
	}])
;