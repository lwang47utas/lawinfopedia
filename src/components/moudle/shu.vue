<template>
  <!-- 类似首页我们的优势布局  -->
  <div id="shu" :style="{background: 'url('+require(`../../assets/image/index/${list.iconName}Bg.webp`)  +') no-repeat'}">
    <img
      :src="list.icon"
      alt=""
      v-if="!list.iconName"
    />
    <svg-icon class-name="iconStyle" :icon-class="list.iconName"></svg-icon>
    <span class="title">{{ list.title }}</span>

    <span>{{ list.introduce }}</span>
    <span class="shu-link" v-if="list.url"> Read More</span>
  </div>
</template>

<script>
export default {
  props: ['list']
}
</script>

<style lang="less" scoped>

#shu {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 24px ;
  cursor: pointer;
  border-radius: 30px;
  //background: url("../../assets/image/index/dogBg.webp");
  background-size: cover !important;
  color: #ffffff;
svg{
  color: #ffffff;
}
  img {
    // width: 45px;
    height: 50px;
    margin-bottom: 30px;
  }
  .iconStyle{
    height:80px;
    width: 80px;
  }
  span {

    text-align: left;
    font-size: 14px;
    line-height: 30px;
     //margin-bottom: 30px;
  }
  .title {
    font-size: 30px;
    font-weight: bold;
    //color: #333333;
    margin-top: 5px;
  }
  .shu-link{
    margin-top: 10px;
    font-size: 16px;
    color: #FFFFFF;
    //color: var(--txt_color);
  }
}
</style>
