class Helper {
  playPauseAndUpdate(song) {
    const totalTime = player.getDuration();
    $('#time-control .total-time').text(player.currentlyPlaying.duration);
    player.playPause(song);
  }
}

var helper = new Helper();
