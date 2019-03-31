<template>
  <div class="menu">
    <!-- 菜单 -->
    <div class="title" @click="backToHome">{{inlineCollapsed ? 'H' : 'HEYUI RUN'}}</div>
    <div class="menu-demo-1-vue" :style="{width: inlineCollapsed?'70px':'250px'}">
      <Menu
        :datas="data"
        className="h-menu-white"
        :inlineCollapsed="inlineCollapsed"
        ref="menu"
        @select="triggerSelect"
      ></Menu>
    </div>
  </div>
</template>

<script>

import config from 'js/menuConfig';

export default {
  props: {
    // 菜单收缩/扩张
    inlineCollapsed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      accordion: false,
      key: '',
      sourcecode: '',
      data: config,
    };
  },
  created() {
    this.updateCode(this.data[0]); // 默认展示第一个demo
  },
  methods: {
    select(key) {
      this.$refs.menu.select(key);
    },
    triggerSelect(menu) {
      this.updateCode(menu);
    },
    updateCode(menu) {
      this.key = menu.key || 'welcome';
      this.codeUrl = menu.codeUrl;
      if(this.codeUrl) {
        this.sourcecode = require(`../js/codes/${this.codeUrl}`).default;
        this.$emit('menuChanged',this.sourcecode);
      }
    },
    backToHome() {
    }
  }
};
</script>

<style lang="less">
.menu {
  .title {
    line-height: 60px;
    font-weight: 100;
    font-size: 30px;
    font-family: Dosis,Source Sans Pro,Helvetica Neue,Arial,sans-serif;
    color: #45b984;
    cursor: pointer;
    text-decoration: none;
    outline: none;
    transition: color .2s ease;
    padding-left: 26px;
  }
  .menu-demo-1-vue{
    transition: 0.2s width cubic-bezier(0.01, 0.71, 0.54, 1);
  }
}
</style>


