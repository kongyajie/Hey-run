<template>
  <div id="app">

    <div class="header">
      <Button @click="save">运行</Button>
    </div>

    <div class="main">
      <!-- 代码编辑器 -->
      <codePage ref="codePage"></codePage>

      <!-- 预览区域 -->
      <previewPage ref="previewPage" :code="code"></previewPage>
    </div>
    
  </div>
</template>

<script>

import previewPage from 'components/preview'
import codePage from 'components/code'

export default {
  components: {
    previewPage,
    codePage
  },
  data() {
    return {
      code: '',
    };
  },
  mounted() {
    let code = 
`<template>
	<div class="test">
			{{ msg }}
	</div>
</template>

<script>
export default {
	data () {
		return {
				msg: 'HelloWorld'
		}
	},
	methods: {
	
	},
	mounted () {
	
	}
}
<\/script>

<style>
	.test {
			color: red;
	}
</style>`;
    setTimeout(() => {
      this.$refs.codePage.setValue(code);
      this.save();
    },100)
  },
  methods: {
    save() {
      this.code = this.$refs.codePage.getValue();
    },
  }
};
</script>

<style lang="less">
.header {
  width: 100%;
  height: 50px;
  padding: 0 40px;
  position: fixed;
  top: 0;
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
  font-size: 14px;
  display: flex;
  align-items: center;
  z-index: 1000;
}
.main {
  display: flex;
  margin-top: 50px;
}
.code-vue {
  flex: 1;
}
.preview-vue {
  flex: 1;
}
.CodeMirror {
  height: 100%;
}
</style>
