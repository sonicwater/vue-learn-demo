<template>
  	<div>
  		<el-container>
		  	<el-aside width="200px">
		  		<el-menu router :default-active="$route.path" class="el-menu-vertical-demo nav">
		      		<el-menu-item index="/">
			        	<i class="el-icon-menu"></i>
			        	<span slot="title">home</span>
			      	</el-menu-item>
			      	<el-menu-item index="/cart">

			        	<i class="el-icon-goods"></i>
			        	<span slot="title">
			        		cart
			        		<el-badge class="mark" v-if="numTotal>0" :value="numTotal" />
			        	</span>
			        	
			        	
			      	</el-menu-item>
			    </el-menu>
		  	</el-aside>
		  	<el-main>
		  		<span v-if="page == 'home'">商品列表</span>
		  		<span v-if="page == 'cart'">购物车</span>
				<el-table v-if="page == 'home'" :data="goodList" style="width: 100%" :row-class-name="tableRowClassName">
				    <el-table-column prop="id" label="商品ID" width="180"></el-table-column>
				    <el-table-column prop="name" label="商品名称" width="180"></el-table-column>
				    <el-table-column prop="price" label="单价" width="180"></el-table-column>
				    <el-table-column label="操作">
				    	<template slot-scope="scope">
					        <el-button type="primary" size="mini" @click="addToCart(scope.$index, scope.row)">加入购物车</el-button>
					    </template>
				    </el-table-column>
				</el-table>
		  	</el-main>
		</el-container>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
	name: 'layout',
	props:['page'],
  	data() {
		return {
			
		}
	},
	computed:{
		...mapState({
			goodList : state => state.goodList
		}),
		numTotal () {
	    	return this.$store.state.numTotal 
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
	    },
	    addToCart(value) {
        	console.log(value);
      	}
    },
    created(){
        
    },
    mounted(){
        console.log(this.goodList)
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
