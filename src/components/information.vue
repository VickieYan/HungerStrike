<template>
	<div class="information">
		<a href="#" class="left active">{{txt1}}</a>
		<a href="#" class="right">{{txt2}}</a>
		
	</div>
</template>
<script type="text/javascript">
	export default{
		props: ['txt1','txt2']
	}
</script>
<style type="text/css">
	.information{height: .58rem;text-align: center;position: relative;line-height: 0rem;border-bottom: .01rem solid #eee}
	.information a{display: inline-block;width: 50%;height: .58rem;font-size: .2rem;color: black;text-decoration: none;line-height: .58rem;}
	.information .left{float: left;}
	.information .right{float: right;}
	.information .active{color: #fff;background: #0eab5c}

</style>
