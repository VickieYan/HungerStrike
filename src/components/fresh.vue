<template>
	<div class="fresh">
		<div class="title">
			<h3>新鲜测评</h3>
			<p @click='fn1'>显示全部 ›</p>
		</div>
		<div class="main" v-for="(val,index) in arrData">
			<Item :id="val.id">
				<h3 slot='title'>{{val.title}}</h3>
				<p slot='content'>{{val.discribe}}</p>
				<img :src="val.iconURL" slot = 'image'>
				<span slot='score'>{{val.score}}</span>
			</Item>
		</div>
	</div>
</template>
<script>
import Item from "./freshitem.vue";

export default {
  components: {
    Item
  },
  data: function() {
    return {
      arrData: []
    };
  },
  mounted: function() {
    var _this = this;
    this.axios.get("../../static/json/application.json").then(function(res) {
      _this.arrData = res.data.slice(0, 3);
    });
  },
  methods: {
    fn1: function() {
      this.$router.push("/morefresh");
    }
  }
};
</script>
<style>
.fresh {
  width: 100%;
  background: white;
  font-family: "microsoft YaHei";
  margin-bottom: 0.1rem;
}
.fresh .title {
  padding: 0.16rem;
  border-bottom: 0.01rem solid #eee;
  overflow: hidden;
}
.fresh .title h3 {
  font-size: 0.14rem;
  font-weight: normal;
  float: left;
  line-height: 0.1rem;
  height: 0.1rem;
  color: black;
}
.fresh .title p {
  font-size: 0.14rem;
  font-weight: normal;
  float: right;
  line-height: 0.1rem;
  height: 0.1rem;
  color: black;
  color: #808080;
}
.fresh .main {
  padding: 0.16rem;
}
</style>