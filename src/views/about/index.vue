<template>
  <div id="liveDetail">

    <div  class="liveDetail-con">
      <div class="titleContent-title">
        {{ messageContent.name }}
        <svg-icon :icon-class="messageContent.gender"></svg-icon>
        <!--              {{-->
        <!--                liveContent.title-->
        <!--              }}-->
      </div>
      <div
        class="liveDetail-title bg"
      >
        <!-- :style="{'background-image': this.liveContent.status !== 'unStart'?`url(${PNGURL}${liveContent.pcBanner})`:`url(${require('./liveInfoTitle.png')})` }" -->

        <div class="content flx-justify-between">

          <div
            class="titleContent"
          >
            <div class="titleContent-img">
              <img :src="messageContent.img" alt="" srcset=""/>

            </div>
            <div class="titleContent-righTxt">

              <div class="titleContent-txt">
                <div class="titleContent-txt-title">

                  <!--                <div>-->
                  <!--                  <span class="title"> Gender</span> <span class="symbol">  {{ messageContent.gender }}</span >-->
                  <!--                </div>-->
                  <div>
                    <span class="title"> Breed</span> <span class="symbol">  {{ messageContent.breed??'-' }}</span>
                  </div>
                  <div>
                    <span class="title"> Color</span> <span class="symbol">  {{ messageContent.color??'-' }}</span>
                  </div>
                  <div>
                    <span class="title"> Altered</span> <span class="symbol">  {{ messageContent.altered ??'-'}}</span>
                  </div>
                  <div>
                    <span class="title"> Age</span> <span class="symbol">  {{ messageContent.age??'-' }}</span>
                  </div>
                  <!--                <div>-->
                  <!--                  <span class="title"> characteristics</span> <span class="symbol"> {{-->
                  <!--                    messageContent.characteristics-->
                  <!--                  }}</span>-->
                  <!--                </div>-->
                  <div>
                    <span class="title"> Size</span><span class="symbol">  {{ messageContent.size??'-' }} </span>
                  </div>
                  <div>
                    <span class="title"> CoatLength</span> <span class="symbol"> {{ messageContent.coatLength??'-' }} </span>
                  </div>
                  <div>
                    <span class="title"> AdoptionFee</span> <span
                    class="symbol"> {{ messageContent.adoptionFee??'-' }} </span>

                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="liveDetail-content">
        <div class="content flx-justify-between">
          <div class="left">
            <div class="left-title"><span>About</span></div>
            <div class="left-content">
              <div class="about-con">
<!--                <div>-->
<!--                  <span> Breed</span>  {{ messageContent.breed??'&#45;&#45;' }}-->
<!--                </div>-->
                <div>
                  <svg-icon icon-class="HouseTrained"></svg-icon>
                  <span>HouseTrained</span> {{ messageContent.houseTrained ??'-'}}
                </div>
                <div>
                  <svg-icon icon-class="health"></svg-icon>
                  <span>Health</span> {{ messageContent.health??'-' }}
                </div>
                <div>
                  <svg-icon icon-class="home"></svg-icon>
                  <span>GoodHome</span> {{ messageContent.goodHome??'-' }}
                </div>

              </div>
              <h2>Concent Me</h2>
              <div class="left-content-tem">
                <div>
                  <svg-icon icon-class="address"></svg-icon>
                  {{ messageContent.address??'-' }}
                </div>
                <div>
                  <svg-icon icon-class="email"></svg-icon>
                  {{ messageContent.email??'-' }}
                </div>
                <div>
                  <svg-icon icon-class="Internet"></svg-icon>
                  {{ messageContent.sourceAssistance??'-' }}
                </div>
                <div>
                  <svg-icon icon-class="phone"></svg-icon>
                  {{ messageContent.phone??'-' }}
                </div>
              </div>
              <h2  >My Story</h2>
              <div  class="left-content-story" v-html="messageContent.article?messageContent.article.replace(/\n\n/g, '<br>'):'-'"></div>
            </div>
          </div>

        </div>

      </div>
    </div>

      <message-aside :pet-list="petList"></message-aside>

  </div>
</template>

<script>
import { petDetails } from '@/api/index.js'
import { APPURL2, APPURL, PNGURL } from '@/config.js'
import messageAside from 'comps/messageAside/messageAside.vue'
import { getMoreList } from '@/libs/utils'

export default {
  components: { messageAside },
  data () {
    return {
      detail: '直播中',
      remainder: {
        day: '01',
        hour: '',
        min: '',
        s: ''
      },
      petList: [
        {
          img: require('../../assets/image/about/bg.png'),
          title: '10 Most Popular Dog Breeds in 2024'
        },
        {
          img: require('../../assets/image/about/bg.png'),
          title: '10 Most Popular Dog Breeds in 2024'
        }
      ],
      messageContent: {},
      APPURL,
      PNGURL,
      dialogVisible: false,
      timer: null
    }
  },
  watch: {
    $route (to, from) {
      this.getDetails()
    }
  },
  async mounted () {
    this.getDetails()
    const list = await getMoreList()
    this.petList = list.dog.concat(list.cat)
  },
  methods: {
    getDetails () {
      const oid = this.$route.query.oid
      petDetails({ oid }).then((res) => {
        this.messageContent = res.data
      })
    }

  },
  deactivated () {
    clearInterval(this.timer)
  }
}
</script>

<style lang="less" scoped>


#liveDetail {
  display: flex;
  justify-content: center;
  text-align: left;
  width: 100%;
  max-width: 1200px;
  padding: 40px;
.liveDetail-con{
  flex: 1;
}
  .titleContent-title {
    font-size: 34px;
    font-weight: bold;
    color: #0b1531;
    padding-left: 30px;
  }

  .content {
    //display: flex;
    //justify-content: space-between;
    width: 100%;
    max-width: 800px;
  }

  .liveDetail-title {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #ffffff;
    box-sizing: border-box;
    margin-top: 20px;

    .titleContent {
      width: 100%;
      //min-width: 800px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 30px;


      .titleContent-img {
        position: relative;
        width: 300px;
        margin-right: 36px;

        .play {
          position: absolute;
          top: calc(50% - 22.5px);
          left: calc(50% - 22.5px);
          z-index: 100;
          width: 45px;
          height: 45px;
        }

        img {
          width: 100%;
          border-radius: 30px;
        }
      }

      .titleContent-righTxt {
        flex: 1;
      }


      .titleContent-txt {
        padding: 10px 0;

        .titleContent-txt-title {
          grid-gap: 10px;
          clear: both;
          display: grid;
          grid-auto-flow: row dense;
          //grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          font-size: 14px;
          font-weight: bold;
          color: #666666;


          & > div {
            display: flex;

            width: 100%;
            height: 35px;
            line-height: 35px;
span{
  border-radius: 5px;
}
            .title {
              display: inline-block;
              height: 100%;
              background: var(--sel_active);
              color: #ffffff;
              width: 105px;
              padding-left: 16px;
              margin-bottom: 10px;

            }

            .symbol {
              flex: 1;
              display: inline-block;
              height: 100%;
              margin: 0 6px;
              padding-left: 16px;
              background-color: var(--shadow_color);
            }
          }
        }

        .titleContent-txt-teacher,
        .titleContent-txt-date {
          font-size: 16px;
          color: #0b1531;
          margin-bottom: 14px;
        }
      }

      button {
        width: 245px;
        height: 46px;
        background: linear-gradient(180deg, #6e95fd 0%, #3269ff 100%);
        border: 0px;
        border-radius: 23px 23px 23px 23px;
        text-align: center;
        font-size: 16px;
        font-weight: 500;

        &:hover {
          cursor: pointer;
        }

        a {
          color: #fff;
          text-decoration: none;

          &:hover {
            cursor: pointer;
          }
        }
      }
    }

    .liveing {
      position: relative;
      width: 100%;
      height: 509px;
      padding: 62px 0;
      color: #fff;

      .info {
        // position: absolute;
        // top: 1px;
        // // left: 50%;
        // left: 0;
        width: 350px;
        // height: 509px;
        color: #fff;
        box-sizing: border-box;
        // background: rgba(0, 0, 0, 0.3);

        .index {
          display: block;
          width: 152px;
          height: 32px;
          line-height: 32px;
          text-align: center;
          background: linear-gradient(133deg, #41c6ef 0%, #6674ff 100%);
          border-radius: 4px 4px 4px 4px;

          font-size: 18px;
          color: #fff;
          margin-bottom: 13px;
        }

        .title {
          font-size: 25px;

          font-weight: 600;

          line-height: 41px;
          margin-bottom: 10px;
        }

        .name {
          font-size: 18px;

          line-height: 36px;
        }

        .time {
          height: 33px;
          margin-top: 40px;
          font-size: 16px;
          color: #c2c4ff;
          margin-bottom: 43px;

          b {
            font-size: 24px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #fff;
            margin: 0 3px;
          }
        }

        .btn {
          width: 302px;
          height: 39px;
          background: linear-gradient(180deg, #6e95fd 0%, #3269ff 100%);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 21px;
          margin: 20px 0;

          &:hover {
            cursor: pointer;
          }
        }

        .tip {
          margin-top: 5px;
          font-size: 16px;
          color: #999;
        }
      }

      img {
        width: 640px;
        height: 360px;
        background: #ffffff;
        border-radius: 20px 20px 20px 20px;
      }
    }
  }

  .bg {
    //background-image: url("./liveInfoTitle.png");
    // background-position: convert;
    background-size: 100% 100%;
  }

  .liveDetail-content {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 70px;
    // flex-direction: column;
    .left {
      flex: 1;
      height: auto;
      background-color: #fff;
      //   border: 1px solid #d0d0d0;
      margin-right: 26px;

      .left-title {
        font-size: 30px;
        //font-weight: bold;
        color: #0b1531;
        width: 100%;
        border-bottom: 1px solid #e1e1e1;
        padding: 14px 0 13px 24px;
        // span {
        //   //  display: inline-block;
        //   border-bottom: 3px px solid #1c59eb;
        //   padding-bottom: 12px;
        // }
      }

      .left-content {
        padding: 25px 50px 25px 30px;

        h2 {
          font-size: 20px;
          margin-bottom: 10px;
        }

        .about-con {
          font-size: 18px;
          margin-bottom: 20px;
          svg{
            margin-right: 10px;
            //color: var(--txt_color);
          }
          >div{
            //background-color: var(--shadow_color);
            margin-bottom: 10px;
            padding:8px 0px;
          }
          span{
            //color: var(--txt_color);
            margin-right:20px;
            display: inline-block;
            //background: #3c6ffd;

            width: 105px;


          }
        }

        .left-content-tem {

          font-size: 16px;
          margin-bottom: 20px;
          line-height: 40px;

          svg {
            margin-right: 10px;
          }
        }

        .left-content-story {
          //background: var(--content_color);
          font-size: 16px;
          line-height: 1.5;
          color: #666666;

        }
      }
    }

    .right {
      width: 33%;
      //   height: 100px;
      .recommendBox {
        background-color: #fff;

        .recommendBox-title {
          font-size: 20px;
          font-weight: bold;
          color: #0b1531;
          width: 100%;
          border-bottom: 1px solid #e1e1e1;
          padding: 14px 0 13px 24px;
        }

        .swipeBox {
          padding: 20px 20px 10px;

          img {
            &:hover {
              cursor: pointer;
            }
          }
        }
      }

      .tipsBox {
        display: flex;
        // justify-content: space-between;
        margin-top: 20px;
        padding: 20px;
        background-color: #fff;

        .tipsBox-img {
          img {
            width: 108px;
            height: 108px;
            margin-right: 9px;
          }
        }

        .tipsBox-content {
          .tipsBox-title {
            font-size: 16px;
            color: #0b1531;
            margin-bottom: 12px;
          }

          .tipsBox-txt {
            color: #3d4c64;
            margin-bottom: 24px;
          }

          .tipsBox-produce {
            font-size: 16px;
            font-weight: bold;
            color: #3269ff;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 800px) {
  #liveDetail {
    flex-direction:  column-reverse;
    padding: 30px 0px;
    .titleContent {
      flex-direction: column;

      .titleContent-txt-title {
        > div {
          width: 100% !important;
        }

      }
    }

    .liveDetail-content {
      .content {
        flex-direction: column;
        padding: 0 15px;

        .left {
          margin-right: 0;
          margin-bottom: 20px;
        }
      }
    }
    .titleContent-righTxt{
      width: 90%;
      margin-top: 20px;
    }
    .aside{
      padding: 0 15px;
    }
  }

  #showList {
    flex-direction: column;
    padding: 40px 15px;

    .livePlay-list {
      width: 33% !important;
    }
  }
}

</style>
<style lang="less">
.el-carousel__button {
  background-color: #c0c4cc;
  opacity: 0.44;
}

.el-dialog__wrapper {
  top: 10%;
}

.el-dialog__body {
  text-align: center;

  img {
    width: 170px;
  }
}

// .el-carousel__indicators--horizontal{
//   bottom: -50px;
// }
</style>
