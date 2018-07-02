<template>
  	<div class="home_container">
        <!-- <itemcontainer father-component="home"></itemcontainer> -->
        <div v-bind:class="[isActive ? activeClass : '', errorClass]">123</div>
        <todo-item></todo-item>
        <ul>
          <li v-for="(item, index) of items" :key="item.id">
            {{index}} , {{ item.message }}
          </li>
        </ul>
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
    components:{
      'todo-item': todoItem,
    },
    data(){
        return {
            isActive:false,
            activeClass: 'active',
            errorClass: 'text-danger',
            items: [
              { message: 'Foo',id:0 },
              { message: 'Bar',id:1 }
            ]
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
