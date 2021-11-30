// JavaScript source code
const basePlaylistUrl= 'https://api.spotify.com/v1/me/playlists'

app.component("playlist-component", {
    template: /*html*/ `
    <div class="text-light modal fade modal-dialog-centered" id="playlistSettingsModel">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header bg-dark">
            <h5 class="modal-title text-light" id="playlistModal">
              Playlist Settings
            </h5>
          </div>
          <div class="modal-body bg-dark">
          Alle playliste indstillinger
            <div>
              <select placeholder="happyPlaylist" name="playlist" id="playlist">
                <option value="" disabled selected>Select a happy playlist </option>
                <option value="playlist">Banger</option>
              </select>
            </div>
            <div>
              <select placeholder="okPlaylist" name="playlist" id="playlist">
                <option value="" disabled selected>Select a ok playlist </option>
                <option value="playlist">wackass</option>
              </select>
            </div>
            <div>
              <select placeholder="sadPlaylist" name="playlist" id="playlist">
                <option value="" disabled selected>Select a sad playlist </option>
                <option value="playlist">sad af</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    ` 
});
