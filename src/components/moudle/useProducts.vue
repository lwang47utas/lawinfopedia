<template>
  <div class="userProduct">
    <ul class="produce list1">
      <li
        v-for="(item, index) in produceList"
        :key="index"
        @mouseenter.prevent="mouseover(type, index)"
        @mouseleave.stop="mouseout(type, index)"
        @click="goToUrl(item)"
      >
        <img
          :src="item.img"
          alt=""
        />
        <span class="sle name"> <svg-icon :icon-class="item.gender"></svg-icon> {{ item.name }}</span>
        <!--        <span>{{ item.title }}</span>-->
        <div>
          <Button>{{ item.age }}</Button>
          <Button>{{ item.size }}</Button>
        </div>

        <div v-if=" activeMame===mouseName && mouseindex === index" class="hoverIn">
          <span class="sle"><svg-icon :icon-class="item.gender"></svg-icon>{{ item.name }}</span>
          <!--          <span>{{ // item.title }}</span>-->
          <span>{{ item.size }} {{ item.age }}</span>
          <!--          <span></span>-->
          <Button>

            <router-link :to="`/about?oid=${item.oid}`">About Me</router-link>
            <!--            <a-->
            <!--            :href="item.url"-->
            <!--            target="_blank"-->
            <!--            rel="noopener noreferrer"-->
            <!--          >About Me</a>-->
          </Button>
        </div>
      </li>
      <li class="showMore flx-center" v-if="showMore" @click="$router.push(`/${type}`)">
        <svg-icon :icon-class="type"></svg-icon>
        <span class="total">View {{ total }} more {{ type }}s & puppies available.</span>
        <svg-icon icon-class="right"></svg-icon>
      </li>
    </ul>
  </div>
</template>

<script>
import { fangdou } from '@/libs/utils.js'

export default {
  props: ['produceList', 'mouseName', 'mouseindex', 'type', 'showMore', 'total'],
  data () {
    return {
      activeMame: ''
      //   index: ''
    }
  },
  mounted () {

  },
  methods: {
    mouseover (item, index) {
      this.activeMame = item
      this.$emit('mouseover', item, index)
    },
    mouseout (item, index) {
      this.$emit('mouseout')
    },
    goToUrl (item) {
      this.$router.push(`/about?oid=${item.oid}`)
    }
  }
}
</script>

<style lang="less" scoped>


.userProduct {
  display: flex;
  justify-content: center;
  max-width: 1150px;
  width: 100%;

  .list1 {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    border-radius: 30px;

    li {
      width: 19%;
      //background: #ffffff;
      box-shadow: 0px 0px 12px 1px rgba(139, 139, 139, 0.12);
      //margin-right: 20px;
      margin-bottom: 10px;
      border-radius: 20px;
      cursor: pointer;
      //&:nth-child(4n) {
      //  margin-right: 0;
      //}
    }

    .showMore {
      padding:0 30px;
      svg {
        width: 50px;
        height: 50px;
        margin-bottom: 10px;

        //color: var(--button_color);
      }
      .total{
        font-size: 20px;
        font-weight: bold;
        color:  var(--button_color);
        margin-bottom: 20px;
      }
      &:hover{
        border: 2px solid var(--button_color);
      }
    }
  }

  .produce {
    li:hover {
      transform: translateY(-30px);
      transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;

      // margin-top: -30px;
    }

    li {
      position: relative;
      display: flex;
      // height: 394px;
      flex-direction: column;
      align-items: center;
      padding: 10px 10px 30px;
      box-sizing: border-box;

      img {
        width: 100%;
        height: 180px;
        border-radius: 10px;
        margin-bottom: 20px;
        object-fit: cover;
      }

      .name {
        display: inline-block;
        font-size: 20px;
        font-weight: bold;
      }

      span {
        &:nth-child(3) {
          font-size: 16px;
          color: #666666;
          margin-top: 10px;
        }
      }

      button {
        display: inline-block;
        width: 70px;
        height: 30px;
        font-size: 14px;
        color: #fff;
        background: var(--button_color);
        border-radius: 20px;
        border: 0;
        margin-top: 17px;
        cursor: pointer;

        a {
          text-decoration: none;
          color: var(--txt_color);
        }
        &:nth-child(1){
          margin-right: 10px;
        }
      }

      //.hoverIn {
      //  display: flex;
      //  flex-direction: column;
      //  justify-content: space-between;
      //}

      .url {
        margin-top: 0px;
      }

      .nourl {
        margin-top: 0px;
        margin-bottom: 20px;
        background-color: #98a3b7;
      }

      .hoverIn {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        bottom: 0;
        left: 0;
        width: 100%;
        //height: 283px;
        background: var(--button_color);
        padding: 18px 20px 0px 15px;
        box-sizing: border-box;
        border-radius: 10px;

        span {
          color: #fff;

          &:nth-child(1) {
            font-size: 20px;

            font-weight: bold;
          }

          &:nth-child(2) {
            font-size: 16px;
            margin-top: 10px;
          }

          &:nth-child(3) {
            color: #fff;
            font-size: 14px;
            line-height: 28px;
            text-align: left;
            margin-top: 20px;
          }
        }

        button {
          width: 110px;
          height: 32px;
          font-size: 16px;
          color: var(--txt_color);
          background: #ffffff;
          border-radius: 20px;
          border: 0;
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>
<style lang="less" scoped>
.userProduct {
  @media screen and (max-width: 1200px) {
    .list1 {
      max-width: 600px;

      li {
        img {
          height: 200px;
        }

        width: 48% !important;

      }
    }
  }
  @media screen and (max-width: 500px) {
    .list1 {
      li {
        //height: 340px;
      }
    }
  }
}

</style>
