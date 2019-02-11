export default `<template>
<p>
  <button class='h-btn' @click="vueinfo()">Vue 调用提示</button>
</p>
</template>

<script>
  
export default {
methods: {
  vueinfo() {
    this.$Message('这是一个普通的提醒');
  },
}
}
</script>`