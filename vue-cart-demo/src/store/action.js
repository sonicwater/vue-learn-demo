export default {
	addToCart({ commit },product) {
		commit('ADD_TO_CART',{
            id:product.id
        })
	},
}