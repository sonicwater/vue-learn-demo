<template>
  	<my-component>555</my-component>
</template>

<script>
import myComponent from '../../components/my-component'

export default {
	  name: 'todo-item',
  	data(){
      return{

      }
      
    },
    components:{
      'my-component': myComponent,
    },
}

</script>

<style>
    

</style>
