const app = Vue.createApp({
  data() {
    return {
      authenticated: true,
      userId: "steven.basker",
    };
  },
  methods: {
    logout() {
      return (this.authenticated = false);
    },
    login() {
      this.authenticated = !this.authenticated;
    },
    showUserActivity() {
      $(document).ready(function () {
        $("#userActivityModal").modal("show");
      });
    },
  },
});
