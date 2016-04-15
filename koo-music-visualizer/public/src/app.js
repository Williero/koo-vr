// Array in module defines dependecies (e.g. angular-routes)"
angular.module("KooMusicApp", ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                controller: 'MusicController',
                templateUrl: 'views/music-scene.html'
            });
            // .when('/contact/new', {
            //     controller: 'NewController',
            //     templateUrl: 'views/new.html'
            // });
        $locationProvider.html5Mode(true)
    });