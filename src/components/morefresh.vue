<template>
	<div class="morefresh">
			<div>
			  <!-- <p v-for="item in list">
			  <span v-text="item"></span>
			  </p> -->
			  
				<Item  v-for="(item,index) in list" :id='item.id'>
					<h3 slot='title'>{{item.title}}</h3>
					<p slot='content'>{{item.discribe}}</p>
					<img :src="item.iconURL" slot = 'image'>
					<span slot='score'>{{item.score}}</span>
				</Item>
			 <!--  <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">    </infinite-loading> -->
			</div>
	</div>
</template>
<script>
import Item from "../components/freshitem.vue";
import InfiniteLoading from "vue-infinite-loading";
export default {
  components: {
    Item,
    InfiniteLoading
  },
  data: function() {
    return {
      arrData: [],
      list: []
    };
  },
  mounted: function() {
    var _this = this;
    this.axios.get("../../static/json/application.json").then(function(res) {
      _this.list = res.data;
    });
  }
};
</script>