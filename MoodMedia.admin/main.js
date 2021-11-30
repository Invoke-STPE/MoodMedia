const app = Vue.createApp({
  data() {
    return {
      sensorData: Seed.sensorData,
      login: true,
      dateTimeSort: true,
      pressureSort: false,
      dateStart: null,
      dateEnd: null,
    };
  },
  computed: {
    sortedDateTimes() {
      let filterValueDate;
      if (this.dateStart && this.dateEnd) {
        filterValueDate = this.sensorData.slice(0).sort((a) => {
          a >= this.dateStart && a <= this.dateEnd;
        });
        console.log("Not hit");
      }
      if (this.dateTimeSort) {
        return this.sensorData.slice(0).sort((a, b) => {
          return new Date(a.time) - new Date(b.time);
        });
      } else {
        return this.sensorData;
      }
    },
    // sortedPressure() {
    //   if (this.pressureSort) {
    //     return this.sensorData.slice(0).sort((a, b) => {
    //       return new Date(a.pressure) - new Date(b.pressure);
    //     });
    //   } else {
    //     return this.sensorData;
    //   }
    // },
  },
  methods: {
    logout() {
      return null;
    },
    formatDate(date) {
      let formattedDate = "";
      formattedDate = new Date(date).toLocaleString("da-DK");
      let tempArray = formattedDate.split(" ");

      tempArray[0] = tempArray[0].replaceAll(".", "/");
      tempArray[1] = tempArray[1].replaceAll(".", ":");
      formattedDate = tempArray.join(" ");
      return formattedDate;
    },
    // togglePressureSort() {
    //   this.dateTimeSort = false;
    //   this.pressureSort = !this.pressureSort;
    //   console.log(this.pressureSort);
    // },
    // toggleTimeSort() {
    //   this.togglePressureSort = false;
    //   this.dateTimeSort = !this.dateTimeSort;
    //   console.log(this.dateTimeSort);
    // },
  },
});
