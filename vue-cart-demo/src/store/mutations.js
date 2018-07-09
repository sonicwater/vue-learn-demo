export default {
	ADD_TO_CART(state,{id}) {
		console.log("111"+JSON.stringify(state.added))
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
}