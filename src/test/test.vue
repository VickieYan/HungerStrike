<template>
	<div>
		<div class="test">
		test
	</div>
	<Carousel swiperid="swipe01" slidesPerView='auto' :loop='false' :autoplay=0 :loopedSlides=4>
		<div class="swiper-slide" slot="swiper-con"><img src="../assets/images/adv.gif"></div>
		<div class="swiper-slide" slot="swiper-con"><img src="../assets/images/adv.gif"></div>
		<div class="swiper-slide" slot="swiper-con"><img src="../assets/images/adv.gif"></div>
		<div class="swiper-slide" slot="swiper-con"><img src="../assets/images/adv.gif"></div>
	</Carousel>
	</div>
</template>
<script>
	import Carousel from './carousel.vue'
	export default{
		components:{
			Carousel
		}
	}
</script>