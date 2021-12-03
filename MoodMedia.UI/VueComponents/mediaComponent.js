app.component("media-component", {
  template: /*html*/ `
  <iframe src="https://open.spotify.com/embed/playlist/7FbdfuFSqJWMTgx0LtlWAl?utm_source=generator" 
          width="100%" 
          height="380" 
          frameBorder="0" 
          allowfullscreen="" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
  </iframe>`,
  data() {
    return {
      currentMood: "",
      user: null,
      playlistId: "",
    };
  },
  methods: {
    async getPlaylistByMood() {
      await fetch("https://localhost:44367/api/User/1")
        .then((response) => response.json())
        .then((data) => (this.user = JSON.parse(JSON.stringify(data))));

      console.log(this.user);
      let userPlaylist = JSON.parse(JSON.stringify(this.user));
      const playlist = this.user.moodPlaylist.Find(
        (element) => (element.mood = "snow")
      );
      this.playlistId = playlist.Id;

      console.log(this.playlistId);
    },
  },
  mounted() {
    this.getPlaylistByMood();
  },
});
