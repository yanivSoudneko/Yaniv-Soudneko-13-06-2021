<template>
  <div class="about">
    <ul class="favorites-container" v-if="favoriteCities">
      <favorite-preview
        v-for="favoriteCity in favoriteCities"
        :key="favoriteCity._id"
        :favoriteCity="favoriteCity"
      />
    </ul>
  </div>
</template>
<script>
import FavoritePreview from "../cmps/favorite-preview.vue";
export default {
  name: "Favorites",

  computed: {
    favoriteCities() {
      return this.$store.getters.getFavoriteCities;
    },
  },
  methods: {},
  components: {
    FavoritePreview,
  },
};
</script>
<style scoped>
.favorites-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(365px, 1fr));
  grid-gap: 10px 10px;
  max-width: 1060px;
  margin: 0 auto;
}
</style>
