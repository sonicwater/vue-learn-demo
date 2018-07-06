<template>
  	<div>123
  		<!-- <header>
    		<span v-if="fatherComponent == 'home'">{{level}}</span>
    		<span v-if="fatherComponent == 'item'">题目{{itemNum}}</span>
    	</header>
		<div v-if="fatherComponent == 'home'" >
    		<router-link to="item"> 开始答题 </router-link>
    	</div>
    	<div v-if="fatherComponent == 'item'" >
			<div v-if="itemDetail.length > 0">
				<header>{{itemDetail[itemNum-1].topic_name}}</header>
				<ul>
					<li v-bind:class="{'has_choosed':choosedNum==index}" v-for="(item, index) in itemDetail[itemNum-1].topic_answer" @click="choosed(index, item.topic_answer_id)">
						<span>{{chooseType(index)}}</span>
						<span>{{item.answer_name}}</span>
						<span>| {{choosedNum}}</span>
						<span>| {{choosedId}}</span>
					</li>
				</ul>
			</div>
    		<span @click="nextItem" v-if="itemNum < itemDetail.length"> 下一题 </span>
    		<span v-else @click="submitAnswer"> 交卷！ </span>
    	</div> -->
  	</div>
</template>

<script>
export default {
	name: 'container',
	data() {
		return {
			
		}
	},
	methods: {
  	},
	created(){
		
	}
}
</script>

<style lang="scss">

</style>