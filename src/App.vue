<template>
  <div id="app" :class="{'collapsed' : inlineCollapsed}">

    <!-- 左侧菜单 -->
    <Menu class="left" :inlineCollapsed="inlineCollapsed" @menuChanged="menuChanged"></Menu>

    <!-- 右侧内容 -->
    <div class="right">

      <!-- 头部 -->
      <div class="header">
        <i class="h-icon-menu" @click="inlineCollapsed = !inlineCollapsed"></i>
        <Button @click="save">运行</Button>
      </div>

      <!-- 主体 -->
      <div class="main">
        <!-- 代码编辑器 -->
        <Code ref="codePage"></Code>

        <!-- 预览区域 -->
        <Preview ref="previewPage" :code="code"></Preview>
      </div>
    </div>
    
  </div>
</template>

<script>

import Menu from 'components/menu'
import Preview from 'components/preview'
import Code from 'components/code'

export default {
  components: {
    Menu,
    Preview,
    Code,
  },
  data() {
    return {
      code: '',
      inlineCollapsed: false,
    };
  },

  mounted() {
    document.addEventListener("keydown", e => {
        //可以判断是不是mac，如果是mac,ctrl变为花键
        //event.preventDefault() 方法阻止元素发生默认的行为。
        if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
            e.preventDefault();
            // Process event...
            this.save();
        }
    }, false);
  },
  methods: {
    save() {
      this.code = this.$refs.codePage.getValue();
    },
    menuChanged(code) {
      setTimeout(() => {
        this.$refs.codePage.setValue(code || '');
        this.save();
      },100)
    },
    handleEvent(event) {
      debugger
      if(event.keyCode === 83 && event.ctrlKey) {
        console.log('拦截到ctrl + s');
        this.save();
        event.preventDefault();
        event.returnValue = false;
        return false;
      }
    }
  }
};
</script>

<style lang="less">

// 菜单宽度
@menu_width: 250px;
@menu_width_collapsed: 70px;

#app {
  display: flex;
  &.collapsed {
    .left {
      width: @menu_width_collapsed;
    }
    .right {
      padding-left: @menu_width_collapsed;
    }
    .main {
      padding-left: @menu_width_collapsed;
    }
    .header {

    }
  }
}
.left {
  position: absolute;
  width: @menu_width;
  height: 100%;
  background: white;
  z-index: 1;
  transition: 0.2s width cubic-bezier(0.01, 0.71, 0.54, 1);
}
.right {
  flex: 1;
  padding-left: @menu_width;
}

.header {
  width: 100%;
  height: 50px;
  padding: 0 20px;
  position: fixed;
  top: 0;
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
  font-size: 14px;
  display: flex;
  align-items: center;
  z-index: 1000;
  .h-icon-menu {
    cursor: pointer;
    margin-right: 20px;
  }
}
.main {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding-top: 50px;
  padding-left: @menu_width;
}
.code-vue {
  width: 50%;
}
.preview-vue {
  width: 50%;
  overflow: auto;
}
.CodeMirror {
  height: 100%;
}
</style>
