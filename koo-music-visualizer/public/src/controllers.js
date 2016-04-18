angular.module('KooMusicApp')
    .controller('MusicController', function ($scope, builder, $location) {
        $scope.home = function () {
            $location.url('/');
        }
        $scope.visit = function (event) {
            var button = event.currentTarget;
            $location.url('/happy');
        }
        var url = "https://api.spotify.com/v1/tracks/?ids=0eGsygTp906u18L0Oimnem,1lDWb6b6ieDQ2xT7ewTC3G,3xEqegrcyQtfhWeEMnDyCG,3hB5DgAiMAQ4DzYbsMq1IT,3xEqegrcyQtfhWeEMnDyCG,3pzjHKrQSvXGHQ98dx18HI,2iuZJX9X9P0GKaE93xcPjk,7oK9VyNzrYvRFo7nQEYkWN,3pVbA69fLbVMwEv7ESCTm5" ;
        $.get(url, function(data) {
            $scope.tracks = builder.spotifyAdapter(data.tracks);
        })
    });
