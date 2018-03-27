<template>
	<div class="specialitem" @click='fn1'>
		<slot name='img'></slot>
	</div>
</template>
<script>
export default {
  props: ["id"],
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
<style type="text/css" media="screen">
.specialitem {
  width: 100%;
  height: 1.6rem;
  margin-bottom: 0.1rem;
  overflow: hidden;
}
.specialitem img {
  width: 100%;
  height: 100%;
}
</style>