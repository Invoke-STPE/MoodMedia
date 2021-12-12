app.component("menu-component", {
  data() {
    return {
      showStatistics: false,
      showSensorData: false,
      showGraphs: false,
      showAdminSettings: false,
    }
  },
  template: /* html */ `
  <div class="container">

    <div class="row mt-2 g-4">
      <div class="col-md-4">
        <button-component 
          :buttonText="'User Statistics'" 
          :icon="'./images/icons/people.svg'"
          @clicked="toggleStatistics">
        </button-component>
      </div>
      <div class="col-md-4">
        <button-component 
          :buttonText="'Sensor Data'" 
          :icon="'./images/icons/clipboard-data.svg'"
          @clicked="toggleSensorData">
        </button-component>
      </div>
      <div class="col-md-4">
        <button-component 
          :buttonText="'Graphs'" 
          :icon="'./images/icons/graph-up.svg'"
          @clicked="toggleGraphs">
        </button-component>
      </div>
    </div>

    <div class="row mt-2 g-4">
      <div class="col-md-4">
        <button-component 
          :buttonText="'Admin Settings'" 
          :icon="'./images/icons/people.svg'"
          @clicked="toggleAdminSettings">
        </button-component>
      </div>
    </div>
    
  </div> 
  <admin-component 
    v-if="showAdminSettings">
  </admin-component>

  <sensordata-component 
    v-if="showSensorData">
  </sensordata-component>

  <sensordata-component 
    v-if="showGraphs">
  </sensordata-component>

  <user-component 
    v-if="showStatistics">
  </user-component>
  
  `,
  methods: {
    toggleStatistics() {
      this.showStatistics = true;
      //console.log("Stats: " + this.showStatistics);
    },
    toggleSensorData() {
      this.showSensorData = true;
      //console.log("Data: " + this.showSensorData);
    },
    toggleGraphs() {
      this.showGraphs = true;
      //console.log("Graphs: " + this.showGraphs);
    },
    toggleAdminSettings() {
      this.showAdminSettings = true;
      //console.log("Admin: " + this.showAdminSettings);
    },
    
  }
});
