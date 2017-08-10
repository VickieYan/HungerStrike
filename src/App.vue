<template>
  <div id="app">
    <My-Head @reset='fn1'>
        <img src="./assets/images/portfolio.png" slot='pic1' >
        <img src="./assets/images/nav-mirror.png" slot='pic2' >
    </My-Head>
    <router-view></router-view>
    <Tabbar :selected = "selected" @change = 'fn2'></Tabbar>
  </div>
</template>

<script>
import MyHead from './components/header.vue';
import Tabbar from './components/tabbar.vue'
export default {
  name: 'app',
  components: {
    Tabbar,
    MyHead
  },
  mounted:function(){
     this.$router.push('/');
  },
  data:function(){
    return{
      selected:''
    }
  },
  methods:{
    fn1:function(){
      this.selected = 0
    },
    fn2:function(){
      this.selected = '';
    }
  }
 	
}
</script>

<style>
*{margin: 0;padding: 0;}
body{padding-top: .52rem;padding-bottom: .56rem;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
 
}
</style>
