<template>
	<div>
	    <ul>
	        <li v-for="n in evenNumbers">{{ n }}</li>
	    </ul>
	    <ul>
		  <template v-for="item in items">
		    <li>{{ item.msg }}</li>
		    <li class="divider" role="presentation"><button>干掉</button></li>
		  </template>
		</ul>
	</div>
</template>

<script>
export default {
    name: 'todo-item',
    props:['todos'],
    data(){
        return {
        	numbers: [ 1, 2, 3, 4, 5 ],
        	items : [
        		{ msg: 'Foo',id:0 },
              	{ msg: 'Bar',id:1 }
        	]
        }
    },
	computed: {
	  	evenNumbers: function () {
	    	return this.numbers.filter(function (number) {
	      		return number % 2 === 0
	    	})
	  	}
	}
}
</script>

<style scoped>

</style>
