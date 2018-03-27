<template>
    <div class="allWrap">
        <ul>
           <Allitem :time="val.date" :view="val.viewer" v-for="val in arrComment" :id=val.id>
               <img :src="val.imgURL" slot="pic"/>
               <h2 slot="txt">{{val.title}}</h2>
           </Allitem>
        </ul>
    </div>
</template>

<script>
import Allitem from "./allItem";
export default {
  data() {
    return {
      arrComment: []
    };
  },
  components: {
    Allitem
  },
  mounted() {
    var _this = this;
    this.axios.get("../../static/json/comment.json").then(function(res) {
      _this.arrComment = res.data;
    });
  }
};
</script>
