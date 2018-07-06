<template>
  	<div>
  		<el-container>
		  	<el-aside width="200px">
		  		<el-menu router :default-active="$route.path" default-active="./" class="el-menu-vertical-demo nav" @open="handleOpen" @close="handleClose">
		      		<el-menu-item index="./">
			        	<i class="el-icon-menu"></i>
			        	<span slot="title">home</span>
			      	</el-menu-item>
			      	<el-menu-item index="./cart">
			        	<i class="el-icon-goods"></i>
			        	<span slot="title">cart</span>
			      	</el-menu-item>
			    </el-menu>
		  	</el-aside>

		  	<el-main>
				<span v-if="fatherComponent == 'home'">商品列表</span>
    			<span v-if="fatherComponent == 'cart'">购物车</span>
    			<el-table :data="goodList" style="width: 100%" :row-class-name="tableRowClassName">
				    <el-table-column prop="id" label="商品ID" width="180"></el-table-column>
				    <el-table-column prop="name" label="商品名称" width="180"></el-table-column>
				    <el-table-column prop="num" label="购买数量"></el-table-column>
				</el-table>
		  	</el-main>
		</el-container>
  		<!-- 
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
import ElementUI from 'element-ui';
export default {
	name: 'container',
	props:['father-component'],
	data() {
		return {
			goodList: [{
	          	id: '1',
	          	name: '护手霜',
	          	num: '5',
	        }, {
	          	id: '2',
	          	name: '植物精华',
	          	num: '8'
	        }, {
	          	id: '3',
	          	name: '洁面乳',
	          	num: '2',
	        }, {
	          	id: '4',
	          	name: '保湿水',
	          	num: '9'
	        }]
		}
	},
	methods: {
      	handleOpen(key, keyPath) {
        	console.log(key, keyPath);
      	},
      	handleClose(key, keyPath) {
        	console.log(key, keyPath);
      	},
      	tableRowClassName({row, rowIndex}) {
	        if (rowIndex === 1) {
	          	return 'warning-row';
	        } else if (rowIndex === 3) {
	          	return 'success-row';
	        }
	        return '';
	    }
    },
	created(){
		
	}
}
</script>

<style lang="scss">

	a{text-decoration: none;}

	.nav a{
		display: block;
	}

	.el-table .warning-row {
	    background: oldlace;
	}

	.el-table .success-row {
	    background: #f0f9eb;
	}
</style>