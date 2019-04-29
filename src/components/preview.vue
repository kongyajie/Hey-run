<template>
	<!-- 效果预览 -->
	<div class="preview-vue">
		<div id="preview" ref="display"></div>
	</div>
</template>

<script>

import Vue from "vue";
import Less from 'less';

export default {
  props: {
    code: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      id: "",
      js: "",
      css: "",
      html: "",
      component: null
		};
	},
	watch: {
    code: function() {
			this.destroyCode();
			this.renderCode();
    }
  },
  mounted() {
    
  },
  methods: {
    getSource: function(e, t) {
      var n = new RegExp("<" + t + "[^>]*>"),
        r = e.match(n);
      return r
        ? ((r = r[0]),
          e.slice(e.indexOf(r) + r.length, e.lastIndexOf("</" + t + ">")))
        : "";
    },
    splitCode: function(callback) {
      let e = this.getSource(this.code, "script").replace(/export default/,"return ");
      let t = this.getSource(this.code, "style");
      let n = '<div id="appShow" class="doc">' + this.getSource(this.code, "template") + "</div>";

      Less.render(t, {}).then(output => { // less => css
        t = output.css;

        this.js = e;
        this.css = t;
        this.html = n;

        callback && callback();
      });
    },
    r(e, t) {
      return (
        Object.keys(t).forEach(function(n) {
          e = e
            .replace(new RegExp("<" + n + "(\\W+)", "g"), "<" + t[n] + "$1")
            .replace(new RegExp("</" + n + ">", "g"), "</" + t[n] + ">");
        }),
        e
      );
    },
    renderCode: function() {
      this.destroyCode();
      this.splitCode(() => {
        if (this.html !== "" && this.js !== "") {
          var vueObj = new Function(this.js)();
          vueObj.template = this.html;
          var newVue = Vue.extend(vueObj);
          this.component = new newVue().$mount();
          this.$refs.display.appendChild(this.component.$el)

          if (this.css !== "") {
            let styleDom = document.getElementById('style_test');
            if(!styleDom) {
              styleDom = document.createElement("style");
              styleDom.rel = "stylesheet/less";
              styleDom.type = "text/css";
              styleDom.id = 'style_test';
              document.getElementsByTagName("head")[0].appendChild(styleDom);
            }
            styleDom.innerHTML = this.css;
          }
        }
      })
      
    },
    destroyCode: function() {
      var e = document.getElementById(this.id);
      e && e.parentNode.removeChild(e),
        this.component &&
          (this.$refs.display.removeChild(this.component.$el),
          this.component.$destroy(),
          (this.component = null));
    }
  }
};
</script>

<style lang="less">
.preview-vue {
  padding: 10px;
  border-left: 1px solid #eee;
}
</style>