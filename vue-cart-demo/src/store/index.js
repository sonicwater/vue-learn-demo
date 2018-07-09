import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
Vue.use(Vuex);


const state = {
    good_list: [{
        id: '1',
        name: '护手霜',
        price: 9.9
    }, {
        id: '2',
        name: '植物精华',
        price: 12.8
    }, {
        id: '3',
        name: '洁面乳',
        price: 3.9
    }, {
        id: '4',
        name: '保湿水',
        price: 5.6
    }],
    //添加到购物车的商品
    added:[]
}

const getters = {

    //商品列表
    goodList : state => state.good_list,

    //购物车的列表
    cartProducts:state=>{
        return state.added.map(({id,num})=>{
            let product = state.good_list.find(n=>n.id == id)
            // console.info('product',product)
            return {
                ...product,
                num
            }
        })
    },

    //计算总数量
    totalNum:(state,getters)=>{
        let total = 0;
        getters.cartProducts.forEach(n=>{
            total += n.num
        })
        return total;
    },
}

export default new Vuex.Store({
	state,
    getters,
	actions,
	mutations
})





