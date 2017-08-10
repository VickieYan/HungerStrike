<template>
	<div>
		<my-header >
		<div slot='container'>
			<img src="../assets/images/portfolio.png" height="58" width="214" class="pic1" >
			
			<img src="../assets/images/ic_search.png" height="36" width="36" class="pic2" >
		</div>
		</my-header>
	</div>
</template>
<script type="text/javascript">
	import myHeader from './header'
	export default{
		components:{
			myHeader,
		}
	}
</script>