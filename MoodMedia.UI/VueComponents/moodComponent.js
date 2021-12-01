app.component('mood-component', {
  data() {
    return {
      mood: null,
      weather: null,
      sunny: false,
      nice: false,
      cold: false,
      rain: false,
      snow: true,
      freezing: false,
      
  }
  },
  methods : {
    setMood(response){
      this.weather = response
      this.sunny = false
      this.nice = false
      this.cold = false
      this.rain = false
      this.snow = false
      this.freezing = false
      //console.log(this.weather)

      if (response.temperature < 5) {
        this.mood = "freezing"
        this.freezing = true
        if (response.humidity >= 80) {
          this.mood += " and snowing"
          this.snow = true
        }
      }
      else if (response.temperature < 15) {
        this.mood = "cold"
        this.cold= true
        if (response.humidity >= 80) {
          this.mood += " and rainy"
          this.rain = true
        }
      }
      else if (response.temperature <= 22) {
        this.mood = "nice" 
        this.nice = true
        if (response.humidity >= 80) {
          this.mood += " but rainy"
          this.rain = true
        }
      }
      else {
        this.mood = "hot"
        this.sunny = true
        if (response.humidity >= 80) {
          this.mood += " but rainy"
          this.rain = true
        }
      } 
    }
  },
  template: /*html*/`
  <!--<div class="text-light"><p>DEBUG: <b>Freezing:</b> {{freezing}} - <b>Cold:</b> {{cold}} - <b>Nice: </b> {{nice}} - <b>Sun:</b> {{sunny}} <b>| Rain:</b> {{rain}} - <b>Snow:</b> {{snow}}</p></div>-->
  <sun-component v-if="sunny"></sun-component>
  <sun-clouds-component v-if="nice"></sun-clouds-component>
  <rain-component v-if="rain"></rain-component>
  <snow-component v-if="snow"></snow-component>
  <freezing-component v-if="freezing" style="padding-right: 400px"></freezing-component>
  <freezing-component v-if="freezing"></freezing-component>
  

  <weather-information-box v-if="weather" v-bind:weather=weather v-bind:mood=mood></weather-information-box>
  <mood-button @getMood="setMood"> </mood-button>
  <br/>
  `
})

app.component('mood-button', {
  methods: {
    async getMood() { 
      var url = baseUrl + "GetLatest"
      var response = (await axios.get(url)).data
      this.$emit('getMood', response)
    }
  },
  emits: ['getMood'],
  template: /*html*/`
  <button class="btn btn-primary" @click="getMood">
    Get Mood
  </button>
  `
})

  app.component('weather-information-box', {
    props: {
      weather: null,
      mood: null
    },
    template: /*html*/`
    <div class="info-box">
      <div class="info-box-content text-light text-center">
        <h3>Current Weather: {{mood}}</h3>
        <p>Temperature: {{weather.temperature}}</p>
        <p>Humidity: {{weather.humidity}}</p>
      </div>
    </div>
    `
})