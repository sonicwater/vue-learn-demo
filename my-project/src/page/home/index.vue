<template>
  	<div class="home_container">
        <!-- <itemcontainer father-component="home"></itemcontainer> -->
        {{ number + 1 }}

        {{ ok ? 'YES' : 'NO' }}

        {{ message.split('').reverse().join('') }}

        <div v-bind:id="'list-' + id"></div>

        <a v-bind:href="url">...</a>

        <a href="javascript:;" @click="doSomething">...</a>

        <form v-on:submit.prevent="onSubmit">
          
          <input type="submit" value="submit" />
        </form>
    </div>
</template>

<script>
import todoItem from '../../components/todo-item'
// import itemcontainer from '../../components/itemcontainer'

export default {
	  name: 'home',
    methods:{
      doSomething(){
        alert(1);
      },
      onSubmit(){
        alert(123);
      }
    },
    data(){
        return {
            number : 1,
            ok : true,
            message : "sonic",
            id : 6,
            url : "www.baidu.com"

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
