const app = Vue.createApp({
  data() {
    return {
      authenticated: false,
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
});
