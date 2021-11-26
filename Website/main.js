const baseUrl = "https://localhost:44367/api/Sensor/"

const App = {
    data() {
      return {
      }
    },
    methods: {
      
    }
  }

// Create a Vue application
const app = Vue.createApp(App)

app.component('sensor-data-list', {
    data () {
        return {
          sensorData: []
          }
    },
    methods: {
      getAll (response)
      {        
        this.sensorData = response.data
      }
    },
    template: /*html*/`
        <sensor-data-get-button @getAll="getAll" /> 
        <get-current-mood-button />
        <table class="table table-bordered table-hover table-striped">
            <thead>
                <th class="text-center"><b>Id</b></th>
                <th class="text-center"><b>Temperature</b></th>
                <th class="text-center"><b>Humidity</b></th>
                <th class="text-center"><b>Pressure</b></th>
            </thead>
            <tbody >
                <sensor-data v-for="data in sensorData" v-bind:data="data"/>
            </tbody>
        </table>
      `})

app.component('sensor-data', {
    props: ['data'],
    template: /*html*/`
        <tr>
            <td class="text-center">{{data.id}}</td>
            <td class="text-center">{{data.temperature}}</td>
            <td class="text-center">{{data.humidity}}</td>
            <td class="text-center">{{data.pressure}}</td>
        </tr>
    `})

app.component('sensor-data-get-button', {
  methods: {
    async get() {
        var response = await axios.get(baseUrl)
        this.$emit('getAll', response)
    }
  },
  emits: ['getAll'],
  template: /*html*/`
    <button class="btn btn-dark" @click="get">
      Get All
    </button>  
  `})

app.component('get-current-mood-button', {
  methods: {
    async getMood() { 
      var url = baseUrl + "GetLatest"
      var response = (await axios.get(url)).data
      if (response.temperature < 15) console.log("sad")
      if (response.temperature >= 15 && response.temperature < 20) console.log("ok")
      if (response.temperature > 20) console.log("happy")
    }
  },
  emits: ['getMood'],
  template: /*html*/`

  <button class="btn btn-dark" @click="getMood">
    Mood
  </button>  
`})

app.mount('#app')