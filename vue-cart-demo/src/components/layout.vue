<template>
  	<div>
  		<el-container>
		  	<el-aside width="200px">
		  		<el-menu router :default-active="$route.path" default-active="./" class="el-menu-vertical-demo nav">
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
		  		<span v-if="page == 'home'">商品列表</span>
		  		<span v-if="page == 'cart'">购物车</span>
				<el-table :data="goodList" style="width: 100%" :row-class-name="tableRowClassName">
				    <el-table-column prop="id" label="商品ID" width="180"></el-table-column>
				    <el-table-column prop="name" label="商品名称" width="180"></el-table-column>
				    <el-table-column prop="num" label="购买数量"></el-table-column>
				</el-table>
		  	</el-main>
		</el-container>
    </div>
</template>

<script>

export default {
	name: 'layout',
	props:['page'],
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

<style scoped>
	.warning-row {
	    background: oldlace;
	}
	.success-row {
	    background: #f0f9eb;
	}
</style>
