app.controller('NavigationController', ['$scope', '$log', '$anchorScroll', '$location', 
	function($scope, $log, $anchorScroll, $location){

	$scope.goToUpload = function() {
		var first = $location.hash();
	    $location.hash('addClothes');
	    $anchorScroll();
	    $location.hash(first);
	}

}])