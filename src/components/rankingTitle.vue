<template>
	<div class="rankingTitle">
		<ul>
			<li>{{ txt1 }}</li>
			<li>{{ txt2 }}</li>
			<li>{{ txt3 }}</li>
			<li>{{ txt4 }}</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
export default {
  props: ["txt1", "txt2", "txt3", "txt4"]
};
</script>
<style type="text/css">
.rankingTitle ul {
  height: 0.3rem;
}
.rankingTitle li {
  text-align: center;
  font-weight: bold;
  background: white;
  height: 0.3rem;
  line-height: 0.3rem;
  font-size: 0.14rem;
  color: #505050;
  float: left;
  list-style: none;
  width: 25%;
}
</style>