// Array in module defines dependecies (e.g. angular-routes)"
angular.module("KooMusicApp", ['ngRoute', 'ngResource'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                controller: 'MenuController',
                templateUrl: 'views/menu.html'
            })
            .when('/:emotion', {
                controller: 'MusicController',
                templateUrl: 'views/music-scene.html'
            });
        $locationProvider.html5Mode(true)
    });