<template>
    <ol>
        <li>{{todos}}</li>
    </ol>
</template>

<script>
export default {
    name: 'todo-item',
    data(){
        return {
            todos: this.props[0]
        }
    },
    props: ['todo']
}
</script>

<style scoped>

</style>
