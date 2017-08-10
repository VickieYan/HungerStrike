<template>
	<div class="morefresh">
			<div>
			  <!-- <p v-for="item in list">
			  <span v-text="item"></span>
			  </p> -->
			  
				<Item  v-for="(item,index) in list" :id='item.id'>
					<h3 slot='title'>{{item.title}}</h3>
					<p slot='content'>{{item.discribe}}</p>
					<img :src="item.iconURL" slot = 'image'>
					<span slot='score'>{{item.score}}</span>
				</Item>
			 <!--  <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">    </infinite-loading> -->
			</div>
	</div>
</template>
<script>
	import Item from '../components/freshitem.vue'
	import InfiniteLoading from 'vue-infinite-loading';
	export default{
		components:{
			Item,
			InfiniteLoading
		},
		data:function(){
			return{
				arrData:[],
				list: []
			}
		},
		mounted:function(){
			var _this = this;
			this.axios.get("../../static/json/application.json").then(function(res){
				_this.list = res.data;
			})
		},
		methods: {
		  // onInfinite() {
		  // 	console.log(11111+this.list)
		  //   setTimeout(() => {
		  //     const temp = [];
		  //     for (let i = this.list.length + 1; i <= this.list.length + 2; i++) {
		  //       temp.push(this.list[i]);
		  //     }
		  //     this.list = this.list.concat(temp);
		  //     this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
		  //   }, 1000);
		  // }
		
		}
	}
</script>