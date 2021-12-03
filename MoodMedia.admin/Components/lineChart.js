app.component("line-chart", {
  template: `<div id="container" style="width:100%; height:400px;">Test</div>`,
  props: ["parentDates"],
  methods: {
    createChart() {
      // const conElement = document.getElementById("container");
      if (this.parentDates.length > 0) {
        let datesArray = JSON.parse(JSON.stringify(this.parentDates));
        let data = {
          timestamp: [],
          temperatures: [],
        };
        // Define tempature
        const temperatures = datesArray.map((element) => {
          return element.temperature;
        });
        const timestamps = datesArray.map((element) => {
          let date = new Date(element.time);
          var dd = String(date.getDate()).padStart(2, "0");
          var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
          var yyyy = date.getFullYear();
          date = dd + "/" + mm + "/" + yyyy;
          return date;
        });

        data["timestamp"] = timestamps;
        data["temperatures"] = temperatures;

        console.log(data);

        // Define start and end date
        if (this.dateStart && this.dateEnd) {
          startDate = new Date(this.dateStart);
          endDate = new Date(this.endDate);
        } else {
          startDate = new Date(datesArray[0].time);
          endDate = new Date(datesArray[datesArray.length - 1].time);
          // console.log(startDate.getDate());
          // console.log(startDate);
        }
        // Define Date end
        const chart = Highcharts.chart("container", {
          title: {
            text: "Tempertures",
          },

          subtitle: {
            text: "Source: thesolarfoundation.com",
          },

          yAxis: {
            title: {
              text: "Temperature (°C)",
            },
          },

          xAxis: {
            categories: data.timestamp,
            labels: {
              rotation: -90,
              // the step config is how you control how many x-axis labes are shown
              // this will help when there are lots of labels
            },
          },

          series: [
            {
              name: "Temperature",
              data: data.temperatures,
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
      }
      // console.log(chart);
    },
  },
  mounted() {
    this.createChart();
  },
});
