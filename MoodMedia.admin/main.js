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
        //   return this.sensorData
        //     .slice(0)
        //     .sort((a, b) => new Date(a) - new Date(b));
        // }
        let tempArray = this.sensorData.sort(
          (a, b) => new Date(a) - new Date(b)
        );
        return tempArray;
      }
    },
  },
  methods: {
    logout() {
      return null;
    },
    formatDate(date) {
      let formattedDate = "";
      formattedDate = new Date(date).toLocaleString();

      for (let index = 0; index < formattedDate.length; index++) {
        formattedDate = formattedDate.replace(".", ":");
      }
      return formattedDate.replace(",", " ");
    },
  },
});
