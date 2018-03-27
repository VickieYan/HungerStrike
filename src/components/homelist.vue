<template>
	<div class="homelist">
		<div class="homelist-title">
			<span>{{ txt }}</span>
			<span style="float:right;font-size:.14rem;color:#808080;" @click='fn1'>显示全部<i style="font-style:nomal;font-size:.16rem;font-weight:bold;padding-left:.05rem;">></i></span>
		</div>
		
		<Carousel swiperid="swiper01" slidesPerView='auto' :loop='false' :autoplay='0' :loopedSlides='4'>
			<Homeitem slot="swiper-con" class='swiper-slide' v-for='val in arrData'>
				<slot name='one'></slot>
				<img :src="val.iconURL" class="item-img" slot='img'>
				<p slot='txt' class="item-p">{{val.title.slice(0,5)}}</p>
			</Homeitem>
		</Carousel>
		
	</div>
</template>
<script type="text/javascript">
import Homeitem from "./home-item";
import Carousel from "./carousel.vue";
export default {
  components: {
    Homeitem,
    Carousel
  },
  props: ["txt"],
  mounted: function() {
    var _this = this;
    this.axios.get("../../static/json/application.json").then(function(res) {
      _this.arrData = res.data.slice(4, 10);
    });
  },
  data: function() {
    return {
      arrData: []
    };
  },
  methods: {
    fn1: function() {
      this.$router.push("/morefresh");
    }
  }
};
</script>


<style type="text/css">
.homelist {
  width: 100%;
  height: 1.78rem;
  background: #fff;
  text-align: left;
  margin: 0.1rem 0;
}
.homelist-title {
  height: 0.37rem;
  border-bottom: 1px solid #efefef;
  line-height: 0.37rem;
  overflow: hidden;
  padding: 0 0.1rem;
}
.homelist-title span {
  font-size: 0.15rem;
  color: #000;
  float: left;
}
.homelist-wapper {
  height: 1.4rem;
  overflow: hidden;
  white-space: nowrap;
  padding: 0 0.1rem;
}
.homelist .swiper01 .swiper-slide {
  width: 0.76rem;
}
</style>