<template>
	<div class="categoryitem" @click='fn1'>
		<slot name='img'></slot>
		<slot name='txt'></slot>
	</div>
</template>
<script>
export default {
  methods: {
    fn1: function() {
      this.$router.push("/morefresh");
    }
  }
};
</script>
<style>
.categoryitem {
  float: left;
  width: 33%;
  height: 1rem;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  margin: 0;
  vertical-align: top;
  position: relative;
}
.categoryitem img {
  width: 0.35rem;
  height: 0.35rem;
  position: absolute;
  left: 50%;
  margin-left: -0.175rem;
  top: 0.15rem;
}
.categoryitem span {
  font-size: 0.12rem;
  position: absolute;
  left: 50%;
  margin-left: -0.12rem;
  top: 0.65rem;
}
</style>
