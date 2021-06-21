<template>
  <!-- <li>
         <p>{{favoriteCity.weathers.DailyForecasts[0]}}</p>
         <button @click="removeFavoriteCity()">remove</button>
         
     </li> -->
  <div class="weather" @click="redirect()">
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <span class="icon"
            ><img
              class="img-fluid"
              :src="`https://developer.accuweather.com/sites/default/files/${weatherIcon}-s.png`"
          /></span>
          <div class="title">
            <p>{{ favoriteCity.city.LocalizedName }}</p>
          </div>
          <div class="temp">+{{ fahrenToCles }}<sup>&deg;</sup></div>
          <div class="row">
            <div class="col-4">
              <div class="header">General</div>
              <div class="value">
                {{ favoriteCity.weathers.DailyForecasts[0].Day.IconPhrase }}
              </div>
            </div>
            <div class="col-4">
              <div class="header">Air pollution</div>
              <div class="value">47</div>
            </div>
            <div class="col-4">
              <div class="header">Night</div>
              <div class="value">{{ changeToCelsNight }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["favoriteCity"],

  computed: {
    changeToCelsNight() {
      const isClesius = this.$store.getters.getClesius;
      if (isClesius === true) {
        const converte =
          this.favoriteCity.weathers.DailyForecasts[0].Night.Icon;
        const res = (converte - 32) / 1.8;
        return res.toFixed(1);
      } else {
        return this.favoriteCity.weathers.DailyForecasts[0].Night.Icon;
      }
    },
    weatherIcon() {
      const { Icon } = this.favoriteCity.weathers.DailyForecasts[0].Day;
      return Icon < 10 ? `0${Icon}` : Icon;
    },
    fahrenToCles() {
      const isClesius = this.$store.getters.getClesius;
      if (isClesius === true) {
        const converte =
          this.favoriteCity.weathers.DailyForecasts[0].Temperature.Minimum
            .Value;
        const res = (converte - 32) / 1.8;
        return res.toFixed(1);
      } else {
        return this.favoriteCity.weathers.DailyForecasts[0].Temperature.Minimum
          .Value;
      }
    },
  },
  methods: {
    redirect() {
      this.$router.push("/");
    },
    removeFavoriteCity() {
      console.log("executing removeFav");
      this.$store.dispatch({
        type: "removeFromFavorites",
        _id: this.favoriteCity._id,
      });
    },
  },
};
</script>

<style >
.container {
  background-color: #ffffff;
  border-color: #ffffff;
  align-items: center;
  border-radius: 1rem;
  vertical-align: middle;
}

@media (max-width: 767px) {
  .container {
    height: fit-content;
  }
}

.weather {
  width: 100%;
}

@media (max-width: 767px) {
  .weather {
    width: 100%;
  }
}

.card {
  padding: 1rem;
  width: 365px;
  margin: 15px;
  border-radius: 1rem;
  background-color: rgba(238, 237, 237, 0.22);
  border-color: rgba(238, 237, 237, 0.22);
  box-shadow: 5px 6px 6px 2px #e9ecef;
  text-align: center;
}

@media (max-width: 768px) {
  .card {
    margin: 1.5rem;
  }
}

.title {
  justify-content: center;
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}

.title p {
  margin-bottom: 0.2rem;
  font-size: 1.2rem;
}

.temp {
  font-size: 2.6rem;
  margin-bottom: 1rem;
}

.header {
  color: #dddddd;
}

.col-4 {
  padding: 0 0.2rem;
}

.icon {
  align-self: flex-end;
  margin-right: -2.5rem;
  margin-top: -2rem;
  z-index: 999;
}
.row {
  width: 385px;
}

.icon img {
  width: 5rem;
}
</style>