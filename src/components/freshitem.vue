<template>
	<div class="freshitem" @click='fn1'>
		<div class="txt">
			<slot name='title'></slot>
			<slot name='content'></slot>
		</div>
		<slot name='image'></slot>
		<div class="score"><slot name='score'></slot>分</div>
	</div>
</template>
<style>
	.freshitem{border: .01rem solid #eee;height: .75rem;width: 100%;border-radius: .05rem;text-align: left;position: relative;margin-bottom: .1rem}
	.freshitem h3{font-size: .14rem;font-weight: normal;float: left;line-height: .16rem;height: .16rem;color: black;width: 100%;padding-bottom: .05rem;}
	.freshitem p{font-size: .12rem;font-weight: normal;float: left;line-height: .18rem;height: .18rem;color: #666;width: 50%;}
	.freshitem img{position: absolute;height: .55rem;width: .55rem;top: .12rem;left: .12rem;border-radius: .05rem;}
	.freshitem .txt{margin:.1rem .8rem;width: 100%;height: .6rem;overflow: hidden;}
	.freshitem .score{font-size: .3rem;position: absolute;right: .1rem;top: .18rem;color: #ffa200}
</style>
<script>
	export default{
		props:['id'],
		methods:{
			fn1:function(){
				this.$router.push({
					name:'Appdetail',
					params:{
						id:this.id
					}
				})
			}
		}
	}
</script>