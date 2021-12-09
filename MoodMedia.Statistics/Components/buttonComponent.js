app.component("button-component", {
    data() {
      return {
      };
    },
    props: [
        "buttonName" = "",
        "buttonAction"
    ],
    template: /*html*/`
      <button class="btn btn-dark" @click="button-action">{{button-name}}</button>
    `,
    methods: {
  
    },
    mounted() {}
  });