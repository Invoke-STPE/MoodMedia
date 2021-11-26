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

const registerComponent = {
  template: /*html*/ `
  <div
  class="modal fade"
  id="staticBackdrop"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
>
  <div class="modal-dialog ">
    <form class="row g-3"></form>
    <div class="modal-content bg-dark">
      <div class="modal-header">
        <h5 class="modal-title text-light" id="staticBackdropLabel">
          First time registration
        </h5>
        <button
          type="button"
          class="btn-close btn-close-white"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        <form class="row g-3">
          <div class="col-12">
            <img
            
        src="./images/profile_pic.svg"
        class="img-fluid w-50 mx-auto d-block"
        alt=""
        srcset=""
      />
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <button id="spotifyButton" class="btn btn-small">Change Picture</button>
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label text-light">Name</label>
            <input  type="text" class="form-control"  placeholder="John Doe..." />
          </div>
          <div class="col-md-6">
            <label for="email" class="form-label text-light">Email</label>
            <input v-bind:value="profileEmail" type="email" class="form-control"  placeholder="JD@gmail.com" />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label text-light">Address</label>
            <input
              type="text"
              class="form-control"
              
              placeholder="1234 Main St"
            />
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Logout
        </button>
        <button type="button" class="btn btn-success">Create</button>
      </div>
    </div>
  </div>
</div>
          `,
  // data() {
  //   return {
  //     profilePicture: "",
  //     profileName: "",
  //     profileEmail: "",
  //     profileAddress: "",
  //   };
  // },
  props: ["profilePicture", "profileName", "profileEmail", "profileAddress"],
  // props: ["user"],
  methods: {},
  mounted() {
    console.log(this.profileEmail);
    console.log(this.profilePicture);
    console.log(this.profileName);
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
  props: {
    profileName: String,
    profileEmail: String,
    profilePicture: String,
  },
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
  components: {
    "rain-component": rainComponent,
    "media-component": mediaComponent,
    "sun-component": sunComponent,
    "register-component": registerComponent,
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
      // alert(this.token);
      window.opener.spotifyCallback(this.token);
    }
  },
};

// weather.mount("#weather");
Vue.createApp(app).mount("#app");
