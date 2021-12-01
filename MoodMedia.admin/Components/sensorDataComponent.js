app.component("sensordata-component", {
  template: /* html */ `<section>
    <h1 class="h3 text-center pt-5">MoodMedia Admin Panel</h1>
    <div class="input-group mt-5 mb-3 justify-content-around">
      <div class="">
        <label class="me-3" for="datetime-local-start">Start Date</label>
        <input
          v-model="dateStart"
          type="datetime-local"
          id="datetime-local-start"
        />
      </div>
      <div class="">
        <label class="ms-3" for="datetime-local-end">End Date</label>
        <input
          v-model="dateEnd"
          type="datetime-local"
          id="datetime-local-end"
        />
      </div>
    </div>
    <h1 class="h6">Weather data</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Sensor</th>
          <th scope="col">Tempature</th>
          <th scope="col">Humidity</th>
          <th scope="col">Pressure</th>
          <th scope="col">Time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in sortedDateTimes" :key="data.id">
          <td>{{ data.sensorName }}</td>
          <td>{{ data.temperature }} &#176;</td>
          <td>{{ data.humidity }}</td>
          <td>{{ data.pressure }}</td>
          <td>{{ formatDate(data.time) }}</td>
        </tr>
      </tbody>
    </table>
  </section>`,
  data() {
    return {
      dateStart: null,
      dateEnd: null,
      dateTimeSort: true,
      sensorData: Seed.sensorData,
    };
  },
  methods: {
    formatDate(date) {
      let formattedDate = "";
      formattedDate = new Date(date).toLocaleString("da-DK");
      let tempArray = formattedDate.split(" ");

      tempArray[0] = tempArray[0].replaceAll(".", "/");
      tempArray[1] = tempArray[1].replaceAll(".", ":");
      formattedDate = tempArray.join(" ");
      return formattedDate;
    },
    toggleTimeSort() {
      this.dateTimeSort = !this.dateTimeSort;
      console.log(this.dateTimeSort);
    },
  },
  computed: {
    sortedDateTimes() {
      let startDate = new Date(this.dateStart);
      let endDate = new Date(this.dateEnd);
      const tempArray = [];
      if (this.dateStart && this.dateEnd) {
        this.sensorData.slice(0).map((a) => {
          let date = new Date(a.time);
          if (date > startDate && date < endDate) {
            console.log(a);
            tempArray.push(a);
          }
        });
        return tempArray;
      }
      if (this.dateTimeSort) {
        return this.sensorData.slice(0).sort((a, b) => {
          return new Date(a.time) - new Date(b.time);
        });
      } else {
        return this.sensorData;
      }
    },
  },
});
