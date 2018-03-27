<template>
	<div @click='fn1' :class="{'tabbaritem':true,'ac':bol}">
		<span v-show='!bol'><slot name='pic'></slot></span>
		<span v-show='bol'><slot name='pic2'></slot></span>
		<br/>
		<slot name= 'name'></slot>
	</div>
</template>
<script>
export default {
  props: ["mark", "checked"],
  methods: {
    /*点击时切换颜色*/
    fn1: function() {
      //把该item的mark值传到父组件
      this.$emit("setVal", this.mark);
      //修改路径
      switch (this.mark) {
        case "1":
          this.$router.push("/evaluation/01");
          break;
        case "2":
          this.$router.push("/special");
          break;
        case "3":
          this.$router.push("/ranking");
          break;
        case "4":
          this.$router.push("/category");
          break;
      }
    }
  },
  computed: {
    bol: function() {
      return this.mark == this.checked;
    }
  }
};
</script>
<style>
.tabbaritem {
  width: 25%;
  font-size: 0.1rem;
  color: #666;
  line-height: 0.2rem;
  float: left;
}
.tabbaritem img {
  height: 0.3rem;
  width: 0.3rem;
}
.tabbar .ac {
  color: #0db252;
}
</style>
