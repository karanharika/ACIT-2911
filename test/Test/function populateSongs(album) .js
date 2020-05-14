function populateSongs(album) {
  var songsTable = document.getElementById('songs-table');

  //delete old songs
  while (songsTable.rows.length > 0) {
    songsTable.deleteRow(0);
  }
  function play(element) {
    var songTitle = element.getAttribute('title');
    var albumTitle = element.getAttribute('album');
    var songFile = element.getAttribute('file');
  
    document.getElementById('audio-player').src = songFile;
    document.getElementById('song-album').innerHTML = albumTitle;
    document.getElementById('song-title').innerHTML = songTitle;
  
    console.log(song);
  
  }

  for (var i = 0; albums.length; i++) {

    if (albums[i].title == album) {

      for (var track = 0; albums[i].tracks.length; track++) {
        var row = songsTable.insertRow(track);
        var cell = row.insertCell(0);

        cell.innerHTML = albums[i].tracks[track].title;
        cell.setAttribute("title", albums[i].tracks[track].title);
        cell.setAttribute("album", albums[i].title);
        cell.setAttribute("file", albums[i].tracks[track].mp3);


        cell.addEventListener('click', function() {

          play(this);
        });

      }
    }
  }


}
