const app = Vue.createApp({
  data() {
    return {
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
  },
  mounted() {},
});
