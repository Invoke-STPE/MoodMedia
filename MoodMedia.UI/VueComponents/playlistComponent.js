// JavaScript source code
const basePlaylistUrl= 'https://api.spotify.com/v1/me/playlists'

app.component("playlist-component", {
    template: /*html*/ `
    <div class="text-light modal fade">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header bg-dark">
            <h5 class="modal-title text-light" id="informationModal">
            </h5>
          </div>
        </div>
      </div>
    </div>
    `
    ,
  data() {
    return {
      errors: [],
      id: [],
      name: [],
    };
  },
    methods: {
    getPlaylists: function (e) {
      let Playlists = {
        id: this.id,
        name: this.name,
      };

      console.log(JSON.stringify(Playlists));
      if (
        this.id &&
        this.name
      ) {
        const response = fetch("basePlaylistUrl", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(Playlists),
        }).then($("#registationModel").modal("hide"));
      }

      this.errors = []; // Make suren no boo boo from last time

      console.log("End of method");
      e.preventDefault();
    },
  },
});
