app.component("sensordata-component", {
  template: /* html */ `<section>
    <h1 class="h3 text-center pt-5">MoodMedia Admin Panel</h1>
    <div class="input-group mt-5 mb-3 justify-content-around">
      <div class="">
        <label class="me-3" for="datetime-local-start">Start Date</label>
        <input
          v-model="dateStart"
          type="date"
          id="datetime-local-start"
        />
      </div>
      <div class="">
        <label class="ms-3" for="datetime-local-end">End Date</label>
        <input
          v-model="dateEnd"
          type="date"
          id="datetime-local-end"
        />
      </div>
    </div>
    <section v-if="error">
    <p class="lead text-center">
      We're sorry, we're not able to retrieve this information at the moment, please try again later
    </p>
  </section>
    <section v-else>
      <div v-if="loading"><h1 class="display-5 text-center">Hang on loading data...</h1></div>
      <div v-else>
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
            <tr v-for="data in dates" :key="data.id">
              <td>{{ data.sensorName }}</td>
              <td>{{ data.temperature }} &#176;</td>
              <td>{{ data.humidity }}</td>
              <td>{{ data.pressure }}</td>
              <td>{{ formatDate(data.time) }}</td>
            </tr>
          </tbody>
        </table>
        </div>
    </section>
    <div v-if="sensorData.length > 0">
    <temperature-chart v-bind:parentDates="dates"></temperature-chart>
    <pressure-chart v-bind:parentDates="dates"></pressure-chart>
    <humidity-chart v-bind:parentDates="dates"></humidity-chart>
    </div>
  </section>`,
  data() {
    return {
      dateStart: null,
      dateEnd: null,
      dateTimeSort: true,
      sensorData: [],
      // sensorData: Seed.sensorData, // THIS IS FOR MOCK DATA ONLY!
      error: false,
      loading: true,
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
    },
  },
  computed: {
    dates() {
      let startDate = new Date(this.dateStart);
      let endDate = new Date(this.dateEnd);
      const tempArray = [];
      if (this.dateStart && this.dateEnd) {
        this.sensorData.slice(0).map((a) => {
          let date = new Date(a.time);
          if (date > startDate && date < endDate) {
            tempArray.push(a);
          }
        });
        return tempArray;
      } else {
        return this.sensorData.slice(0);
      }
    },
  },
  mounted() {
    axios
      .get("https://localhost:44367/api/Sensor/")
      .then(
        (response) =>
          (this.sensorData = JSON.parse(JSON.stringify(response.data)))
      )
      .catch((error) => {
        this.error = true;
      })
      .finally(() => {
        this.loading = false;
      });
  },
});
