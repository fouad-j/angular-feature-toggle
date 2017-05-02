angular.module('app', [])
	.service('toggleService', function() {
		const TOGGLE_LIST = ['TOGGLE_NAME_1', 'TOGGLE_NAME_2', 'TOGGLE_NAME_3'];
		this.isEnable = toggleName => TOGGLE_LIST.includes(toggleName);
	})
	.directive('featureToggle', function(toggleService) {
	  return {
	    restrict: 'A',
	    template: '<span ng-transclude></span>',
	    transclude: true,
	    link: function(scope, element, attrs) {
	      if(toggleService.isEnable(attrs.featureToggle)) element.remove()
	    }
	  };
	});