<template>
	<div>
		<div class="header" @click='fn1'>
			<div class="wrap">
				<span>{{txt}}</span>
				<div class="pic1"><slot name='pic1'></slot></div>
				<div class="pic2" @click='fn2'><slot name='pic2'></slot></div>
			</div>
		</div>
		<!-- <Banner  swipeid='swipeid01'>
			<div class="swiper-slide" slot='swiper-con'>
				<img src="../assets/images/banner1.jpg" height="300" width="750"/>
			</div>
			<div class="swiper-slide" slot='swiper-con'>
				<img src="../assets/images/banner2.png" height="300" width="750"/>
			</div>
			<div class="swiper-slide" slot='swiper-con'>
				<img src="../assets/images/banner3.png" height="300" width="750"/>
			</div>
			<div class="swiper-slide" slot='swiper-con'>
				<img src="../assets/images/banner4.jpg" height="300" width="750"/>
			</div>
		</Banner>
		<Information txt1="测评" txt2="资讯"></Information>
		<RankingTitle txt1="排名" txt2="图标"  txt3="名称" txt4="体验" ></RankingTitle>
		<Ranking txt="天天酷跑" num=1 bol=1>
			<img src="../assets/images/jk.png" height="70" width="70" slot="icon" class="icon">
			<img src="../assets/images/crown.png" height="24" width="41" slot="ranking" class="pic">
		</Ranking>
		<Ranking txt="小船群约" num=2 bol=2>
			<img src="../assets/images/sj1.jpg" height="100" width="99" slot="icon" class="icon">
			
		</Ranking>
		<Ranking txt="每日一签" num=3 bol=3>
			<img src="../assets/images/jx2.jpg" height="132" width="132" slot="icon" class="icon">
			
		</Ranking>
		<Ranking txt="享受生活" num=4 bol=4>
			<img src="../assets/images/life.png" height="70" width="70" slot="icon" class="icon">
			
		</Ranking>
		<Ranking txt="中式教育" num=5 bol=5>
			<img src="../assets/images/edu.png" height="70" width="70" slot="icon" class="icon">
			
		</Ranking> -->
	</div>
</template>
<script type="text/javascript">
	import Banner from './banner'
	import Information from './information'
	import RankingTitle from './rankingTitle'
	import Ranking from './ranking'
	export default{
		props:['txt'],
		components:{
			Banner,
			Information,
			RankingTitle,
			Ranking
		},
		methods:{
			fn1:function(){
				this.$router.push('/');
				this.$emit('reset')
			},
			fn2:function(ev){
				this.$router.push('/search');
				ev.cancelBubble = true;
			}
		}
	}
</script>
<style type="text/css">
	.header{text-align: center;line-height: 0rem;border-bottom: .01rem solid #eee;background: white;position: fixed;top: 0;width: 100%;z-index: 100;}
	.header .wrap{padding:.08rem;}
	.header img{width: 100%;height: 100%;}
	.header .pic1{width: 1.2rem;margin: 0 auto;}
	.header .pic2{width: .2rem;position: absolute;right: .15rem;top: 0;}
	.header span{font-size: .2rem}
	
</style>
