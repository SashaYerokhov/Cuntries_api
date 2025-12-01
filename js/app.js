const { createApp } = Vue;
const App = {
  // data() {
  //   return {
  //     countries: [],
  //     search: "",
  //     countryName: [],
  //     loading: false,
  //   };
  // },
  // computed: {
  //   filtredCountries() {
  //     return this.countryName.filter((event) =>
  //       event.toLowerCase().includes(this.search.toLowerCase())
  //     );
  //   },
  // },
  // mounted() {
  //   this.loading = true;
  //   fetch("../data.json")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       this.countries = data;
  //       this.loading = false;
  //     })
  //     .catch((error) => {
  //       console.error("There was an error fetching the data");
  //       this.loading = false;
  //     });
  // },

  data() {
    return {
      countries: [], // исходные данные
      search: "", // строка поиска
      selectedRegion: "",
      loading: false,
      isDark: false,
      isActive: false,
      // country: {
      //   population: 1000000,
      // },
    };
  },
  computed: {
    filteredCountries() {
      // console.log("Search value:", this.search); // Что вводится
      // console.log("All countries:", this.countries.length); // Сколько стран загружено
      // console.log(this.selectedRegion);

      let result = this.countries;

      if (this.search) {
        result = result.filter((country) =>
          country.name.toLowerCase().includes(this.search.toLowerCase())
        );
      }

      if (this.selectedRegion) {
        result = result.filter(
          (country) => country.region === this.selectedRegion
        );
      }

      return result;
    },
    // formattedPopulation() {
    //   console.log(this.country.population);
      
    //   return numeralFilter(this.country.population, '0,0')
    // },
  },
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark;
      this.isActive = !this.isActive;
      this.applyTheme();
    },
    applyTheme() {
      if (this.isDark) {
        document.body.setAttribute("color-scheme", "dark");
        document.body.classList.add("dark-theme");
      } else {
        document.body.setAttribute("color-scheme", "light");
        document.body.classList.remove("dark-theme");
      }
    },
  },

  mounted() {
    this.loading = true;
    fetch("../data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        this.countries = data;
        this.loading = false;
      })
      .catch((error) => {
        console.error("There was an error fetching the data", error);
        this.loading = false;
      });
  },
};

createApp(App).mount("#app");

// data() {
//   return {
//     countries: [],
//     search: "",
//     countryName: [],
//   };
// },
// computed: {
//   filterCountries() {
//     if (this.search === "") return this.countryName;
//     else
//       return this.countryName.fiter(
//         (event) => event.toLowerCase().indexOf(this.search.toLowerCase()) > -1
//       );
//   },
// },
// async mounted() {
//   try {
//     const response = await fetch("../data.json");
//     this.countries = await response.json();

//   } catch (error) {
//     console.error("Error", error);
//   }
// },

// Дополнительно (если нужно фильтровать и по региону):
// Если позже добавите фильтрацию по региону, можно будет расширить computed свойство:
// computed: {
//   filteredCountries() {
//     let result = this.countries;

//     // Фильтрация по поиску
//     if (this.search) {
//       result = result.filter(country =>
//         country.name.toLowerCase().includes(this.search.toLowerCase())
//       );
//     }

//     // Фильтрация по региону (если добавите v-model для региона)
//     if (this.selectedRegion) {
//       result = result.filter(country =>
//         country.region.toLowerCase() === this.selectedRegion.toLowerCase()
//       );
//     }

//     return result;
//   },
// },
