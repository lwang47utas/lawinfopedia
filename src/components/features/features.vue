<template>
  <div id="features">
    <div
      class="title"
      :style="{ 'margin-bottom': bottompx ? bottompx : '10px' }"
    >
      {{ title }}
    </div>
    <div class="name" v-if="name">
      <router-link :to="url"> {{ name }}</router-link>
    </div>
    <slot></slot>
    <!-- 一排 -->
    <div class="one">
      <slot name="one"></slot>
    </div>
    <!-- 多排 -->
    <div class="two grid-three">
      <slot name="two"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'url', 'title', 'bottompx']
}
</script>

<style lang="less" scoped>


#features {
  @media screen and (max-width: 800px) {
    .title{
      font-size: 26px !important;
      line-height: 40px !important;
    }
    .name{
      font-size: 14px !important;
      line-height: 1.4 !important;
    }
  }
  // overflow: hidden;
  .name {
    font-size: 16px;
    color: #666666;
    line-height: 28px;
    margin-bottom: 48px;

    a {
      color: #666666;
    }
  }

  .title {
    font-size: 40px;
    line-height: 53px;
    color: #282938;
    font-weight: 600;
    text-align: center;
    margin-bottom: 10px;
  }

  ul {
    li {
      border-radius: 6px 6px 6px 6px;
    }
  }

  .one, .two {
    display: flex;
    justify-content: center;
    width: 100%;
    //padding: 0 15px;
  }
  .two {
    ul {
      width: 100%;
      // height: 594px;
      //flex-direction: column;
      justify-content: space-between;
    }
  }

  .features {

    margin-top: -16px;
  }
}

</style>
