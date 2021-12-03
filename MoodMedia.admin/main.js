const app = Vue.createApp({
  data() {
    return {
      authenticated: false,
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
