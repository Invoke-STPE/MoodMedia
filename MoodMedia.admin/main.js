const app = Vue.createApp({
  data() {
    return {
      sensorData: Seed.sensorData,
      login: true,
      dateTimeSort: true,
    };
  },
  computed: {
    sortedDateTimes() {
      if (this.dateTimeSort) {
        return this.sensorData.sort((a, b) => {
          return new Date(a.time) - new Date(b.time);
        });
      }
    },
  },
  methods: {
    logout() {
      return null;
    },
    formatDate(date) {
      let formattedDate = "";
      formattedDate = new Date(date).toLocaleString("dk-DK");

      for (let index = 0; index < formattedDate.length; index++) {
        formattedDate = formattedDate.replace(".", ":");
      }
      return formattedDate.replace(",", " ");
    },
  },
});
