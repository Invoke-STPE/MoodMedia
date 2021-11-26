const baseUrl = "https://localhost:44367/api/Sensor/";

const app = Vue.createApp({
  data() {
    return {
      users: Seed.users,
      rain: true,
      login: false,
      client_id: "8c68d039b2544b31a1064152fbb24c51",
      scopes: [
        "user-read-private",
        "user-read-email",
        "playlist-modify-private",
      ],
      redirect_uri: "http://127.0.0.1:5501/index.html",
      me: null,
    };
  },
  methods: {
    logout() {
      this.login = false;
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

        fetch("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: `Bearer ${payload}`,
          },
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            this.me = JSON.parse(JSON.stringify(data));
            if (!this.doesUserExist(data)) {
              this.toggleRegistrationModal();
            }
          });
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
  },

  mounted() {
    this.token = window.location.hash.substr(1).split("&")[0].split("=")[1];

    if (this.token) {
      window.opener.spotifyCallback(this.token);
    }
  },
});
