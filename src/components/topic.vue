<template>
	<div class="topic">
		<div class="title">
			<h3>专题推荐</h3>
			<p @click='fn1'>显示全部 ›</p>
		</div>
		<div class="main">
			<Item></Item>
		</div>
	</div>
</template>
<script>
	import Item from './topicitem.vue'
	export default{
		components:{
			Item
		},
		methods:{
			fn1:function(){
				this.$router.push('/special')
			}
		}
	}
</script>
<style>
	.topic{width: 100%;background: white;font-family: 'microsoft YaHei'}
	.topic .title{padding: .16rem;border-bottom: .01rem solid #eee;overflow: hidden;}
	.topic .title h3{font-size: .14rem;font-weight: normal;float: left;line-height: .1rem;height: .1rem;color: black;}
	.topic .title p{font-size: .14rem;font-weight: normal;float: right;line-height: .1rem;height: .1rem;color: black;color: #808080;}
	.topic .main{padding: .16rem;overflow: auto;width: 3.43rem;}
</style>