<template>
	<div>
		<h3>{{ id }}:{{title}}</h3>
		<p>{{title1}}</p>
		<p v-on:my-event="doSomething">{{normalizedSize}}</p>
		<input type="text" name="" v-on:focus.native="onFocus" />
	</div>
</template>

<script>
export default {
    name: 'score-component',
    props: {
	  	id: {
	      	type: Number,
	      	required: true
	    },
	    title: {
	      	type: String,
	      	required: true
	    }
	},
    data(){
        return {
        	title1 : this.title
        }
    },
    methods:{
        doSomething(){
            alert(1);
        },
        onFocus(){
        	console.log("focus");
        }
    },
    computed: {
	  	normalizedSize() {
	    	return this.title.trim().toUpperCase()
	  	}
	}
}
</script>

<style scoped>

</style>
