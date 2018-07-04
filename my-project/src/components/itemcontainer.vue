<template>
  	<div>
  		<header class="top_tips">
    		<span class="num_tip" v-if="fatherComponent == 'home'">home</span>
    		<span class="num_tip" v-if="fatherComponent == 'item'">item</span>
    	</header>
    	<input type="button" v-on:click="jian" value="-" />
    	{{ num }}
    	<input type="button" v-on:click="add" value="+" />
  	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
	name: 'itemcontainer',
	props:['fatherComponent'],
	data() {
		return {
			itemId: null, //题目ID
			choosedNum: null, //选中答案索引
			choosedId:null //选中答案id
		}
	},
	computed: mapState([
	  	'num'
	]),
	methods: {
  		...mapActions([
  			'addNum','jianNum'
  		]),
  		jian(){
  			this.jianNum()
  		},
  		add(){
  			this.addNum()
  		}
  	}
}
</script>

<style lang="less">

</style>