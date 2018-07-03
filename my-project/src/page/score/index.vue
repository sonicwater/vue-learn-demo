<template>
  	<div>

        <scoreComponent v-bind="post"></scoreComponent>
  	</div>
</template>

<script>
import scoreComponent from '../../components/score-component'
export default {
    name: 'score',
    data(){
        return{
            post: {
                id: 1,
                title: 'My Journey with Vue'
            }
        }
    },
    components:{
        scoreComponent,
    },
}

</script>

<style>
</style>
