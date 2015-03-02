var app = angular.module('clothesApp', ['ngRoute','UserApp'])

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'ClothesController',
      public: true,
      templateUrl: 'partials/clothes/index.html'
    })
    .when('/clothes/:id', {
      controller: 'ClothesDetailController',
      public: true,
      templateUrl: 'partials/clothes/single.html'
    })
    .when('/clothes/', {
      controller: 'ClothesClothesController',
      public: true,
      templateUrl: 'partials/clothes/clothes.html'
    })
    .when('/hats/', {
      controller: 'ClothesClothesController',
      public: true,
      templateUrl: 'partials/clothes/hat.html'
    })
    .when('/login',{
    	templateUrl: 'partials/users/login.html', 
    	login: true,
      controller:'UsersController'
    })
    .when('/signup',{
    	templateUrl: 'partials/users/signup.html', 
    	public: true,
      controller:'UsersController'
    })				
    .otherwise({
      redirectTo: '/'
    })
}])

app.run(function(user){
   user.init({ appId: '54f1c0ea93e94' });
})