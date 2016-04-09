$(document).ready(function() {
    var url = "https://api.spotify.com/v1/tracks/?ids=0eGsygTp906u18L0Oimnem,1lDWb6b6ieDQ2xT7ewTC3G,3hB5DgAiMAQ4DzYbsMq1IT,3pzjHKrQSvXGHQ98dx18HI,2iuZJX9X9P0GKaE93xcPjk,7oK9VyNzrYvRFo7nQEYkWN" ;
    $.get(url, function(data) {
        var tracks = data.tracks ;
        for (var i in tracks ) {
            var track = tracks[i],
                thumbnail = track.album.images[0].url ;
            var album = '<a-entity class="album" geometry="primitive: box; width: .8; height: .8; depth: .1" material="src: url(' + thumbnail + ')" position="0 ' + i + ' -5" sound="src: ' + track.preview_url + '"></a-entity>'
            $(album).insertAfter("#shelf")
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

    document.querySelector('#hexagon').addEventListener('mouseenter', function () {
        this.setAttribute('material', 'color', 'blue');
        console.log("mouseenter " + this)
    });

    document.querySelector('#hexagon').addEventListener('mouseleave', function () {
        this.setAttribute('material', 'color', 'green');
        console.log("mouseenter " + this)
    });

})
