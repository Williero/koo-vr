$(document).ready(function() {
    var url = "https://api.spotify.com/v1/tracks/?ids=0eGsygTp906u18L0Oimnem,1lDWb6b6ieDQ2xT7ewTC3G,3xEqegrcyQtfhWeEMnDyCG,3hB5DgAiMAQ4DzYbsMq1IT,3xEqegrcyQtfhWeEMnDyCG,3pzjHKrQSvXGHQ98dx18HI,2iuZJX9X9P0GKaE93xcPjk,7oK9VyNzrYvRFo7nQEYkWN,3pVbA69fLbVMwEv7ESCTm5" ;
    $.get(url, function(data) {
        var tracks = data.tracks ;
        for (var i in tracks ) {
            var track = tracks[i],
                thumbnail = track.album.images[0].url,
                positionX = (0 + 3 * Math.cos(2 * i * Math.PI / tracks.length )),
                positionZ = (0 + 3 * Math.sin(2 * i * Math.PI / tracks.length ));
            var album = '<a-entity class="album" look-at="#camera" geometry="primitive: box; width: .8; height: .8; depth: .1" position="' + positionX + ' 1.25 ' + positionZ + '" material="src: url(' + thumbnail + ')" sound="src: ' + track.preview_url + '"></a-entity>'
            $("#shelf").append(album)
        }
    }).success(function() {

      var albums = document.querySelectorAll(".album")

      for (var i in albums) {

        albums[i].addEventListener('mouseenter', function () {
            this.components.sound.play();
            this.setAttribute('geometry', 'width', '1');
            this.setAttribute('geometry', 'height', '1');
        });

        albums[i].addEventListener('mouseleave', function () {
            this.components.sound.pause();
            this.setAttribute('geometry', 'width', '.8');
            this.setAttribute('geometry', 'height', '.8');
        });

      }

    });

})
