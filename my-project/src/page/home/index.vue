<template>
  	<div class="home_container">
        <!-- <itemcontainer father-component="home"></itemcontainer> -->
        {{ number + 1 }}

        {{ ok ? 'YES' : 'NO' }}

        {{ message.split('').reverse().join('') }}

        <div v-bind:id="'list-' + id"></div>
    </div>
</template>

<script>
import todoItem from '../../components/todo-item'
// import itemcontainer from '../../components/itemcontainer'

export default {
	  name: 'home',
    data(){
        return {
            number : 1,
            ok : true,
            message : "sonic",
            id : 6

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
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
