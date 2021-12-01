const baseUrl = "https://localhost:44367/api/Sensor/";

const app = Vue.createApp({
  data() {
    return {
      users: Seed.users,
      rain: true,
      login: false,
      playlistSettings: false,
      user: null,
      token: null,
      payload: null,
      client_id: "8c68d039b2544b31a1064152fbb24c51",
      scopes: [
        "user-read-private",
        "user-read-email",
        "playlist-modify-private",
        "playlist-read-private",
        "user-read-playback-state",
        "user-modify-playback-state",
        "user-follow-modify",
        "user-follow-read",
        "user-library-modify",
        "user-library-read",
        "streaming",
        "user-read-playback-position",
        "playlist-modify-private",
        "playlist-read-collaborative",
        "user-top-read",
        "playlist-modify-public",
        "user-read-currently-playing",
        "user-read-recently-played",
      ],
      redirect_uri: "http://127.0.0.1:5501/MoodMedia.UI/index.html",
      me: null,
    };
  },
  methods: {
    logout() {
      this.login = false;
      this.token = null;
      console.log(this.token);
    },
    getPlaylistSettings() {
      this.playlistSettings = true;
      this.togglePlaylistSettingsModal();
    },
    spotifyAuthentication() {
      let popup = window.open(
        `https://accounts.spotify.com/authorize?client_id=${this.client_id}&response_type=token&redirect_uri=${this.redirect_uri}&scope=${this.scopes}&show_dialog=true`,
        "Login with Spotify",
        "width=800,height=600"
      );

      window.spotifyCallback = (payload) => {
        this.login = true;
        popup.close();
        this.payload = payload;
        console.log(`Payload: ${payload}`);

        fetch("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: `Bearer ${payload}`,
          },
        })
          .then((response) => {
            console.log(response);
            return response.json();
          })
          .then((data) => {
            console.log(data);
            this.me = JSON.parse(JSON.stringify(data));

            console.log(this.me);

            // user = {};
            if (!this.doesUserExist(data)) {
              this.toggleRegistrationModal();
            }
          });
        console.log(payload);
      };
    },
    doesUserExist(data) {
      const tempUsers = JSON.parse(JSON.stringify(this.users));
      return tempUsers.some((u) => u.spotifyId === data.id);
    },
    toggleRegistrationModal() {
      $(document).ready(function () {
        $("#registationModel").modal("show");
      });
    },
    togglePlaylistSettingsModal() {
      $(document).ready(function () {
        $("#playlistSettingsModel").modal("show");
      });
    },
  },
  // watch: {
  //   login: function () {
  //     this.login = false;
  //   },
  // },

  mounted() {
    this.token = window.location.hash.substr(1).split("&")[0].split("=")[1];

    if (this.token) {
      window.opener.spotifyCallback(this.token);
    }
  },
});
