export default {
	ADD_TO_CART(state,{id}) {
		let record = state.added.find(n=>n.id==id);
        if(!record){
            state.added.push({
                id,
                num:1
            })
        }else {
            record.num++
        }
	},
    //删除购物车的指定的商品
    DELETE(state,product){
        //console.info(state,product)
        state.added.forEach((n,i)=>{
            if(n.id == product.id){
                //console.info(11,n)
                //找到index的下标值
                state.added.splice(i,1)
            }
        })
    },
}