app.component("statistics-component", {
  data() {
    return {
    };
  },
  template: /*html*/`
    <br>
    <button-component :buttonName="GetStatistics" :buttonAction="GetStatistics" style="margin-left:30px"></button-component>
  `,
  methods: {

  },
  mounted() {}
});