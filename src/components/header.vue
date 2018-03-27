<template>
	<div>
		<div class="header" @click='fn1'>
			<div class="wrap">
				<span>{{txt}}</span>
				<div class="pic1"><slot name='pic1'></slot></div>
				<div class="pic2" @click='fn2'><slot name='pic2'></slot></div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import Banner from "./banner";
import Information from "./information";
import RankingTitle from "./rankingTitle";
import Ranking from "./ranking";
export default {
  props: ["txt"],
  components: {
    Banner,
    Information,
    RankingTitle,
    Ranking
  },
  methods: {
    fn1: function() {
      this.$router.push("/");
      this.$emit("reset");
    },
    fn2: function(ev) {
      this.$router.push("/search");
      ev.cancelBubble = true;
    }
  }
};
</script>
<style type="text/css">
.header {
  text-align: center;
  line-height: 0rem;
  border-bottom: 0.01rem solid #eee;
  background: white;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
}
.header .wrap {
  padding: 0.08rem;
}
.header img {
  width: 100%;
  height: 100%;
}
.header .pic1 {
  width: 1.2rem;
  margin: 0 auto;
}
.header .pic2 {
  width: 0.2rem;
  position: absolute;
  right: 0.15rem;
  top: 0;
}
.header span {
  font-size: 0.2rem;
}
</style>
