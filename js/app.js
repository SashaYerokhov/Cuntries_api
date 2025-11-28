const { createApp } = Vue;
const App = {
    data() {
        return {
            countries: [],
        }
    },
  async mounted() {
    try {
      const response = await fetch("../data.json");
      this.countries = await response.json();
    //   console.log(this.countries);
      
    } catch (erroe) {
      console.error("Error", error);
    }
  },
};

createApp(App).mount("#app");
