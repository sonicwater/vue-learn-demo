<template>
  	<div>
  		<header>
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
    	</div>
  	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
	name: 'itemcontainer',
	data() {
		return {
			// itemId: null, //题目ID
			choosedNum: null, //选中答案索引
			choosedId:null //选中答案id
		}
	},
	props:['fatherComponent'],
	computed: mapState([
	  	'itemNum', //第几题
  		'level', //第几周
  		'itemDetail', //题目详情
	]),
	methods: {
  		...mapActions([
  			'addNum','initializeData'
  		]),
  		//点击下一题
  		nextItem(){
  			if (this.choosedNum !== null) {
	  			this.choosedNum = null;
	  			//保存答案, 题目索引加一，跳到下一题
	  			this.addNum(this.choosedId)
  			}else{
  				alert('您还没有选择答案哦')
  			}
  		},
  		//索引0-3对应答案A-B
	  	chooseType: type => {
	  		switch(type){
	  			case 0: return 'A';
	  			case 1: return 'B';
	  			case 2: return 'C';
	  			case 3: return 'D';
	  		}
	  	},
	  	//选中的答案信息
	  	choosed(type,id){
	  		this.choosedNum = type;
	  		this.choosedId = id;
	  	},
	  	//到达最后一题，交卷，请空定时器，跳转分数页面
	  	submitAnswer(){
	  		if (this.choosedNum !== null) {
	  			this.addNum(this.choosedId)
	  			this.$router.push('score')
  			}else{
  				alert('您还没有选择答案哦')
  			}
	  	},
  	},
	created(){
		//初始化信息
		if(this.fatherComponent == 'home') {
			this.initializeData();
		}
	}
}
</script>

<style lang="less">
	.has_choosed{color:red}
</style>