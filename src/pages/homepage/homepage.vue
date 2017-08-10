<template>
	<div class="homepage">
	    <Banner  swipeid='swipeid01'>
			<div class="swiper-slide" slot='swiper-con' >
				<img src="../../assets/images/banner1.jpg" height="300" width="750"/>
			</div>
			<div class="swiper-slide" slot='swiper-con'>
				<img src="../../assets/images/banner2.png" height="300" width="750"/>
			</div>
			<div class="swiper-slide" slot='swiper-con'>
				<img src="../../assets/images/banner3.png" height="300" width="750"/>
			</div>
			<div class="swiper-slide" slot='swiper-con'>
				<img src="../../assets/images/banner4.jpg" height="300" width="750"/>
			</div>
		</Banner>
		<Fresh></Fresh>
		<Topic></Topic>
		<Homelist txt='每日精选'></Homelist>
	</div>
</template>
<script>
	import Banner from '../../components/banner.vue';
	import Fresh from '../../components/fresh.vue';
	import Topic from '../../components/topic.vue';
	import Homelist from '../../components/homelist.vue';
	export default{
		components:{
			Banner,
			Fresh,
			Topic,
			Homelist
		}
	}
</script>