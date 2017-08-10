<template>
    <div class="swiper-container" :class="swiperid">
      <div class="swiper-wrapper">
        <slot name="swiper-con"></slot>
      </div>
      <div :class="{'swiper-pagination': pagination}" :style="{'text-align': paginationDirection}"></div>
    </div>
</template>

<script>
import '../assets/libs/swiper/js/swiper.min.js'
  export default {
  props: {
    swiperid: {
      type: String,
      default: ""
    },
    effect: {
      type: String,
      default: "slide"
    },
    loop: {
      type: Boolean,
      default: true
    },
    diraction: {
      type: String,
      default: "horizontal"
    },
    autoplay: {
      type: Number,
      default: 5000
    },
    paginationType: {
      type: String,
      default: "bullets"
    },
    pagination: {
      type: Boolean,
      default: false
    },
    paginationDirection: {
      type: String,
      default: "center"
    },
    loopedSlides: {
      type: Number,
      default: 1
    },
    slidesPerView: {
      type: [Number, String],
      default: 1
    },
    observer: {//修改swiper自己或子元素时，自动初始化swiper
      type: Boolean,
      default: true
    },
    observeParents: {//修改swiper的父元素时，自动初始化swiper
      type: Boolean,
      default: true
    }
  },
  mounted: function () {
    var _this=this;
    new Swiper("."+_this.swiperid, {
      effect: _this.effect,
      loop: _this.loop,
      diraction: _this.diraction,
      autoplay: _this.autoplay,
      paginationType: _this.paginationType,
      pagination: "."+_this.swiperid+" .swiper-pagination",//避免第一个轮播出现多个分页器，和自己的子元素不符合
      paginationDirection: _this.paginationDirection,
      autoplayDisableOnInteraction: false,
      loopedSlides: _this.loopedSlides,
      slidesPerView: _this.slidesPerView,
      observer: _this.observer,
      observeParents: _this.observeParents
    });
  }
}
</script>

<style scoped>
  @import "../assets/libs/swiper/css/swiper.min.css";
  
</style>
