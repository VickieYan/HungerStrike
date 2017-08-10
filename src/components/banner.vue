<template>
	<div class="banner">
		<div class="swiper-container" :class="swipeid">
			<div class="swiper-wrapper">
				<slot name="swiper-con"></slot>
			</div>
			<!-- 分页器 -->
			<div :class='{"swiper-pagination":pagination}' :style="{'text-align':paginationDirection}"></div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import '../assets/libs/swiper/js/swiper.min.js'
	export default{
		props: {
			swipeid: {
				type: String,
				default:''
			},
			effect: {
				type: String,
				default: 'slide'
			},
			loop: {
				type: Boolean,
				default: true
			},
			direction: {
				type: String,
				default: 'horizontal'
			},
			autoplay: {
				type: Number,
				default: 2000

			},
			paginationType: {
				type:String,
				default: 'bullets'
			},
			pagination: {
				type: Boolean,
				default: true
			},
			paginationDirection: {
				type: String,
				default: 'center'
			}	
		},
		mounted: function () {
			// body...
			var _this = this;
			new Swiper('.'+_this.swipeid,{
				//循环
				loop: _this.loop,
				//分页器
				pagination: '.swiper-pagination',
				//分页类型
				paginationType: _this.paginationType,
				//自动播放
				autoplay: _this.autoplay,
				//方向
				direction: _this.direction,
				//特效
				effect: _this.effect,
				//用户操作swiper之后，是否禁止autoplay
				autoplayDisableOnInteraction: false
			})
		}
	}
</script>
<style type="text/css">
	@import "../assets/libs/swiper/css/swiper.min.css";
	.banner .swiper-container{height: 1.5rem;margin-bottom: .1rem}
	.banner .swiper-container img{width: 3.75rem;height: 1.5rem;}
	.banner .swiper-pagination-bullet {background: white}
	.banner .swiper-pagination{bottom: -.1rem!important;}
</style>