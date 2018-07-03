<template>
	<div>
		<h3>{{ id }}:{{title}}</h3>
		<p>{{title1}}</p>
		<p>{{normalizedSize}}</p>
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
	computed: {
	  	normalizedSize() {
	    	return this.title.trim().toUpperCase()
	  	}
	}
}
</script>

<style scoped>

</style>
