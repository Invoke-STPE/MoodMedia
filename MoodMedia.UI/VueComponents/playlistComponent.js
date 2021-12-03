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
                <select name="playlist" v-model="snow['id']">
                  <option disabled selected>Select a playlist for snowy mood</option>
                  <option v-for="playlist in playlists" v-bind:value="playlist.id">{{playlist.name}}</option>
                </select>
              </div>
              <div>
                <select name="playlist" v-model="rain['id']">
                  <option disabled selected>Select a playlist for rainy mood</option>
                  <option v-for="playlist in playlists" v-bind:value="playlist.id">{{playlist.name}}</option>
                </select>
              </div>
              <div>
                <select name="playlist" v-model="freezing['id']">
                  <option disabled selected>Select a playlist for freezing mood</option>
                  <option v-for="playlist in playlists" v-bind:value="playlist.id">{{playlist.name}}</option>
                </select>
              </div>
              <div>
                <select name="playlist" v-model="cold['id']">
                  <option disabled selected>Select a playlist for cold mood</option>
                  <option v-for="playlist in playlists" v-bind:value="playlist.id">{{playlist.name}}</option>
                </select>
              </div>
              <div>
                <select name="playlist" v-model="nice['id']">
                  <option disabled selected>Select a playlist for nice mood}</option>
                  <option v-for="playlist in playlists" v-bind:value="playlist.id">{{playlist.name}}</option>
                </select>
              </div>
              <div>
                <select name="playlist" v-model="sunny['id']">
                  <option disabled selected>Select a playlist for sunny mood</option>
                  <option v-for="playlist in playlists" v-bind:value="playlist.id">{{playlist.name}}</option>
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
      snow: {
        mood: "snow",
        id: "",
      },
      rain: { mood: "rain", id: "" },
      freezing: { mood: "freezing", id: "" },
      cold: { mood: "cold", id: "" },
      nice: { mood: "nice", id: "" },
      sunny: { mood: "sunny", id: "" },
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
        .then((reponse) => {
          this.playlists = reponse.data.items;
        });
    },
    savePlaylistOptions() {
      const moodPlaylists = [
        this.snow,
        this.rain,
        this.freezing,
        this.cold,
        this.nice,
        this.sunny,
      ];
      this.$emit("setMoodPlaylists", moodPlaylists);
    },
  },
  emits: ["setMoodPlaylists"],
  mounted() {
    this.findPlaylists();
  },
});
