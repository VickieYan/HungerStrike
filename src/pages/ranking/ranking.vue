<template>
	<div class="rankingWrap">
		<Rankingtitle txt1="排名" txt2="图标"  txt3="名称" txt4="体验"></Rankingtitle>
		<Ranking :txt="firstData.title" num=1 bol=1 id=1>
			<img :src="firstData.iconURL" height="70" width="70" slot="icon" class="icon">
			<img src="../../assets/images/crown.png" height="24" width="41" slot="ranking" class="pic">
		</Ranking>
		<Ranking :txt="val.title" :num='index+2' :bol='index+2' v-for='(val,index) in arrData' :id=val.id>
			<img :src="val.iconURL" height="70" width="70" slot="icon" class="icon">
		</Ranking>


	</div>
</template>
<script>
	import Rankingtitle from '../../components/rankingTitle.vue'
	import Ranking from '../../components/ranking.vue'
	export default{
		components:{
			Rankingtitle,
			Ranking
		},
		data:function(){
			return{
				firstData:[],
				arrData:[]
			}
		},
		mounted:function(){
			var _this = this;
			this.axios.get("../../static/json/application.json").then(function(res){
				_this.arrData = res.data.slice(1);
				_this.firstData = res.data.slice(0,1)[0];
			})
		},
	}
</script>