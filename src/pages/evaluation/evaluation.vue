<template>
    <div class="evaluation">
        <div class="submenu">
            <h3 :class='{ac:bol}'><span @click='fn1'><router-link to = '/evaluation/01'>测评</router-link></span></h3>
            <h3 :class='{ac:!bol}'><span @click='fn2'><router-link to = '/evaluation/02/01'>资讯</router-link></span></h3>

        </div>
        <Banner  swipeid='swipeid01'>
            <div class="swiper-slide" slot='swiper-con' >
                <img src="../../assets/images/banner1.jpg" height="300" width="750"/>
            </div>
            <div class="swiper-slide" slot='swiper-con'>
                <img src="../../assets/images/banner2.png" height="300" width="750"/>
            </div>
            <div class="swiper-slide" slot='swiper-con'>
                <img src="../../assets/images/banner3.png" height="300" width="750"/>
            </div>
            <div class="swiper-slide" slot='swiper-con'>
                <img src="../../assets/images/banner4.jpg" height="300" width="750"/>
            </div>
        </Banner>
        <div><router-view></router-view></div>
    </div>
</template>
<script>
    import Banner from'../../components/banner.vue'
    export default {
        components: {
            Banner
        },
        data:function(){
            return{
                bol:true
            }
        },
        methods:{
            fn1:function(){
                this.bol = true;
            },
             fn2:function(){
                this.bol = false;
            }
        }
    }

</script>

<style>
    .evaluationWrap h1 {
        font-size: 0.5rem;
    }
    .submenu{height: 0.4rem;background: white;border-bottom:.01rem solid #ccc;font-size: .12rem;}
    .submenu h3{font-weight: normal;width: 50%;float:left;text-align: center;line-height: .4rem}
    .submenu .ac a{color: #0db252;display: inline-block;}
    .submenu a{color: #666;width: 100%;height: .4}
    .evaluation .swiper-container{margin-bottom:0;}
</style>
