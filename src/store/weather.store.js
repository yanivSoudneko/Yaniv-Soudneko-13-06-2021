import Vue from 'vue'
import Vuex from 'vuex'
import { weatherService } from "../services/weather.service.js";
import { storageService } from '../services/storage.service.js'
Vue.use(Vuex)

export const weatherStore = {
  state: {
    location: '',
    filterBy: '',
    isClesius: false,
    weather: {},
    favortiesCities: storageService.load('Favorite-city') || [],

    isDark: false
  },

  mutations: {
    queryLocation(state, { location }) {
      state.location = location.city
    },
    setWeather(state, { location }) {
      state.weather = location.weather
    },
    setFilterBy(state, { filter }) {
      state.filterBy = filter;
    },
    removeFromFavorites(state, { _id }) {
      state.favortiesCities = state.favortiesCities.filter(currFavCity => _id !== currFavCity._id)
    },
    saveToFavories(state, { favCityToAdd }) {
      // console.log(payload.favCityToAdd);
      console.log('favCity got in mutation: ', favCityToAdd)
      state.favortiesCities.push(favCityToAdd)
      // console.log(state.favortiesCities);
    },

  },
  actions: {
    removeFromFavorites(context, { _id }) {
      context.commit({ type: 'removeFromFavorites', _id })
      const updatedFavoriteCities = context.getters.getFavoriteCities
      storageService.store('Favorite-city', updatedFavoriteCities)
    },
    async queryLocation(context, { filterBy }) {
      try {
        const location = await weatherService.getCity(filterBy)
        context.commit({ type: 'queryLocation', location })
        context.commit({ type: 'setWeather', location })
      } catch (err) {
        console.log(err);
      }
    },
    saveToFavories(context, { favoriteCity }) {
      const favCityToAdd = {
        ...favoriteCity,
        _id: weatherService.makeId(5),
      }
      context.commit({ type: 'saveToFavories', favCityToAdd })
      const updatedFavoriteCities = context.getters.getFavoriteCities
      console.log('faoritesCities after update in state: ')
      console.log(updatedFavoriteCities)
      storageService.store('Favorite-city', updatedFavoriteCities)
    },
    changeDisplayToCelsius(context) {
      context.state.isClesius = !context.state.isClesius
    },
    changeToDarkMode(context) {
      context.state.isDark = !context.state.isDark
      console.log(context.state.isDark);
    }


  },
  getters: {
    filterBy(state) {
      return state.filterBy;
    },
    getlocation(state) {
      return state.location
    },
    getWeather(state) {
      return state.weather
    },
    getFavoriteCities(state) {
      return state.favortiesCities
    },
    getClesius(state) {
      return state.isClesius
    },
    getDarkMode(state) {
      return state.isDark
    }
  },
  modules: {
  }
}
