angular.module('KooMusicApp')
    .filter('albumMaker', ['builder', function (builder) {
        return function (song) {
            return builder.album(song);
        };
    }]);