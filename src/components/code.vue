<template>
	<!-- 代码编辑 -->
	<div class="code-vue">
		<textarea class="form-control" id="code"></textarea>
	</div>
</template>

<script>

import CodeMirror from "codemirror/lib/codemirror.js";

export default {
  data() {
    return {
      myCodeMirror: null,
			value: '',
    };
	},
	
	mounted() {
		this.initCode();
// 		setTimeout(() => {
// 			this.setValue(				
// `<template>
// 	<div class="test">
// 			{{ msg }}
// 	</div>
// </template>

// <script>
// export default {
// 	data () {
// 		return {
// 				msg: 'HelloWorld'
// 		}
// 	},
// 	methods: {
	
// 	},
// 	mounted () {
	
// 	}
// }
// <\/script>

// <style>
// 	.test {
// 			color: red;
// 	}
// </style>`)
// 		},100);
		
	},
  
  methods: {
		initCode() {
			var myCodeMirror = CodeMirror.fromTextArea(document.getElementById("code"), {
				mode: "htmlmixed", // 支持 vue
				lineNumbers: true, //显示行号
				theme: "dracula", //设置主题
				lineWrapping: true, //代码折叠
				foldGutter: true,
				gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
				matchBrackets: true //括号匹配
				//readOnly: true,        //只读
			});
			// myCodeMirror.setSize("400px", "600px"); //设置代码框的长宽

			this.myCodeMirror = myCodeMirror;
		},
		getValue() {
				return this.myCodeMirror ? this.myCodeMirror.getValue() : ""
		},
		setValue(value) {
				this.myCodeMirror.setValue(value)
		},
		handleRun: function() {
				this.value = this.getValue();
		},
	}
};
</script>

<style lang="less">
.code-vue {
}
</style>