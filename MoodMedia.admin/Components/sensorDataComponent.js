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
            <tr v-for="data in sortedDateTimes" :key="data.id">
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
    <div id="container" style="width:100%; height:400px;">Test</div>
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
      console.log(this.dateTimeSort);
    },
    createChart() {
      // const conElement = document.getElementById("container");
      let myTarget = JSON.parse(JSON.stringify(this.sensorData));
      let startDate;
      let endDate;
      // Define tempature
      const temperatures = myTarget.map((element) => {
        return element.temperature;
      });

      // Define start and end date
      if (this.dateStart && this.dateEnd) {
        startDate = new Date(this.dateStart);
        endDate = new Date(this.endDate);
      } else {
        startDate = new Date(myTarget[0].time);
        endDate = new Date(myTarget[myTarget.length - 1].time);
        console.log(startDate.getDate());
        console.log(startDate);
      }
      // Define Date end
      const chart = Highcharts.chart("container", {
        title: {
          text: "Solar Employment Growth by Sector, 2010-2016",
        },

        subtitle: {
          text: "Source: thesolarfoundation.com",
        },

        yAxis: {
          title: {
            text: "Number of Employees",
          },
        },

        xAxis: {
          accessibility: {
            rangeDescription: "Range: 2010 to 2017",
          },
          type: "datetime",
          max: Date.UTC(
            endDate.getFullYear(),
            endDate.getMonth(),
            endDate.getDay()
          ),
        },

        legend: {
          layout: "vertical",
          align: "right",
          verticalAlign: "middle",
        },

        plotOptions: {
          series: {
            pointStart: Date.UTC(
              startDate.getFullYear(),
              startDate.getMonth(),
              startDate.getDay()
            ),
            pointInterval: 168 * 3600 * 1000, // one day
          },
        },

        series: [
          {
            name: "Temperature",
            data: temperatures,
          },
        ],

        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 500,
              },
              chartOptions: {
                legend: {
                  layout: "horizontal",
                  align: "center",
                  verticalAlign: "bottom",
                },
              },
            },
          ],
        },
      });
      console.log(chart);
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
        this.createChart();
        return tempArray;
      }
      if (this.dateTimeSort) {
        // this.createChart();
        return this.sensorData.slice(0).sort((a, b) => {
          return new Date(a.time) - new Date(b.time);
        });
      }
    },
  },
  mounted() {
    axios
      .get("https://localhost:44367/api/Sensor/")
      .then(
        (response) => (
          (this.sensorData = JSON.parse(JSON.stringify(response.data))),
          console.log(this.sensorData),
          this.createChart()
        )
      )
      .catch((error) => {
        console.log(error);
        this.error = true;
      })
      .finally(() => {
        this.loading = false;
        console.log("Final" + this.sensorData);
        this.createChart();
      });
  },
});
