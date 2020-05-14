


function Player() {
}
Player.play = function(song) {
  this.currentlyPlayingSong = song;
  this.isPlaying = true;
};

Player.pause = function() {
  this.isPlaying = false;
};

Player.resume = function() {
  if (this.isPlaying) {
    throw new Error("song is already playing");
  }

  this.isPlaying = true;
};


Player.skip = function() {
  if (this.isSkipped) {
    throw new Error("song is not skipped");
  }

  this.isSkipped = true;
};

Player.stop = function() {
  if (this.isStopped) {
    throw new Error("song is not skipped");
  }

  this.isStopped = true;
};


Player.prototype.makeFavorite = function() {
  this.currentlyPlayingSong.persistFavoriteStatus(true);
};