app.controller('ClothesController', ['$scope', 'ClothesService', 'user',
  	function($scope, ClothesService, user){

      var currentUser = user.current;

  		ClothesService.getClothes().success(function(data){
	      $scope.clothes = data
	    })

        $scope.addClothes = function(){
          $scope.clothes.push({
            user: currentUser.email,
            title: $scope.clothes.title,
            img: $scope.clothes.img ,
            type: $scope.clothes.type,
          })
          // $scope.clothes = {}
        }   
	     
        $scope.deleteClothes = function(item) {
        var deleteClothes = confirm("Delete clothes?")

         if(deleteClothes) {
         $scope.clothes.splice($scope.clothes.indexOf(item), 1)
      }
    }

        $scope.editClothes = function(item) {
          item.state = "edit";
          item.oldTitle = item.title;
          item.oldType = item.type;
          itemp.oldImg = item.img;
    }

  }
])

app.controller('ClothesDetailController', ['$scope', '$routeParams', '$location', 'ClothesService', 'user',
    function($scope, $routeParams, $location, ClothesService, user){

      var currentUser = user.current

      ClothesService.getClothes().success(function(data){
        data.forEach(function(data) {
          if($routeParams.id == data.id) {
            $scope.item = data
          }
        })
      })
      .error(function(err) {
        $location.path('./')
      })
      
      $scope.deleteComment = function(comment) {
        var deleteComment = confirm("Delete comments?")

         if(deleteComment) {
          $scope.item.comments.splice($scope.item.comments.indexOf(comment, 1))
        }
      }
     
     $scope.addComment = function() {
       $scope.item.comments.push({
          useremail: currentUser.email,
          comment: $scope.comment.comment
        })
     }
  }
])

app.controller('ClothesClothesController', ['$scope', '$routeParams', '$location', 'ClothesService', 'user',
  function($scope, $routeParams, $location, ClothesService, user){

    ClothesService.getClothes().success(function(data){
        $scope.clothes = data
      })
  }
])

app.factory('ClothesService', ['$http' , function($http){
  var api = {
    getClothes: function() {
      return $http.get('data/data.json')
    }
  }
  return api
}])