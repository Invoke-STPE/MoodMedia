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
            <div v-for="mood in moods">
              <select name="playlist" id="{{mood}}" placeholder="">
                <option disabled selected>Select a playlist for {{mood}}</option>
                <option v-for="playlist in playlists" value="playlist">{{playlist.name}}</option>
              </select>
            </div>
            <button class="btn btn-primary" type="button" @click="savePlaylistOptions()">Save</button>
          </div>
        </div>
      </div>
    </div>
    `,
  data() {
    return {
      playlists: [],
      moods: [
        "snow",
        "rain",
        "freezing",
        "cold",
        "nice",
        "sunny"
      ], 
      moodPlaylists: { "snow": [],"rain": [], "freezing": [], "cold": [], "nice": [], "sunny": [] }
    }
  },
  methods: {
    findPlaylists() {
      const basePlaylistUrl = "https://api.spotify.com/v1/me/playlists";
      axios
        .get(basePlaylistUrl, {
          headers: {
            Authorization: "Bearer " + this.$parent.access_token,
          }
        })
        .then((reponse) => {this.playlists = reponse.data.items
        console.log(this.playlists)})
    },
    savePlaylistOptions(){
    console.log(this.moodPlaylists)
    this.$emit('moodPlaylist', moodPlaylists)
    },
  },
  mounted(){
    this.findPlaylists()
  }
});
