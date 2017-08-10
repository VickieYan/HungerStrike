<template>
	<div class="searchBox">
		<div class="wrap"><input type="text" placeholder="输入小程序名称..." @keyup='fn1' v-model='val'/></div>
		<div v-show='!bol'>
			<Item :id="val.id" v-for='val in resultData'>
				<h3 slot='title'>{{val.title}}</h3>
				<p slot='content'>{{val.discribe}}</p>
				<img :src="val.iconURL" slot = 'image'>
				<span slot='score'>{{val.score}}</span>
			</Item>
		</div>
		<ul v-show='bol'>
			<li v-for='val in example' @click='fn2(val.id)'>{{val.title}}</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	import Item from '../../components/freshitem.vue'
	export default{
		methods:{
			fn1:function(ev){
				if(ev.keyCode == 13){
					this.resultData = [];
					if(this.val == ''){
						return;
					}
					for(var i=0;i<this.arrData.length;i++){
						// if(this.arrData[i].title == this.val){
						// 	this.resultData=this.arrData[i];
						// }
						if(this.arrData[i].title.indexOf(this.val)!=-1){
							this.resultData.push(this.arrData[i]);
						}
					}
					this.bol = false;


				}
			},
			fn2:function(id){
				this.$router.push({
					name:'Appdetail',
					params:{
						id:id
					}
				})
			}
		},
		data:function(){
			return{
				arrData:[],
				resultData:[],
				example:[],
				val:'',
				bol:true
			}
		},
		mounted:function(){
			var _this = this;
			this.axios.get("../../static/json/application.json").then(function(res){
				_this.arrData = res.data;
				_this.example = res.data.slice(0,10);
			})
		},
		components:{
			Item
		}
	}
</script>
<style>
	.searchBox{text-align: center;}
	.searchBox .wrap{height: .5rem;}
	.searchBox input{width: 80%;padding: .08rem .1rem;border-radius: .04rem;border: none;margin:.1rem auto!important;vertical-align: top;}
	.searchBox ul{font-size: .15rem;color: #0db252;line-height: .3rem;padding-top: .8rem;}
</style>