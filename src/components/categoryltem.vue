<template>
	<div class="categoryitem" @click='fn1'>
		<slot name='img'></slot>
		<slot name='txt'></slot>
	</div>
</template>
<script>
	export default{
		methods:{
			fn1:function(){
				this.$router.push('/morefresh')
			}
		}
	}
</script>
<style>
	.categoryitem{float: left;width: 33%;height: 1rem;border-right: 1px solid #eee;border-bottom: 1px solid #eee;margin:0;vertical-align: top;position: relative;}
	.categoryitem img{width: .35rem;height: .35rem;position: absolute;left: 50%;margin-left: -.175rem;top: .15rem;}
	.categoryitem span{font-size: .12rem;position: absolute;left: 50%;margin-left: -.12rem;top:.65rem;}
</style>
