app.component('mood-component', {
    data() {
        return {
            mood: null
        }
    },
    methods : {
        setMood(mood){
            this.mood = mood
        }
    },
    template: /*html*/`
    <mood-button @getMood="setMood"> </mood-button>
    <h5 v-if="mood" class="text-white">current mood: {{mood}}</h5>
    <br/>
`})

app.component('mood-button', {
    methods: {
      async getMood() { 
        var url = baseUrl + "GetLatest"
        var response = (await axios.get(url)).data
        if (response.temperature < 15) this.$emit('getMood', "Sad")
        if (response.temperature >= 15 && response.temperature < 20) this.$emit('getMood', "Ok")
        if (response.temperature > 20) this.$emit('getMood', "Happy")
      }
    },
    emits: ['getMood'],
    template: /*html*/`
  
    <button class="btn btn-primary" @click="getMood">
      Get Mood
    </button>  
  `})