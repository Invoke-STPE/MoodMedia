// JavaScript source code
// Rain Component
const rainComponent = {
  template: `
          <div class="back-row-toggle splat-toggle">
              <div class="rain front-row w-100"></div>
              <div class="rain back-row"></div>
          </div>
          `,
  methods: {
    makeItRain() {
      $(".rain").empty();

      var increment = 0;
      var drops = "";
      var backDrops = "";

      while (increment < 100) {
        //couple random numbers to use for various randomizations
        //random number between 98 and 1
        var randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
        //random number between 5 and 2
        var randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
        //increment
        increment += randoFiver;
        //add in a new raindrop with various randomizations to certain CSS properties
        drops +=
          '<div class="drop" style="left: ' +
          increment +
          "%; bottom: " +
          (randoFiver + randoFiver - 1 + 100) +
          "%; animation-delay: 0." +
          randoHundo +
          "s; animation-duration: 0.5" +
          randoHundo +
          's;"><div class="stem" style="animation-delay: 0.' +
          randoHundo +
          "s; animation-duration: 0.5" +
          randoHundo +
          's;"></div><div class="splat" style="animation-delay: 0.' +
          randoHundo +
          "s; animation-duration: 0.5" +
          randoHundo +
          's;"></div></div>';
        backDrops +=
          '<div class="drop" style="right: ' +
          increment +
          "%; bottom: " +
          (randoFiver + randoFiver - 1 + 100) +
          "%; animation-delay: 0." +
          randoHundo +
          "s; animation-duration: 0.5" +
          randoHundo +
          's;"><div class="stem" style="animation-delay: 0.' +
          randoHundo +
          "s; animation-duration: 0.5" +
          randoHundo +
          's;"></div><div class="splat" style="animation-delay: 0.' +
          randoHundo +
          "s; animation-duration: 0.5" +
          randoHundo +
          's;"></div></div>';
      }

      $(".rain.front-row").append(drops);
      $(".rain.back-row").append(backDrops);
    },
  },
  mounted() {
    this.makeItRain();
  },
};

// Media Component
const mediaComponent = {
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
};

// Sun Component
const sunComponent = {
  template: `
  <div id="background-wrap">
   

    <div class="x2">
        <div class="cloud"></div>
    </div>

    <div class="x3">
        <div class="cloud"></div>
    </div>

    <div class="x4">
        <div class="cloud"></div>
    </div>
</div>
    <div class="sun">
    <div class="ray_box">
        <div class="ray ray1"></div>
        <div class="ray ray2"></div>
        <div class="ray ray3"></div>
        <div class="ray ray4"></div>
        <div class="ray ray5"></div>
        <div class="ray ray6"></div>
        <div class="ray ray7"></div>
        <div class="ray ray8"></div>
        <div class="ray ray9"></div>
        <div class="ray ray10"></div>
    </div>
  </div>
              `,
};

const app = {
  data() {
    return {
      rain: false,
      login: true,
      client_id: "8c68d039b2544b31a1064152fbb24c51",
      scopes: ["user-read-private", "user-read-email", "playlist-modify-private"],
      redirect_uri: "http://127.0.0.1:5501/index.html",
      me: null,
    };
  },
  components: {
    "rain-component": rainComponent,
    "media-component": mediaComponent,
    "sun-component": sunComponent,
  },
  methods: {
    logout() {
      this.login = false;
    },
    spotfiyAuthentication() {
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
            this.me = data;
          });
      };
    },
  },

  mounted() {
    this.token = window.location.hash.substr(1).split("&")[0].split("=")[1];

    if (this.token) {
      //alert(this.token)

      window.opener.spotifyCallback(this.token);
    }
  },
};

// weather.mount("#weather");
Vue.createApp(app).mount("#app");
