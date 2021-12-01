// JavaScript source code

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
              <select name="playlist" id="playlist">
                <option value="" disabled selected>Select a happy playlist </option>
                <option value="playlist">Banger</option>
              </select>
            </div>
            <div>
              <select name="playlist" id="playlist">
                <option value="" disabled selected>Select a ok playlist </option>
                <option value="playlist">wackass</option>
              </select>
            </div>
            <div>
              <select name="playlist" id="playlist">
                <option value="" disabled selected>Select a sad playlist </option>
                <option value="playlist">sad af</option>
              </select>
            </div>
            <button class="btn btn-primary" type="button" @click="findPlaylists()">Test</button>
          </div>
        </div>
      </div>
    </div>
    `,
  data() {
    return {
      playlists: [],
      playlistId: "",
      playlistName: "",
    };
  },
  methods: {
    findPlaylists() {
      const basePlaylistUrl = "https://api.spotify.com/v1/me/playlists";
      axios
        .get(basePlaylistUrl, {
          headers: {
            Authorization: "Bearer " + this.$parent.access_token,
          },
        })
        .then((reponse) => console.log(reponse));
    },
  },
});
