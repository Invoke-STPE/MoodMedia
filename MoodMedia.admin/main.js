const app = Vue.createApp({
  data() {
    return {
      authenticated: true,
    };
  },
  methods: {
    logout() {
      return null;
    },
    login() {
      this.authenticated = !this.authenticated;
    },
  },
  mounted() {},
});
