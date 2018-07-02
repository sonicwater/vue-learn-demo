<template>
	<div>
      	<button v-on:click="counter += 1">Add 1</button>
  		<p>The button above has been clicked {{ counter }} times.</p>
  		<button v-on:click="greet">Greet</button>
  		<button v-on:click="warn('Form cannot be submitted yet.', $event)">
		  Submit
		</button>
		<button @click.right="doSomething">A</button>
		<input type="checkbox" id="checkbox" v-model="checked">
		<label for="checkbox">{{ checked }}</label>
		<input
		  type="checkbox"
		  v-model="toggle"
		  true-value="yes"
		  false-value="no"
		>{{toggle}}
    </div>
</template>

<script>
export default {
    name: 'todo-item',
    data(){
        return {
        	counter: 0,
        	name: 'Vue.js',
        	checked : true,
        	toggle: 'yes'
        }
    },
    methods: {
	    greet(event) {
	      	// `this` 在方法里指向当前 Vue 实例
	      	alert('Hello ' + this.name + '!')
	      	// `event` 是原生 DOM 事件
	      	if (event) {
	        	alert(event.target.tagName)
	      	}
	    },
	    warn(message, event) {
		    // 现在我们可以访问原生事件对象
		    if (event) event.preventDefault()
		    alert(message)
		},
		doSomething(e){
			alert(e.target.tagName)
		}
	}
}
</script>

<style scoped>

</style>
