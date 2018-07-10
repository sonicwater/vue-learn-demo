export default {

	addToCart({ commit },product) {
		commit('ADD_TO_CART',{
            id:product.id
        })
	},

	//删除购物车的指定的商品
    delProduct({commit},product){
        commit('DELETE',product)
    },
}