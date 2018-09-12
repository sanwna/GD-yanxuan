<template>
  <div>
    <div class="heard">
      <div class="top iconfont icon-home"></div>
      <div class="hearer-yanxuan">网易严选</div>
      <div class="hearer-icon iconfont icon-search-"></div>
      <div class="hearer-iconc iconfont icon-shoppingcart"></div>
      <input type="text" placeholder="请输入手机号" />
      <input type="text" placeholder="请输入短信验证码"/>
      <button class="duanxin">获取短信验证码</button>
      <a href="javascript:;">遇到的问题？</a>
      <a href="javascript:;">使用密码验证登录</a>
      <div class="guge" >登录</div>
    </div>
  </div>
</template>

<script>
    export default {}
</script>

<style scoped lang="less">
  @import "../public/rem";
  .heard{
    height: 143/@rem;
    overflow: hidden;
    display: flex;
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
