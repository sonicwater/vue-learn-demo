<template>
  	<div class="home_container">
          <!-- <itemcontainer father-component="home"></itemcontainer> -->
          {{home}}
          <span v-bind:title="message">
              鼠标悬停几秒钟查看此处动态绑定的提示信息！
          </span>
    </div>
</template>

<script>
// import itemcontainer from '../../components/itemcontainer'

export default {
	  name: 'home',
    data(){
        return {
            home : "sonic",
            message: '页面加载于 ' + new Date().toLocaleString()
        }
    }
  	// components: {
  	// 	  itemcontainer
  	// },
    // created(){
        
    // }
}
</script>

<style scoped>
  
</style>
