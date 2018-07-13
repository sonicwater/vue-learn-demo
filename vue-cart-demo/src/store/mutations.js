export default {

    //加入购物车
	ADD_TO_CART( state, {id} ) {
		let record = state.added.find( item => item.id == id );
        if(!record){
            state.added.push({
                id,
                num:1
            })
        }else {
            record.num++
        }
	},

    //购物车商品数量改变
    NUM_CHANGE( state, value, {id} ) {
        let record = state.added.find( item => item.id == id );
        record.num = value
    },

    //清除购物车
    CLEAR( state ){
        state.added = []
    },

    //删除购物车的指定的商品
    DELETE( state, product ){
        //console.info(state,product)
        state.added.forEach( ( item, index ) => {
            if( item.id == product.id ){
                //console.info( item )
                //找到index的下标值
                state.added.splice( index, 1 );
            }
        })
    },
}