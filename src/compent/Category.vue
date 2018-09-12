<template>
  <div>
  <div class="input iconfont icon-search-" >搜索商品，共有1325款好物</div>
    <!--导航条-->
    <div class="ification">
    <div class="wrapper">
      <ul class="content">
        <li style="color: red" @click="handerr('index')" :class="{active:'/index'==nowIndex}">推荐专区</li>
        <li>爆品区</li>
        <li>秋季专区</li>
        <li>居家</li>
        <li>推荐专区</li>
        <li>爆品区</li>
        <li>秋季专区</li>
        <li>居家</li>
        <li>推荐专区</li>
        <li>爆品区</li>
        <li>秋季专区</li>
        <li>居家</li>
        <li>秋季专区</li>
        <li>居家</li>
        <li>推荐专区</li>
        <li>爆品区</li>
      </ul>
    </div>
    </div>
    <!--导航详情-->
    <div></div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import 'swiper/dist/css/swiper.min.css'
  import Swiper from 'swiper'
    export default {

      methods:{
        handerr(index){
          this.$router.replace(index)
          this.nowIndex=index
        }
      },

      data(){
        return{
          nowIndex:'index',
        }
      },
      name: 'App',
      mounted () {
        new BScroll('.wrapper', {
          bounce: true,
          momentumLimitDistance: 1,
          scrollY: true,
          scrollbar: {
            fade: true,
            interactive: false
          },
          mouseWheel: true,
        })
      }
    }
</script>

<style scoped lang="less">
  @import "../public/rem";
  .input{
    position: absolute;
    left: 5rem;
    top: 0.4rem;
    border: solid;
    color: #666666;
    border-color: #ededed;
    background-color:#ededed ;
    height: 1rem;
    border-radius: 0.3rem;
    margin-left: -3rem;
    width: 13rem;
    text-align: center;
  }
  .ification{

  }
  .wrapper{
    align-items: center;
    margin-top: 2rem;
    width:100%;
    margin-right: 1px;
    overflow: hidden;
  }
  .content{
    display: flex;
    flex-direction: column;
    flex: 1;
    width:4000px;
    &>li{
      margin-left: 1rem;
      white-space:nowrap;
      font-size: 0.6rem;
      justify-content: space-around;
      color: #333;
      margin-bottom: 1rem;
    }
  }


</style>
