describe("Player", function() {
  var player;
  var song;

  beforeEach(function() {
    player = new Player();
    song = new Song();
  });

  it("should be able to play a Song when user clicks play button", function() {
    player.play(song);
    expect(player.currentlyPlayingSong).toEqual(song);

    //demonstrates use of custom matcher
    expect(player).toBePlaying(song);
  });

  describe("when song has been paused", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    it("should indicate that the song is currently paused", function() {
      expect(player.isPlaying).toBeFalsy();

      expect(player).not.toBePlaying(song);
    });

    it("should be possible to resume", function() {
      player.resume();
      expect(player.isPlaying).toBeTruthy();
      expect(player.currentlyPlayingSong).toEqual(song);
    });
  });
  describe("when song is played", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    it("should indicate that the song is currently playing", function() {
      expect(player.isPlaying).toBeFalsy();

      expect(player).not.toBePlaying(song);
    });

    it("should be possible to pause", function() {
      player.resume();
      expect(player.isPlaying).toBeTruthy();
      expect(player.currentlyPlayingSong).toEqual(song);
    });
    it("should be possible to skip", function() {
      player.resume();
      expect(player.isPlaying).toBeTruthy();
      expect(player.currentlyPlayingSong).toEqual(song);
    })
  });

  it("", function() {
    spyOn(song, 'persistFavoriteStatus');

    player.play(song);
    player.makeFavorite();

    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

  describe("#Play", function() {
    it("should pass if song is played when clicked", function() {
      player.resume(song);

      expect(function() {
        player.resume();
      }).toThrowError("song is already playing");
    });
  });

  describe("#resume", function() {
    it("should throw an exception if song is already playing", function() {
      player.resume(song);

      expect(function() {
        player.resume();
      }).toThrowError("song is already playing");
    });
  });
  describe("#pause", function() {
    it("should throw an exception if song is already paused", function() {
      player.resume(song);

      expect(function() {
        player.resume();
      }).toThrowError("song is already playing");
    });
  });
  describe("#Skip", function() {
    it("should throw an exception if song is not skipped", function() {
      player.resume(song);

      expect(function() {
        player.resume();
      }).toThrowError("song is already playing");
    });
  });
  describe("#Stop", function() {
    it("should throw an exception if song is not stopped", function() {
      player.resume(song);

      expect(function() {
        player.resume();
      }).toThrowError("song is already playing");
    });
  });
});
