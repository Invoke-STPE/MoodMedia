const app = Vue.createApp({
  data() {
    return {
      rain: true,
      login: false,
      // profileName: null,
      // profileEmail: null,
      // profilePicture: null,
      user: null,
      client_id: "8c68d039b2544b31a1064152fbb24c51",
      scopes: [
        "user-read-private",
        "user-read-email",
        "playlist-modify-private",
      ],
      redirect_uri: "http://127.0.0.1:5501/index.html",
      me: null,
      users: Seed.users,
    };
  },
  methods: {
    logout() {
      this.login = false;
    },
    doesUserExists(data) {
      const tempArray = JSON.parse(JSON.stringify(this.users));
      return tempArray.some((u) => u.spotifyId === data.id);
    },
    toggleRegisterModal() {
      let user = JSON.parse(JSON.stringify(this.me));
      console.log(JSON.parse(JSON.stringify(this.me)));
      this.profileName = user.display_name;
      this.profileEmail = user.email;
      this.profilePicture = user.images[0].url;
      $(document).ready(function () {
        $("#staticBackdrop").modal("show");
      });
    },
    spotfiyAuthentication() {
      let popup = window.open(
        `https://accounts.spotify.com/authorize?client_id=${this.client_id}&response_type=token&redirect_uri=${this.redirect_uri}&scope=${this.scopes}&show_dialog=true`,
        "Login with Spotify",
        "width=800,height=600"
      );

      window.spotifyCallback = (payload) => {
        popup.close();
        this.login = true;
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
            console.log(this.me);
            console.log(this.doesUserExists(data));
            if (!this.doesUserExists(data)) {
              this.toggleRegisterModal();
            }
          });
      };
    },
  },

  mounted() {
    this.token = window.location.hash.substr(1).split("&")[0].split("=")[1];

    if (this.token) {
      window.opener.spotifyCallback(this.token);
    }
  },
});
