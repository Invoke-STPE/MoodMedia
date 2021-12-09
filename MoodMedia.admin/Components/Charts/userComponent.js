app.component("user-component", {
  template: /* HTML */ `<div class="modal" id="userActivityModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header bg-dark">
          <h5 class="modal-title text-light" id="activityModal">
            Current Users
          </h5>
        </div>
        <div class="modal-body bg-light">
          <div
            class="container-fluid d-flex justify-content-center align-items-center"
          >
            <div velse="" class="d-flex w-100">
              <div class="container mt-3 mb-4 d-flex justify-content-center">
                <div class="col-lg-9 mt-4 mt-lg-0">
                  <div class="row">
                    <div class="col-12">
                      <div
                        class="user-dashboard-info-box table-responsive mb-0 bg-white p-4 shadow-sm"
                      >
                        <table class="table manage-candidates-top mb-0">
                          <thead>
                            <tr>
                              <th>Display Name</th>
                              <th class="text-center"></th>
                              <th class="action text-right">Activity</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="candidates-list" v-for="user in users">
                              <td class="title">
                                <div class="thumb">
                                  <img
                                    class="img-fluid"
                                    src="images/profile_pic.svg"
                                    alt="avatar7"
                                  />
                                </div>
                                <div class="candidate-list-details">
                                  <div class="candidate-list-info">
                                    <div class="candidate-list-title">
                                      <h5 class="mb-0"></h5>
                                      <p>{{user.name}}</p>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td
                                class="candidate-list-favourite-time text-center"
                              ></td>
                              <td>
                                <button
                                  class="btn"
                                  @click="toggleUserActivity(user.spotifyId)"
                                >
                                  <img
                                    src="./images/icons/graph-up-arrow.svg"
                                    width="25"
                                    alt="graph-up-arrow"
                                  />
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> `,
  props: ["userId"],
  data() {
    return {
      users: [],
      userActivity: true,
    };
  },
  methods: {},
  mounted() {
    fetch("https://localhost:44367/api/User")
      .then((response) => response.json())
      .then((data) => {
        this.users = data;
        console.log(this.users);
      })
      .catch((error) => console.log(error));
  },
});

app.component("usercharts-component", {
  template: /* html */ `
  <div class="row">
  <div class="col-4">
    <canvas id="listenedSongs"></canvas>
  </div>
  <div class="col-4">
    <canvas id="playlistChanged"></canvas>
  </div>
  <div class="col-4">
    <canvas id="siteVisits"></canvas>
  </div>
</div>`,
  methods: {
    createListenedSongsPie() {
      const data = {
        datasets: [
          {
            label: "My First Dataset",
            data: [300, 50, 100],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      };
      const config = {
        type: "pie",
        data: data,
        options: {
          plugins: {
            title: {
              display: true,
              text: "Listened Songs",
            },
          },
        },
      };
      const myChartSongs = new Chart(
        document.getElementById("listenedSongs"),
        config
      );
    },
    createPlaylistChangedPie() {
      const data = {
        datasets: [
          {
            label: "This is a new name",
            data: [300, 50, 100],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      };
      const config = {
        type: "pie",
        data: data,
        options: {
          plugins: {
            title: {
              display: true,
              text: "Playlist Change",
            },
          },
        },
      };
      const myPlaylist = new Chart(
        document.getElementById("playlistChanged"),
        config
      );
    },
    createSiteVisitsPie() {
      const data = {
        datasets: [
          {
            label: "My First Dataset",
            data: [300, 50, 100],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      };
      const config = {
        type: "pie",
        data: data,
        options: {
          plugins: {
            title: {
              display: true,
              text: "Visited site",
            },
          },
        },
      };
      const myChartSiteVisits = new Chart(
        document.getElementById("siteVisits"),
        config
      );
    },
  },
  mounted() {
    this.createListenedSongsPie();
    this.createPlaylistChangedPie();
    this.createSiteVisitsPie();
  },
});
