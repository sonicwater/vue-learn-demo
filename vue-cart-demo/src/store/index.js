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

    //计算总价
    totalPrice : ( state, getters ) => {
        let tp = 0;
        getters.goodList.forEach( ( item ) => {
            tp += parseFloat( item.price );
        })
        console.info('tp',tp);
        return tp
    },
}

export default new Vuex.Store({
	state,
    getters,
	actions,
	mutations
})





