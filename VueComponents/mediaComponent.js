app.component("media-component", {
  template: `
      <h2 class="text-white p-1">Song</h2>
      <p class="lead text-white pb-3">Artist</p>
      <div class="audio-player">
        <div class="timeline">
          <div class="progress"></div>
        </div>
        <div class="controls">
          <div class="play-container">
            <div class="toggle-play play"></div>
          </div>
          <div class="time">
            <div class="current">0:00</div>
            <div class="divider">/</div>
            <div class="length"></div>
          </div>
          <div class="name">Music Song</div>
          <!--     credit for icon to https://saeedalipoor.github.io/icono/ -->
          <div class="volume-container">
            <div class="volume-button">
              <div class="volume icono-volumeMedium"></div>
            </div>
    
            <div class="volume-slider">
              <div class="volume-percentage"></div>
            </div>
          </div>
        </div>
      </div>
            `,
});
