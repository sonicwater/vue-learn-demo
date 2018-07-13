export default {

	addToCart({ commit },product) {
		commit('ADD_TO_CART',{
            id:product.id
        })
	},

    numChange({ commit },value,product) {
        commit('NUM_CHANGE',{
            id:product.id
        })
    },

	//清除购物车
    clearAllCart({commit}){
        commit('CLEAR')
    },

	//删除购物车的指定的商品
    delProduct({commit},product){
        commit('DELETE',product)
    },
}