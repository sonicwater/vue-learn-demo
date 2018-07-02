<template>
  	<div>
    	  <!-- <itemcontainer father-component="item"></itemcontainer> -->
        <div id="example">
          <p>Original message: "{{ message }}"</p>
          <p>Computed reversed message: "{{ reversedMessage }}"</p>
        </div>
  	</div>
</template>

<script>
// import itemcontainer from '../../components/itemcontainer'

export default {
	  name: 'item',
  	data: {
      message: 'Hello'
    },
    computed: {
      // 计算属性的 getter
      reversedMessage: function () {
        // `this` 指向 vm 实例
        return this.message.split('').reverse().join('')
      }
    }
}

</script>

<style>
    

</style>
