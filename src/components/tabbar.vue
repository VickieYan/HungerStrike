<template>
	<div class="tabbar">
		<Item mark=1 :checked='checked' @setVal='fn1'>
			<img src="../assets/images/icon.png" slot='pic'>
			<img src="../assets/images/icon_green.jpg" slot='pic2'>
			<span slot='name'>测评</span>
		</Item>
		<Item mark=2 :checked='checked' @setVal='fn1'>
			<img src="../assets/images/icon1.png" slot='pic'>
			<img src="../assets/images/icon1_green.jpg" slot='pic2'>
			<span slot='name'>专题</span>
		</Item>
		<Item mark=3 :checked='checked' @setVal='fn1'>
			<img src="../assets/images/icon2.png" slot='pic'>
			<img src="../assets/images/icon2_green.jpg" slot='pic2'>
			<span slot='name'>排行榜</span>
		</Item>
		<Item mark=4 :checked='checked' @setVal='fn1'>
			<img src="../assets/images/icon3.png" slot='pic'>
			<img src="../assets/images/icon3_green.jpg" slot='pic2'>
			<span slot='name'>类别</span>
		</Item>
	</div>
</template>
<script>
import Item from "./tabbaritem.vue";
export default {
  components: {
    Item
  },
  props: ["selected"],
  data: function() {
    return {
      checked: 0
    };
  },
  methods: {
    fn1: function(val) {
      this.checked = val;
    }
  },
  watch: {
    selected: function(newVal, oldVal) {
      this.checked = newVal;
      this.$emit("change");
    }
  }
};
</script>
<style>
.tabbar {
  width: 100%;
  height: 0.56rem;
  box-shadow: 0 0 0.2rem #ccc;
  position: fixed;
  bottom: 0;
  padding-top: 0.07rem;
  z-index: 100;
  background: white;
  opacity: 0.95;
  text-align: center;
}
</style>