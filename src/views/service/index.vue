<template>
  <div id="service">
    <div class="service-content">
      <message-aside :li-list="liList"></message-aside>
    </div>
  </div>
</template>
<script>

import messageAside from 'comps/messageAside/messageAside.vue'

export default {
  components: { messageAside },
  data () {
    return {
      liList: [
        {
          name: 'All',
          type: 'All',
          num: 100
        },
        {
          name: 'All About Foster Care',
          type: 'All About Foster Care',
          num: 14
        },
        {
          name: 'Campaigns',
          type: 'Campaigns',
          num: 14
        },
        {

          name: 'Cats and the community',
          type: 'Cats and the community',
          num: 14
        }
      ],
    }
  },
  mounted () {
  },
  methods: {}
}
</script>

<style lang="less" scoped>
#service {
  img {
    width: 100%;
  }

  .first {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

    .top {
      width: 1280px;
      display: flex;
      justify-content: space-between;

      div {
        div {
          text-align: left;

          &:nth-child(1) {
            margin-top: 78px;
            font-size: 48px;
            color: #2d3033;
          }

          &:nth-child(2) {
            font-size: 48px;
            color: #2d3033;
            margin-bottom: 15px;
          }

          &.content1 {
            font-size: 14px;
            color: #262a47;
            margin-bottom: 5px;
          }

          &.content2 {
            width: 699px;
            font-size: 14px;
            line-height: 30px;
            margin-bottom: 40px;
            color: #262a47;
          }
        }

        button {
          float: left;
          width: 160px;
          height: 40px;

          font-size: 14px;
          color: #ffffff;
          background: #3269ff;
          border-radius: 6px 6px 6px 6px;
          border: 0;
          opacity: 1;
        }
      }

      img {
        margin-top: 51px;
      }
    }

    .area {
      .arealist {
        position: relative;
        width: 411px;
        height: 451px;
        background: #ffffff;
        box-shadow: 0px 0px 16px 1px #e0e8f5;
        border-radius: 20px 20px 20px 20px;
        margin-bottom: 5px;
        padding: 50px 27px 0;
        text-align: left;
        box-sizing: border-box;

        ul {
          display: flex;
          flex-direction: column;
          font-size: 12px;
          color: #3d485d;

          li {
            position: relative;
            margin-bottom: 15px;
            height: 18px;
            line-height: 18px;

            .yuan {
              position: absolute;
              top: 0;
              left: 0;
              width: 18px;
              height: 18px;
              border-radius: 50%;
              background-color: rgba(255, 128, 26, 0.1);
            }

            div {
              display: inline-block;
            }

            span {
              margin-left: 27px;

              line-height: 18px;
            }
          }
        }
      }

      .area1 {
        position: absolute;
        top: 0;
        left: 0;
        background: no-repeat;
        width: 110px;
        height: 30px;
        color: #ffffff;
        font-size: 14px;
        line-height: 30px;
        text-align: center;

        div {
          font-size: 18px;
          font-weight: bold;
          color: #3d485d;
        }
      }

      .area2 {
        font-size: 22px;
        color: #0f001a;
        padding-bottom: 25px;
        border-bottom: 1px solid #e8eaf2;
        margin-bottom: 25px;
      }
    }
  }

  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 1300px;
  }

  .two {
    padding-top: 119px;
    padding-bottom: 170px;
    display: flex;
    justify-content: center;

    .area {
      display: flex;
      justify-content: center;

      .title {
        font-size: 18px;
        font-weight: bold;
        color: #3d485d;
        text-align: left;
        margin-bottom: 42px;
      }

      .pic {
        width: 75px;
        height: 75px;
        line-height: 105px;
        text-align: center;
        background: #ffffff;
        border-radius: 21px 21px 21px 21px;
        margin-bottom: 8px;

        img {
          width: 40px;
        }
      }

      .area1 {
        width: 348px;
        height: 516px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 20px 20px 20px 20px;
        margin-right: 15px;
        padding: 36px;
        box-sizing: border-box;

        li {
          margin-right: 75px;

          &:nth-child(2n) {
            margin-right: 0;
          }
        }
      }

      .area3 {
        width: 448px;
        height: 251px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 20px 20px 20px 20px;
        margin-bottom: 15px;
        padding: 36px;
        box-sizing: border-box;

        li {
          margin-right: 56px;

          &:nth-child(3n) {
            margin-right: 0;
          }
        }
      }

      ul {
        display: flex;

        li {
          width: 75px;

          margin-bottom: 30px;
        }
      }
    }
  }

  .mode {
    .modeLis {
      width: 305px;
      height: 183px;
      background: #f3f5f7;
      border-radius: 6px 6px 6px 6px;
      overflow: hidden;
      padding: 30px 20px;
      text-align: left;
      box-sizing: border-box;
      cursor: pointer;

      .l1 {
        cursor: pointer;
        height: 30px;
        box-sizing: border-box;

        img {
          width: 30px;
          height: 100%;
        }

        // i {
        //   color: #3269ff;
        // }
      }

      .l2 {
        cursor: pointer;
        margin: 14px 0 10px 0;
        font-size: 18px;
        color: #282938;
      }

      .l3 {
        cursor: pointer;
        font-size: 12px;
        line-height: 24px;
      }
    }

    li.serviceActive {
      background: #3269ff;
      color: #fff;

      .l2 {
        color: #fff;
      }

      .l1 {
        i {
          color: #fff;
        }
      }
    }

    .analyse {
      margin: 15px auto;
      width: 1280px;
      // height: 715px;
      color: #333;
      background: rgba(51, 105, 249, 0.05);
      border-radius: 6px 6px 6px 6px;
      padding: 35px 137px 86px;
      box-sizing: border-box;

      .analyse1 {
        font-size: 24px;

        color: #282938;
        margin-bottom: 20px;
      }

      .analyse2 {
        font-size: 14px;
        color: #666666;
        margin-bottom: 40px;
      }

      .analyse3 {
        ul {
          display: flex;
          flex-wrap: wrap;
          overflow: hidden;

          li {
            width: 237px;
            height: 221px;
            font-size: 12px;
            margin-right: 19px;
            margin-bottom: 19px;
            background: #ffffff;
            border-radius: 8px 8px 8px 8px;
            padding: 30px 20px;
            box-sizing: border-box;

            img {
              width: 40px;
            }

            div {
              &:nth-child(1) {
                text-align: center;
                margin-bottom: 30px;
              }
            }

            &:nth-child(4n) {
              margin-right: 0;
            }
          }
        }

        .analyse3Select1 {
          display: flex;

          img {
            width: 493px;
            height: 460px;
          }

          .select1Div {
            display: flex;
            flex-wrap: wrap;

            .select1List {
              width: 237px;
              height: 221px;
              background: #ffffff;
              border-radius: 8px 8px 8px 8px;
              opacity: 1;
              margin-bottom: 18px;
              margin-left: 18px;
              padding: 40px 0 0 30px;

              div {
                text-align: left;
              }

              .num {
                line-height: 1;
                font-size: 32px;
                color: #3269ff;
                margin-bottom: 14px;

                span {
                  font-size: 20px;
                }
              }

              .txt {
                font-size: 20px;
                color: #666666;
                margin-bottom: 15px;
              }

              img {
                width: 72px;
                height: 72px;
              }
            }
          }
        }

        .analyse3Select2 {
          width: 100%;
          height: 659px;
          background-color: #fff;
          padding: 40px 76px;

          div {
            width: 537px;
            margin: auto;
            margin-bottom: 40px;
          }

          ul {
            li {
              width: 406px;
              height: 230px;
              padding: 0;

              img {
                width: 100%;
              }
            }
          }
        }

        .analyse3Select3 {
          display: flex;
          width: 100%;
          height: 460px;
          background-color: #fff;
          padding: 40px 76px;

          .select3 {
            margin-right: 60px;
            text-align: left;
            color: #628cfd;

            .title {
              font-size: 20px;
              margin-bottom: 10px;
            }

            .introduce {
              font-size: 14px;
              margin-bottom: 30px;
            }

            .txt {
              color: #666666;
              font-size: 14px;
            }
          }

          img {
            width: 504px;
            height: 258px;
          }
        }
      }
    }
  }

  .contact {
    .message {
      width: 580px;
      height: 691px;
      background: #ffffff;
      box-shadow: 0px 2px 24px 1px rgba(0, 0, 0, 0.08);
      border-radius: 0px 0px 0px 0px;
      margin: 40px auto 115px;
      padding: 51px 67px;
      box-sizing: border-box;
    }

    .contactms {
      margin-top: -10px;
    }
  }
}
</style>

