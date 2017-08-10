<template>
	<div class="commentdetail">
		<div v-html='comment.content'></div>
	</div>
</template>
<script>
	export default{
		data:function(){
			return{
				comment:{}
			}
		},
		mounted:function(){
			var _this = this;
			this.axios.get("../../static/json/comment.json").then(function(res){
				var index = _this.$route.params.id-1;
				_this.comment = res.data[index];
			})
		}
	}
</script>
<style>
	.commentdetail{text-align: center;font-size: .1rem;padding: .3rem;background: white;}
	.commentdetail img{width: 80%;margin: .5rem 0;}
</style>