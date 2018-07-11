<template>
	<div>
		<el-table :data="cartProducts" style="width: 100%">
		    <el-table-column prop="id" label="商品ID" width="180"></el-table-column>
		    <el-table-column prop="name" label="商品名称" width="180"></el-table-column>
		    <el-table-column prop="num" label="数量" width="180"></el-table-column>
		    <el-table-column prop="price" label="单价" width="180"></el-table-column>
		    <el-table-column prop="total_num" label="总价" width="180"></el-table-column>
		    <el-table-column label="操作">
		    	<template slot-scope="scope">
			        <el-button type="primary" icon="el-icon-delete" size="mini" @click="dialogVisibleTrue( scope.row )">删除</el-button>
			        <!--@click="delProduct( scope.row )"-->
			    </template>
		    </el-table-column>
		</el-table>

		<el-dialog title="注意" :visible.sync="dialogVisible" width="20%">
		  	<span>确定要删除这个商品吗?</span>
		  	<span slot="footer" class="dialog-footer">
		    	<el-button @click="dialogVisible = false">取 消</el-button>
		    	<el-button type="primary" @click="dialogSure">确 定</el-button>
		  	</span>
		</el-dialog>
	</div>
  	
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
	name: 'cart',
  	data() {
		return {
			dialogVisible : false,
			result : null
		}
	},
	computed:{
		...mapGetters([
			'cartProducts'
		])
	},
	methods: {
		...mapActions(['delProduct']),
		dialogVisibleTrue( data ){
			this.dialogVisible = true;
			this.result = data;
		},
		dialogSure(){
			this.delProduct( this.result );
        	this.dialogVisible = false;
      	}
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
