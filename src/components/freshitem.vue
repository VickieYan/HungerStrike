<template>
	<div class="freshitem" @click='fn1'>
		<div class="txt">
			<slot name='title'></slot>
			<slot name='content'></slot>
		</div>
		<slot name='image'></slot>
		<div class="score"><slot name='score'></slot>分</div>
	</div>
</template>
<style>
.freshitem {
  border: 0.01rem solid #eee;
  height: 0.75rem;
  width: 100%;
  border-radius: 0.05rem;
  text-align: left;
  position: relative;
  margin-bottom: 0.1rem;
}
.freshitem h3 {
  font-size: 0.14rem;
  font-weight: normal;
  float: left;
  line-height: 0.16rem;
  height: 0.16rem;
  color: black;
  width: 100%;
  padding-bottom: 0.05rem;
}
.freshitem p {
  font-size: 0.12rem;
  font-weight: normal;
  float: left;
  line-height: 0.18rem;
  height: 0.18rem;
  color: #666;
  width: 50%;
}
.freshitem img {
  position: absolute;
  height: 0.55rem;
  width: 0.55rem;
  top: 0.12rem;
  left: 0.12rem;
  border-radius: 0.05rem;
}
.freshitem .txt {
  margin: 0.1rem 0.8rem;
  width: 100%;
  height: 0.6rem;
  overflow: hidden;
}
.freshitem .score {
  font-size: 0.3rem;
  position: absolute;
  right: 0.1rem;
  top: 0.18rem;
  color: #ffa200;
}
</style>
<script>
export default {
  props: ["id"],
  methods: {
    fn1: function() {
      this.$router.push({
        name: "Appdetail",
        params: {
          id: this.id
        }
      });
    }
  }
};
</script>