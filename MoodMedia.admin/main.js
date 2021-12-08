const app = Vue.createApp({
  data() {
    return {
      adminSettings: false,
      authenticated: true,
    };
  },
  methods: {
    logout() {
      return (this.authenticated = false);
    },
    login() {
      this.authenticated = !this.authenticated;
    },
    getAdminSettings() {
      this.adminSettings = true;
      this.toggleAdminSettingsModal();
    },
    toggleAdminSettingsModal() {
      $(document).ready(function () {
        $("#adminSettingsModel").modal("show");
      });
    },
  },
  mounted() {},
});
