<template>
	<div class="appraise">
		<Evaluationitem :score="val.score" v-for='val in arrData' :id='val.id'>
            <img :src="val.imgURL" slot="img"/>
            <h2 slot="title">{{val.title}}</h2>
            <p slot="cont">{{val.content.slice(3,60)+'...'}}</p>
        </Evaluationitem> 
	</div>
</template>
<script>
import Evaluationitem from "./evaluationItem.vue";
export default {
  components: {
    Evaluationitem
  },
  data: function() {
    return {
      arrData: []
    };
  },
  mounted: function() {
    var _this = this;
    this.axios.get("../../static/json/comment.json").then(function(res) {
      _this.arrData = res.data;
    });
  }
};
</script>