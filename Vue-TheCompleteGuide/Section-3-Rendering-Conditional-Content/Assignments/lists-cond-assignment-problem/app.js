const app = Vue.createApp({
  data() {
    return {
      enteredTaskValue: "",
      tasks: [],
      show: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTaskValue);
    },
    removeTask(idx) {
      this.tasks.splice(idx, 1);
    },
    toggleList() {
      this.show = !this.show;
    },
  },
});

app.mount("#assignment");
