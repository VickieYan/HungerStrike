<template>
	<div class="appdetail">
		<div v-html='val.content'></div>
	</div>
</template>
<script>
	export default{
		data:function(){
			return{
				val:{},
				id:0
			}
		},
		mounted:function(){
			this.id = this.$route.params.id;
			var _this = this;
			this.axios.get("../../static/json/application.json").then(function(res){
				_this.val = res.data[_this.id-1]
				
			});

		}
	}
</script>
<style>
	.appdetail{text-align:center;font-size: .1rem!important;padding: .5rem;background: white;height: 4.5rem;line-height: .3rem;text-indent: 2em;}
	.appdetail p{padding-top: .5rem}
	.appdetail img{box-shadow: 0 0 .2rem red;}
</style>
