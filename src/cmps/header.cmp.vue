<template>
  <header>
    <div>Herolo Weather Task</div>
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
.links-to{
    text-decoration: none;
    color: grey;
    font-size: 20px
    ;
}

@media(max-width:768px) {
    header {
       margin: 0 auto;
      
    }
}
</style>