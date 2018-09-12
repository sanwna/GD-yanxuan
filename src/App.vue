<template>
  <div id="app">
    <div>
      <router-view/>
    </div>
    <div class="footer">
      <div @click="hander('/home')" :class="{active:'/home'==$route.path}">
      <div class="iconfont icon-shouye"></div>
      <div>首页</div>
    </div>
      <div @click="hander('/foodwu')" :class="{active:'/foodwu'==$route.path}">
        <div class="iconfont icon-bd-"></div>
        <div>识物</div>
      </div>
      <div @click="hander('/category')" :class="{active:'/category'==$route.path}">
        <div class="iconfont icon-iconyihuifu-"></div>
        <div>分类</div>
      </div>
      <div @click="hander('/shopcar')" :class="{active:'/shopcar'==$route.path}">
        <div class="iconfont icon-icon"></div>
        <div>购物车</div>
      </div>
      <div @click="hander('/person')" :class="{active:'/person'==$route.path}">
        <div class="iconfont icon-geren"></div>
        <div>个人</div>
      </div>
    </div>
  </div>
</template>

<script>
/*  import { Popup } from 'mint-ui';
  import Vue from 'vue'
  Vue.component(Popup.name, Popup);*/
export default {

  name: 'App',
  data(){
    return{

    }
  },
  methods:{
    hander(path){
      this.$router.replace(path)

    }
  },

}
</script>

<style lang="less" scoped>
    @import "./public/rem";
  #app{
    .footer{
      display: flex;
      justify-content: space-around;
      align-items: center;
      height:97/@rem ;
      width:750/@rem;
      position: fixed;
      bottom: 0;
      left:0;
      background: #fff;
      z-index: 1;
      &>div{
        width:72/@rem;
        height:70.969/@rem;
        font-size: 24/@rem;
        div{
          text-align: center;
          color:#666;
          }
      }
      &>.active{
        div{
          color: #b4282d;
        }
      }
    }
  }
</style>
