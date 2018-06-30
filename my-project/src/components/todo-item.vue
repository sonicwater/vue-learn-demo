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
            todos: this.props
        }
    }
}
</script>

<style scoped>

</style>
