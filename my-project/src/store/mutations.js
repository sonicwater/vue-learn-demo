const ADD = 'ADD'
const JIAN = 'JIAN'

export default {
	//点击进入下一题
	[ADD](state, num) {
		state.num += num;
	},
	[JIAN](state, num) {
		state.num -= num;
	}
}