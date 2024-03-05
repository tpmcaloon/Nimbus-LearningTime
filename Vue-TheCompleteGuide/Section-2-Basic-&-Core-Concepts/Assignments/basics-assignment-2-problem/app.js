const app = Vue.createApp({
  data() {
    return {
      output: "",
      confirmedOutput: "",
    };
  },
  methods: {
    showAlert() {
      alert("This is an alert!");
    },
    updateOutput(event) {
      this.output = event.target.value;
    },
    confirmOutput(event) {
      if (event.key === "Enter") {
        this.confirmedOutput = event.target.value;
      }
    },
  },
});

app.mount("#assignment");
