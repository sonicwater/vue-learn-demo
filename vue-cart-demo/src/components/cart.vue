<template>
  	<el-table :data="cartProducts" style="width: 100%">
	    <el-table-column prop="id" label="商品ID" width="180"></el-table-column>
	    <el-table-column prop="name" label="商品名称" width="180"></el-table-column>
	    <el-table-column prop="num" label="数量" width="180"></el-table-column>
	    <el-table-column prop="price" label="单价" width="180"></el-table-column>
	    <el-table-column label="操作">
	    	<template slot-scope="scope">
		        <el-button type="primary" size="mini" @click="delProduct( scope.row )">删除</el-button>
		    </template>
	    </el-table-column>
	</el-table>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
	name: 'cart',
  	data() {
		return {
			
		}
	},
	computed:{
		...mapGetters([
			'cartProducts'
		])
	},
	methods: {
		...mapActions(['delProduct'])
    },
    created(){
        
    },
    mounted(){
        // console.log(this.totalPrice)
    }
}
</script>

<style scoped>
</style>
