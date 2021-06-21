<template>
	<div id="app" class="main-layout">
    <header-cmp />
		<div class="view">
			<router-view />
		</div>
	</div>
</template>

<script>
import HeaderCmp from '../src/cmps/header.cmp.vue'
export default {
    data(){return{}
   
    },
    computed:{
    
    },
    created(){
   
    
    },
  components: {
    HeaderCmp
    
  },
}
</script>
