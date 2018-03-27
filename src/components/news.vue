<template>
	<div class="newsWrap">
		<ul class="secnav">
            <li :class="{active:nowIndex==1}" @click="nowIndex=1">
                    <router-link to="/evaluation/02/01">全部</router-link>
            </li>
            <li :class="{active:nowIndex==2}" @click="nowIndex=2">
                    <router-link to="/evaluation/02/02" >微信小程序</router-link>
            </li> 
            <li :class="{active:nowIndex==3}" @click="nowIndex=3">
                    <router-link to="/evaluation/02/03" >行业解读</router-link>
            </li> 
            <li :class="{active:nowIndex==4}" @click="nowIndex=4">
                    <router-link to="/evaluation/02/04" >轻应用</router-link>
            </li> 
        </ul>
        <router-view></router-view>
	</div>
</template>
<script>
export default {
  data() {
    return {
      nowIndex: 1
    };
  },
  components: {}
};
</script>

<style>
.newsWrap h1 {
  font-size: 0.5rem;
}

.newsWrap .secnav {
  height: 0.4rem;
  background: white;
  line-height: 0.4rem;
}

.newsWrap .secnav li {
  list-style: none;
  font-size: 0.15rem;
  float: left;
  width: 25%;
  text-align: center;
  font-weight: bold;
}

.newsWrap .secnav a {
  text-decoration: none;
  color: #000;
}

.newsWrap .secnav .active a {
  color: #0db252;
}
</style>
