<template>
  	<div class="home_container">
        <!-- <itemcontainer father-component="home"></itemcontainer> -->
        <div class="static"
             v-bind:class="classObject">123
        </div>
    </div>
</template>

<script>
import todoItem from '../../components/todo-item'
// import itemcontainer from '../../components/itemcontainer'

export default {
	  name: 'home',
    methods:{
      getAnswer() {

      }
    },
    data(){
        return {
            classObject: {
              'active': true,
              'text-danger': false
            }
        }
    },
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
