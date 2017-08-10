<template>
	<div class="spacial">
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
		<Specialitem v-for='val in arrData' :id='val.id'>
			<img :src="val.imgURL" slot='img' alt="">
		</Specialitem>
	</div>
</template>
<script>
	import Banner from'../../components/banner.vue'
	import Specialitem from'../../components/specialitem.vue'
	export default{
		components:{
			Specialitem,
			Banner
		},
		data:function(){
			return{
				arrData:[]
			}
		},
		mounted:function(){
			var _this = this;
			this.axios.get("../../static/json/comment.json").then(function(res){
				_this.arrData = res.data.slice(3,16);
			})
		},
	}
</script>