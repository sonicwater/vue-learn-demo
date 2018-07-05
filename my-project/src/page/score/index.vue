<template>
  	<div>
        <header>
        	<span>{{score}}</span>
        	<span>分！</span>
        </header>
        <div>{{scoreTips}}</div>
  	</div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    name: 'score',
    data(){
        return{
            showHide: false, //是否显示提示
            score: 0, //分数
            scoreTips:'', //分数提示
            rightAnswer: [2, 7, 12, 13, 18], //正确答案
            scoreTipsArr:['这是个文盲啊！','不及格','刚好及格','一步之遥','出来见上帝！'],
        }
    },
    computed: mapState(['answerid']),
    created(){
        this.computedScore();
        this.getScoreTip();
    },
    methods: {
        //计算分数
        computedScore(){
            this.answerid.forEach((item, index) => {
                if (item == this.rightAnswer[index]) {
                    this.score += 20;
                }
            })
        },
        //根据分数显示提示
        getScoreTip: function (){
            if(this.score <= 20) {
                this.scoreTips = this.scoreTipsArr[0];
                return
            }
            if(this.score <= 40) {
                this.scoreTips = this.scoreTipsArr[1];
                return
            }
            if(this.score <= 60) {
                this.scoreTips = this.scoreTipsArr[2];
                return
            }
            if(this.score <= 80) {
                this.scoreTips = this.scoreTipsArr[3];
                return
            }
            if(this.score <= 100) {
                this.scoreTips = this.scoreTipsArr[4];
            }
        }
    },
}

</script>

<style>
</style>
