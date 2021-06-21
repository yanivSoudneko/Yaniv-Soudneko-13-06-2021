<template>
  <div class="input-group">
    <form @submit.prevent="doSearch()">
      <input
        type="search"
        class="form-control rounded"
        v-model="filterBy"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <button type="button" class="btn btn-outline-primary" @click="doSearch()">
        search
      </button>
    </form>
  </div>
</template>
<script>
export default {
  name: "Search",
  data() {
    return {
      filterBy: "",
    };
  },
  components: {},
  methods: {
    async doSearch() {
      try {
        this.$emit("myEvent");
        await this.$store.dispatch({
          type: "queryLocation",
          filterBy: this.filterBy,
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style scoped>
form {
  display: flex;
  margin: 0 auto;
}
</style>