const code = 
`<style lang="less">
.button1-demo-vue{
  .buttons{
    >.h-btn, >.h-btn-group {
      margin-bottom: 10px;
    }
  }
}
</style>

<template>
  <div class="button1-demo-vue">
    <h4>欢迎</h4>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        loading1:false,
        loading2:false
      }
    }
  }
</script>`

export default code;