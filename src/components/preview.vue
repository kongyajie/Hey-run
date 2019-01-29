<template>
	<!-- 效果预览 -->
	<div class="preview-vue">
		<div id="preview" ref="display"></div>
	</div>
</template>

<script>

import Vue from "vue";

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
    splitCode: function() {
      var e = this.getSource(this.code, "script").replace(
          /export default/,
          "return "
        ),
        t = this.getSource(this.code, "style"),
        n =
          '<div id="appShow">' +
          this.getSource(this.code, "template") +
          "</div>";
      (this.js = e), (this.css = t), (this.html = n);
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
      if ((this.splitCode(), "" !== this.html && "" !== this.js)) {
        var e = new Function(this.js)();
        e.template = this.html;
        var t = Vue.extend(e);
        if (
          ((this.component = new t().$mount()),
          this.$refs.display.appendChild(this.component.$el),
          "" !== this.css)
        ) {
          var n = document.createElement("style");
          (n.type = "text/css"),
            (n.id = this.id),
            (n.innerHTML = this.css),
            document.getElementsByTagName("head")[0].appendChild(n);
        }
      }
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
}
</style>