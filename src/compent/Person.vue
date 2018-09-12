<template>
<div>
 <div class="lala">
   <div class="heard">
     <div @click="handerE('/home')" :class="{active:'/home'==$route.path}">
       <i class="iconfont icon-home"></i>
     </div>
     <div class="hearer-yanxuan">网易严选</div>
     <div class="hearer-icon iconfont icon-search-"></div>
     <div class="hearer-iconc iconfont icon-shoppingcart"></div>
     <div></div>
   </div>

   <div class="body" v-show="login">
     <div class="wangyi"><img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""></div>
     <div class="denglu" @click="handle(1)">手机号码登录</div>
     <div class="email" @click="handle(2)">邮箱账号注册</div>
     <div class="number iconfont icon-arrow-right-">手机号快速注册</div>
     <div class="wei">
       <div class="iconfont icon-weixin" >微信</div>|
       <div class="iconfont icon-QQ" >QQ</div>|
       <div class="iconfont icon-weibo" >微博</div>
     </div>
   </div>
<!--手机号码登录-->
   <div class="bodyy" v-show="showPhone" >
     <div class="wangyiG"><img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""></div>
     <input class="phone" type="text" maxlength="11" v-model="phone" placeholder="请输入手机号">
     <div class="line"></div>
     <input class="iphone" type="text" v-model="pwd" placeholder="请输入验证码">
     <div class="line"></div>

     <div class="yanzheng" :disabled="!isRightPhone || computeTime>0"
     :class="{right_phone_number:isRightPhone}" @click.prevent="sendCode"
     >{{computeTime>0 ? `已发送(${computeTime}s)`:'获取验证码'}}</div>
     <div class="query">遇到问题？ </div>
     <div class="psd">使用密码验证登录</div>
     <div class="guge" >登录</div>
     <div class="login" @click="toLogin">其他方式登录</div>
     <div class="zhanghao">注册账号></div>
   </div>
   <!--邮箱登录-->
   <div class="bodyy" v-show="showEmail">
     <div class="wangyiG"><img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""></div>
     <input class="phone" type="text" maxlength="11"  placeholder="邮箱账号" v-model="name">
     <div class="line"></div>
     <input class="iphone" type="password" placeholder="密码">
     <div class="line"></div>
     <div class="query">注册账号</div>
     <div class="psd">忘记密码</div>
     <div class="guge" >登录</div>
     <div class="login" @click="toLogin">其他方式登录</div>
   </div>

   </div>

 </div>
</template>

<script>
  import {Toast, MessageBox} from 'mint-ui'
  import {reqSendCode} from '../api'
    export default {
    //表单验证
    data(){
      return{
        phone:'',
        code:'',
        pwd:'',
        login:true,
        computeTime:0,
        showPhone:false,
        showEmail:false,
        name:'',
    }},
      computed:{
      isRightPhone(){
        return /^1\d{10}$/.test(this.phone)
      }
      },
    methods: {
      handle(index) {
        if (index == 1) {
          this.showPhone = true
          this.login = false
          this.showEmail = false
        } else {
          this.showPhone = false
          this.login = false
          this.showEmail = true
        }
      },
      toLogin(){
        this.showPhone = false
        this.login = true
        this.showEmail = false
      },
      handerE(path){
        this.$router.replace(path)
      },
      //发送一次性验证码
  async sendCode(){
        if(!this.isRightPhone) {
          Toast('手机号码错误')
          return
        }
        //实现倒计时功能
      this.computeTime=30;
      //启动循环定时器，改变computeTime的值
    const intervalId=setInterval(()=>{
      //一上来就开始减时间
      this.computeTime--;
      //当计时达到最小值得时候，清除定时器
      if(this.computeTime<=0){
        this.computeTime=0;
        clearInterval(intervalId);
      }
    },1000)
//    debugger
    //发送请求去发送短信验证码
    const result = await reqSendCode();
    //判断发送接收回来的号码还是密码是否正确
    console.log(result,1111)
    if(result.code===0){
      Toast('验证码发送成功')
    }

  }
    }
  }

</script>

<style scoped lang="less">
  @import "../public/rem";
  .heard{
    height: 143/@rem;
    overflow: hidden;
    display: flex;
    margin-left: 1rem;

  }
  .top{
    font-size: 1.4rem;
    margin-left: 0.5rem;
    padding-top: 0.8rem;
  }
  .hearer-yanxuan{
    margin-top: 1rem;
    margin-left: 4rem;
  }
  .hearer-icon{
    position: absolute;
    left: 13rem;
    font-size: 1rem;
    top: 1rem;
  }
  .hearer-iconc{
    position: absolute;
    left: 14.6rem;
    top: 1rem;
    font-size: 1rem;
  }
  .body{
    background-color: #f2f5f4;
  }
  .bodyy{
    background-color: white;
  }
  .wangyi{
    text-align: center;
    &>img{
      width: 5rem;
      height: 2rem;
      margin-top: 4rem;
    }

  }
  .denglu{
    margin-top: 4rem;
    background-color: brown;
    color: white;
    font-size: 0.6rem;
    width: 15rem;
    height: 2.3rem;
    margin-left: 0.3rem;
    border-radius: 0.2rem;
    text-align: center;
    line-height: 1.9rem;
  }
  .email{
    color: brown;
    width: 15rem;
    height: 2rem;
    border: 1px solid red;
    text-align: center;
    line-height: 1.9rem;
    border-radius: 0.2rem;
    font-size: 0.6rem;
    margin-left: 0.3rem;
    margin-top: 1.5rem;
  }
  .number{
    font-size: 0.6rem;
    margin-left: 6rem;
    margin-top: 0.5rem;
    margin-bottom: 2rem;
  }
  .wei{
    display: flex;
    justify-content: space-around;
    font-size: 0.8rem;
    margin-top: 5rem;
  }
  .guge{
    background-color: brown;
    text-align: center;
    height: 2rem;
    line-height: 1.8rem;
    width: 14rem;
   margin-left:1rem;
    margin-right: 1rem;
    color: white;
    font-size: 0.8rem;
  }
  .wangyiG{
    text-align: center;
   &>img{
     width: 4rem;
     height: 1.2rem;
     margin-top: 1rem;
   }
  }
  .phone{
    margin-top: 3rem;
    margin-left:2rem ;
    text-align: start;
    border-top: hidden;
    border-left: hidden;
    border-bottom:  hidden;
    height: 1rem;
    width: 9rem;
    font-size: 0.6rem;
  }
  .line{
    margin-top: 0.4rem;
    margin-left: 2rem;
    height: 0rem;
    border: solid gainsboro;
  }
  .iphone{
    text-align: start;
    border-top: hidden;
    border-left: hidden;
    border-bottom:  hidden;
    height: 1rem;
    width: 9rem;
    margin-left:2rem ;
  }
  .query{
    font-size: 0.6rem;
    margin-top:1rem ;
    margin-left:2rem ;
    color: #7e8c8d;
  }
  .psd{
    font-size: 0.54rem;
    margin-top: -0.7rem; ;
    margin-left:11.5rem ;
    margin-bottom: 2rem;
    color: #7e8c8d;
  }
  .login{
    text-align: center;
    height: 2rem;
    line-height: 1.8rem;
    width: 14rem;
    margin-left:1rem;
    margin-right: 1rem;
   color: red;
    border: solid red;
    font-size: 0.8rem;
    margin-top: 1rem;
    font-size: 0.7rem;
  }
  .yanzheng{
    margin-left: 12.5rem;
    margin-top: -1.5rem;
    text-align: center;
    font-size: 0.6rem;
    background-color: gainsboro;
    border-radius: 0.1rem;
    color: #7e8c8d;
  }
  .zhanghao{
    font-size: 0.7rem;
    margin-left: 6.4rem;
    margin-top: 0.4rem;

  }
</style>
