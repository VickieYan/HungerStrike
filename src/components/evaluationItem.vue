<template>
    <li class="evaluationitemWrap" @click='fn1'>
        <div class="pic">
          <!--  <div class="score" slot="img">{{ score }}<span>分</span></div> -->
           <slot name="img"></slot>         
        </div>
        <slot name="title"></slot>
        <slot name="cont"></slot>
       
    </li>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  props: ["score", "id"],
  methods: {
    fn1: function() {
      this.$router.push({
        name: "Commentdetail",
        params: {
          id: this.id
        }
      });
    }
  }
};
</script>

<style>
.evaluationitemWrap {
  background: #fff;
  padding: 0.15rem;
  border-bottom: 1px solid #efefef;
  list-style: none;
}

.evaluationitemWrap .pic {
  position: relative;
  overflow: hidden;
  border-radius: 0.04rem;
}

.evaluationitemWrap .pic img {
  width: 100%;
  height: 100%;
  height: auto;
  border-radius: 0.04rem;
  margin-bottom: -0.32rem;
}

.evaluationitemWrap h2 {
  font-size: 0.16rem;
  margin-top: 0.05rem;
  color: #202020;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 0.25rem;
}

.evaluationitemWrap p {
  font-size: 0.13rem;
  color: #909090;
  overflow: hidden;
  text-overflow: ellipsis;
}

.evaluationitemWrap .score {
  font-size: 0.14rem;
  color: #fff;
  background: #ffa200;
  padding: 0.25rem 0.25rem 0 0.25rem;
  position: absolute;
  right: 0;
  top: 0;
  transform: rotate(45deg) translateX(0.15rem) translateY(-0.35rem);
}
</style>
