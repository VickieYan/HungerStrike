<template>
	<div class="ranking">
		<ul>
			<li class="active">
				<slot name='ranking'></slot>
				<span :class="{rank:bol>3?true:false}" class="orange">{{num}}</span>
			</li>
			<li>
				<slot name='icon'></slot>
			</li>
			<li class="text">
				{{ txt }}
			</li>
			<li>
				<a class="enter" @click='fn1()'>进入</a>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
export default {
  props: ["txt", "num", "bol", "id"],
  methods: {
    fn1: function() {
      this.$router.push({
        name: "Appdetail",
        params: {
          id: this.id
        }
      });
    }
  }
};
</script>
<style type="text/css">
.ranking ul {
  margin: 0.2rem 0;
  overflow: hidden;
  height: 0.4rem;
  text-align: center; /*border: .01px solid #eee*/
}
.ranking li {
  text-align: center;
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.14rem;
  float: left;
  list-style: none;
  width: 25%;
  overflow: hidden;
  position: relative;
}
.ranking .orange {
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  background: #f6d164;
  display: inline-block;
  line-height: 0.3rem;
}
.ranking li .rank {
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  background: #eee;
  display: inline-block;
  line-height: 0.3rem;
}

.ranking .active span:nth-child(4) {
  background: #eee;
}
.ranking .icon {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  overflow: hidden;
}
.ranking .text {
  font-size: 0.12rem;
  font-weight: normal;
}
.ranking .enter {
  display: inline-block;
  height: 0.24rem;
  width: 0.5rem;
  border: 0.01rem solid #47d268;
  border-radius: 0.05rem;
  line-height: 0.24rem;
  color: #47d268;
  text-decoration: none;
}
.ranking .pic {
  width: 0.2rem;
  height: 0.12rem;
  position: absolute;
  top: -0.03rem;
  left: 0.37rem;
}
</style>