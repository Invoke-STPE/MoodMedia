// JavaScript source code
const basePlaylistUrl = "https://api.spotify.com/v1/me/playlists";

app.component("playlist-component", {
  prop: ["token"],
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
      const settings = {
        headers: {
          Authorization: `Bearer ${this.token}`,
          "Content-Type": "application/json",
        },
      };
      const response = fetch(basePlaylistUrl, {
        method: "GET",
        settings,
      }).then($("#playlistSettingsModel").modal("hide"));
    },
  },
  mounted() {
    this.findPlaylists();
    console.log(this.token);
  },
});
