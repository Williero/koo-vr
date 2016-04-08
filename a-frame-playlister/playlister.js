$(document).ready(function() {
    var url = "https://api.spotify.com/v1/tracks/?ids=0eGsygTp906u18L0Oimnem,1lDWb6b6ieDQ2xT7ewTC3G,3hB5DgAiMAQ4DzYbsMq1IT,3pzjHKrQSvXGHQ98dx18HI,2iuZJX9X9P0GKaE93xcPjk,7oK9VyNzrYvRFo7nQEYkWN" ;
    $.get(url, function(data) {
        var tracks = data.tracks ;
        for (var i in tracks ) {
            var track = tracks[i],
                thumbnail = track.album.images[0].url ;
            var album = '<a-entity class="album" geometry="primitive: box; width: .8; height: .8; depth: .1" material="src: url(' + thumbnail + ')" position="0 ' + i + ' -5"></a-entity>'
            $(album).insertAfter("#shelf")
        }
    }).success(function() {
        // Set up working selectors to place event listeners
        $(".album").on('mouseenter', function () {
            console.log("mouseleave album")
            this.setAttribute('geometry', 'width', '2');
            this.setAttribute('geometry', 'height', '2');
        });
      
        $(".album").on('mouseleave', function () {
            console.log("mouseenter album")
            this.setAttribute('geometry', 'width', '.8');
            this.setAttribute('geometry', 'height', '.8');
        });  
      console.log("Set listeners")
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
    

