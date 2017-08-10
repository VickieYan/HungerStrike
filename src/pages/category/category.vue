<template>
	<div class="category">
		<Categoryitem>
			<img src="../../assets/images/all.png" slot='img' alt="">
			<span slot='txt'>全部</span>
		</Categoryitem>
		<Categoryitem>
			<img src="../../assets/images/sj.png" slot='img' alt="">
			<span slot='txt'>社交</span>
		</Categoryitem>
		<Categoryitem>
			<img src="../../assets/images/music.png" slot='img' alt="">
			<span slot='txt'>音乐</span>
		</Categoryitem>
		<Categoryitem>
			<img src="../../assets/images/cx.png" slot='img' alt="">
			<span slot='txt'>出行</span>
		</Categoryitem>
		<Categoryitem>
			<img src="../../assets/images/lv.png" slot='img' alt="">
			<span slot='txt'>旅游</span>
		</Categoryitem>
		<Categoryitem>
			<img src="../../assets/images/ty.png" slot='img' alt="">
			<span slot='txt'>体育</span>
		</Categoryitem>
		<Categoryitem>
			<img src="../../assets/images/video.png" slot='img' alt="">
			<span slot='txt'>视频</span>
		</Categoryitem>
		<Categoryitem>
			<img src="../../assets/images/read.png" slot='img' alt="">
			<span slot='txt'>阅读</span>
		</Categoryitem>
		<Categoryitem>
			<img src="../../assets/images/shop.png" slot='img' alt="">
			<span slot='txt'>购物</span>
		</Categoryitem>
		<Categoryitem>
			<img src="../../assets/images/money.png" slot='img' alt="">
			<span slot='txt'>金融</span>
		</Categoryitem>
		<Categoryitem>
			<img src="../../assets/images/edu.png" slot='img' alt="">
			<span slot='txt'>教育</span>
		</Categoryitem>
		<Categoryitem>
			<img src="../../assets/images/pic.png" slot='img' alt="">
			<span slot='txt'>图片</span>
		</Categoryitem>
		<Categoryitem>
			<img src="../../assets/images/gj.png" slot='img' alt="">
			<span slot='txt'>工具</span>
		</Categoryitem>
		<Categoryitem>
			<img src="../../assets/images/life.png" slot='img' alt="">
			<span slot='txt'>生活</span>
		</Categoryitem>
		<Categoryitem>
			<img src="../../assets/images/jk.png" slot='img' alt="">
			<span slot='txt'>健康</span>
		</Categoryitem>
		<Categoryitem>
			<img src="../../assets/images/my.png" slot='img' alt="">
			<span slot='txt'>母婴</span>
		</Categoryitem>
		<Categoryitem>
			<img src="../../assets/images/bg.png" slot='img' alt="">
			<span slot='txt'>办公</span>
		</Categoryitem>
	</div>
</template>
<script>
	import Categoryitem from '../../components/categoryltem.vue';
	export default{
		components:{
			Categoryitem
		}
	}
</script>