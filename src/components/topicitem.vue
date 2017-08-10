<template>
	<div class="topicitem">
		<Carousel swiperid="swiper03" :loopedSlides="arrData.length" :loop="false" slidesPerView="auto" :autoplay='0'>
			<div class='swiper-slide' slot='swiper-con' v-for='val in arrData'>
				<img :src="val.imgURL" @click='fn1(val.id)'>
			</div>
		</Carousel>
	</div>
</template>
<script>
	import Carousel from '../components/carousel.vue'
	export default{
		data:function(){
			return{
				arrData:[]
			}
		},
		components:{
			Carousel
		},
		mounted:function(){
			var _this = this;
			this.axios.get("../../static/json/comment.json").then(function(res){
				_this.arrData = res.data;
			})
		},
		methods:{
			fn1:function(index){
				this.$router.push({
					name:'Commentdetail',
					params:{
						id:index
					}
				})
			}
		}
	}
</script>
<style>
	.topicitem{margin-bottom: .1rem;}
	.topicitem .swiper03 .swiper-slide{width: 1.5rem; margin-right: .1rem}
	.topicitem .swiper03{width: 100%;height: 1rem;overflow: hidden;}
	.topicitem .swiper03 img{ width: 1.5rem;height: .8rem;float: left;border-radius: .05rem;}
	.topicitem .active{background: white}
	.topicitem .swiper-pagination-bullet{background: white}
</style>