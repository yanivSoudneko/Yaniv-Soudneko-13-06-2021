<template>
  <div class="home">
    <search-cmp />
    <div class="main-btn">
      <button @click="saveToFavorites()">Save</button>
      <button @click="changeToCelsius()">Change to Celsius</button>
      <button @click="changeToDarkMode()">Mode</button>
    </div>
    <div v-if="city" @myEvent="city()">
      <span
        >{{ city.LocalizedName }},{{ city.Region.LocalizedName }},{{
          city.AdministrativeArea.CountryID
        }}</span
      >
    </div>
    <ul class="main-container" v-if="weathers.DailyForecasts">
      <li v-for="forecast in weathers.DailyForecasts" :key="forecast.Date">
        <weather-list :forecast="forecast" :city="city" />
      </li>
    </ul>
  </div>
</template>

<script>
import SearchCmp from "../cmps/search.cmp.vue";
import weatherList from "../cmps/weather-list.vue";
export default {
  name: "Home",

  computed: {
    city() {
      const city = this.$store.getters.getlocation;
      return city;
    },
    weathers() {
      return this.$store.getters.getWeather;
    },
  },
  methods: {
    changeToCelsius() {
      this.$store.dispatch({ type: "changeDisplayToCelsius" });
    },
    changeToDarkMode() {
      this.$store.dispatch({ type: "changeToDarkMode" });
      const mainElement = document.getElementById("app");
      const isDark = this.$store.getters.getDarkMode;
      if (isDark === true) {
        mainElement.classList.add("darkMode");
      } else {
        mainElement.classList.remove("darkMode");
      }
    },
    saveToFavorites() {
      const weather = { ...this.$store.getters.getWeather };
      const city = { ...this.$store.getters.getlocation };
      this.$vToastify.success("successfuly saved");
      const favoriteCity = {
        weathers: weather,
        city: city,
      };
      this.$store.dispatch({ type: "saveToFavories", favoriteCity });
    },
  },

  created() {
    this.$store.dispatch({ type: "queryLocation" });
  },
  components: {
    SearchCmp,
    weatherList,
  },
};
</script>
<style >

body {
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: rgba(238, 237, 237, 0.33);
  color: rgb(105, 104, 104);
  font-family: sans-serif;
}
.main-btn button{
  margin: 10px;
}
.darkMode {
  background-color: grey;
  height: 100vh;
}
.home {
  max-width: 860px;
  margin: 0 auto;
}

.main-container {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(365px, 1fr));
  grid-gap: 10px 10px;
}
@media (max-width: 768px) {
  .main-container {
    max-width: 680px;
    margin: 0 auto;
  }
}
</style>