<template>
	<div class="home-item">
		<span>
			<slot name='img'></slot>
			<!-- <img src="../../assets/images/jx1.png"> -->
			<slot name='txt'></slot>
			<!-- <p>极简笔记</p> -->
		</span>
	</div>
</template>





<style type="text/css">
.home-item {
  width: 0.76rem;
  height: 1rem;
  box-shadow: 0 0 0.05rem 0 rgba(0, 0, 0, 0.16);
  margin: 0.2rem 0.15rem;
  text-align: center;
  line-height: 0.75rem;
  position: relative;
}
/*.home-item{width:.76rem;height:1rem;box-shadow: 0 0 0.05rem 0 rgba(0,0,0,.16);float: left;margin:.2rem 0;text-align: center;line-height:.75rem;margin-right: .1rem;}*/
.home-item img {
  width: 80%;
  float: left;
  position: absolute;
  top: 0.07rem;
  left: 50%;
  margin-left: -40%;
  border-radius: 0.05rem;
}
/*.home-item p{font-size: .12rem;line-height: .22rem;}*/
.home-item p {
  font-size: 0.12rem;
  line-height: 0.22rem;
  position: absolute;
  bottom: 0.02rem;
  width: 100%;
}
</style>