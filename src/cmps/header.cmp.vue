<template>
  <header>
    <div class="logo">Herolo Task</div>
    <div>
      <router-link to="/" class="links-to"> Home </router-link>
      <router-link to="/favorites" class="links-to"> Favorites </router-link>
    </div>
  </header>
</template>
<script>
</script>
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  max-width: 1060px;
  margin: 0 auto;
  padding: 20px;
}
.links-to,
.logo {
  text-decoration: none;
  color: rgb(22, 16, 16);
  font-size: 20px;
}

@media (min-width: 768px) {
  header {
    margin: 0 auto;
  }
}
</style>