<template>
  <div class="shopcart">
    <div class="cart">购物车</div>
    <div class="quan">领券</div>
    <div class="TouTou" >
      <div class="pictred">
        <div class="iconfont icon-xiaoxi">30天无忧退货</div>
        <div class="iconfont icon-xiaoxi">48小时快速退款</div>
        <div class="iconfont icon-xiaoxi">满88元免邮费</div>
      </div>
      <div class="sohu" ><img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png" alt=""></div>
      <router-view/>
      <!--<div class="guge" @click="handeol('/person')">登录</div>-->
      <div class="guge" @click="handeol('/person')">登录</div>
    </div>
  </div>
</template>

<script>
    export default {
      methods:{
        handeol(path){
          this.$router.push('/person')
        }
      }

    }
</script>

<style scoped lang="less">

  .cart{
    font-size: 0.9rem;
    line-height: 2rem;
    text-align: center;
  }
  .quan{
    color: red;
    font-size: 0.7rem;
    text-align: end;
    margin-top: -1.3rem;
    margin-right: 1rem;
  }
  .pictred{
    margin-top: 1rem;
    font-size: 0.4rem;
    display: flex;
    justify-content: space-around;
    background-color: #f4f4f4;


  }
  .sohu{
    margin-top: 5rem;
    margin-left: 3rem;
  }
  .guge{
    background-color: brown;
    text-align: center;
    height: 2rem;
    line-height: 1.8rem;
    width: 10rem;
    margin-left: 3rem;
    color: white;
    font-size: 0.8rem;
  }

</style>
