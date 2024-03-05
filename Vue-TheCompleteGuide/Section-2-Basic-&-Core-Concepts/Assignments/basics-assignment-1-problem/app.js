const app = Vue.createApp({
  data() {
    return {
      name: "Tom",
      age: 22,
      image:
        "https://images.pexels.com/photos/20272816/pexels-photo-20272816/free-photo-of-defocused-photo-of-a-car-on-a-dirt-road-with-silhouetted-mountains-in-distance-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    };
  },
  methods: {
    favouriteNumber() {
      return Math.random(1, 10);
    },
  },
});

app.mount("#assignment");
