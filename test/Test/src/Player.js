


function Player() {
}
Player.prototype.play = function(song) {
  this.currentlyPlayingSong = song;
  this.isPlaying = true;
};

Player.prototype.pause = function() {
  this.isPlaying = false;
};

Player.prototype.resume = function() {
  if (this.isPlaying) {
    throw new Error("song is already playing");
  }

  this.isPlaying = true;
};


Player.prototype.skip = function() {
  if (this.isSkipped) {
    throw new Error("song is not skipped");
  }

  this.isSkipped = true;
};

Player.prototype.stop = function() {
  if (this.isStopped) {
    throw new Error("song is not skipped");
  }

  this.isStopped = true;
};

