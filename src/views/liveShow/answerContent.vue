<template>
  <div id="newsContent">
    <div class="center">
      <div class="contentTxt">
<!--        <div class="title">-->
<!--          {{ newMessage?.title }}-->
<!--        </div>-->
<!--     -->
<!--        &lt;!&ndash; <div class="summary" v-if="newMessage.summary">-->
<!--        摘要-->
<!--      </div> &ndash;&gt;-->
<!--        <div-->
<!--          class="lianjie"-->
<!--        >-->
<!--          {{ newMessage?.overview }}-->
<!--        </div>-->
<!--        <div-->
<!--          class="vedio"-->
<!--        >-->
<!--          <img :src="newMessage?.img" alt="" srcset="">-->
<!--        </div>-->
        <div
          class="sconcent"
          v-html="newMessage?.text"
        >
          <!--            {{ newMessage.text }}-->
        </div>
      </div>

    </div>

  </div>
</template>

<script>

import { getIdPetArticle } from '@/api/qa.js'

export default {

  name: 'newsContent',
  data () {
    return {
      newsId: null,
      newMessage: {},
      msgList: [],
      petList: [
        {},
        {
          image: '',
          type: '功能上线',
          date: '2022-06-28',
          title: '集中式光伏发电功率预测图层正式上线',
          introduce:
            '弘象科技正式推出面向集中式光伏的全国高时空分辨让商业掌控天气，基于气象大数据平台和精准气象预报技术，为能源、应急、特种行业等降低天气因素带来的风险、提高运营管理效率，提供精细化、可定制的气象服务产品。',
          model: ['太阳能', '天气与环境'],
          url: '/news/content'
        }
      ],
      mouseindex: null
    }
  },
  async mounted () {
    this.newsId = this.$route.params.id
    this.getPetArticleFn()
  },
  methods: {
    getPetArticleFn () {
      getIdPetArticle({ id: this.$route.params.id, type: 'lawyer' }
      ).then(res => {
        // console.log(res)
        this.newMessage = res.data
      })
    }

  }
}
</script>

<style lang="less" scoped>
#newsContent {
  display: flex;
  justify-content: center;
  line-height: 1;
  padding-top: 20px;
  width: 100%;

  .center {
    text-align: left;
    width: 100%;
    max-width: 1300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    // min-width: 950px;
    font-size: 16px;
    color: #282938;

    .contentTxt {
      max-width: 900px;
      width: 100%;
    }

    .url {
      display: flex;
      width: 100%;
      font-size: 14px;
      line-height: 1;
      padding: 4px 0 24px 0;
      border-bottom: 1px solid #dddfe1;
    }

    .title {

      line-height: 60px;
      font-size: 44px;
      font-weight: 500;
    }

    .info {
      font-size: 14px;
      margin-bottom: 40px;

      .auto {
        margin-right: 30px;
      }
    }

    // .summary {
    //   font-weight: bold;
    //   margin-bottom: 20px;
    // }
    .lianjie {
      // font-weight: bold;
      text-align: center;
      color: #5f6464;
      font-size: 20px;
      margin-bottom: 40px;
      font-style: italic;
    }

    .contentTxt {
      line-height: 40px;
      //white-space: pre-line;
      // white-space:pre
      .stitle {
        font-weight: bold;
        margin-bottom: 10px;
        margin-top: 32px;
      }

      .sconcent {
        // text-indent: 2em;
        margin-bottom: 32px;
      }

      .spicture {
        display: flex;
        justify-content: center;
      }

      img {
        width: 70%;
        margin-left: 15%;
        // margin-top: -18px;
        // margin-bottom: 32px;
      }

      .smallPic {
        img {
          width: 40%;
          margin-left: 30%;
        }
      }
    }

    .moretitle {
      font-weight: bold;
      margin: 20px 0;
    }

    .moreUrl {
      text-indent: 2em;
      margin-bottom: 30px;
      line-height: 36px;
    }

    .pic {
      width: 80%;
      max-width: 1280px;
      //height: 624px;
      background: #f7f7f7;
      border-radius: 0px 0px 0px 0px;
      margin-bottom: 70px;
    }

    .share {
      font-size: 14px;
      margin-bottom: 37px;
    }

    .professional {
      border-top: 1px solid #dddfe1;
      border-bottom: 1px solid #dddfe1;
      padding-top: 24px;

      .ztitle {
        font-size: 18px;
        font-weight: bold;
        color: #282938;
        margin-left: 6px;
        margin-bottom: 24px;
      }

      .zcontent {
        display: flex;
        justify-content: center;
        margin-bottom: 56px;

        .zpic {
          flex-shrink: 0;
          width: 140px;
          height: 140px;
          border-radius: 50% 50%;
          // background: #ededed;
          margin-right: 60px;
        }

        .ztxt {
          width: 848px;

          .zname {
            font-size: 20px;
            color: #3269ff;
            margin-bottom: 20px;
          }

          .zintroduce {
            font-size: 16px;
            line-height: 36px;
            overflow: hidden;
            text-overflow: ellipsis; /* 超出部分省略号 */
            word-break: break-all; /* break-all(允许在单词内换行。) */
            display: -webkit-box; /* 对象作为伸缩盒子模型显示 */
            -webkit-box-orient: vertical; /* 设置或检索伸缩盒对象的子元素的排列方式 */
            -webkit-line-clamp: 3; /* 显示的行数 */
          }
        }
      }
    }

    .sconcent {
      line-height: 1.5;
      font-size: 18px;

      p:not([class*=c-]) {
        letter-spacing: -.014em;
        margin-bottom: 1.3em;
        margin-top: 1.3em;
      }

      .article_content {
        ul {
          list-style: disc !important;

          li {
            list-style-type: disc !important;
          }
        }
      }

    }
  }
}

</style>
<style lang="less">
@media screen and (max-width: 1000px) {
  #newsContent {
    flex-direction:  column-reverse;
    //padding: 40px 15px;
    //img{
    //  w
    //}
    h1 {
      font-size: 20px;
      line-height: 24px;
      margin: 15px 0;
    }
    h2{
      font-size: 18px;
      margin: 10px 0;
    }
    p{
      font-size: 16px;
      line-height: 20px;
    }
    .el-breadcrumb{
      font-size: 16px;
      //line-height: 1.4;
    }
    .center{
      .contentTxt{
        .title{
          font-size: 24px;
          line-height: 30px;
        }
      }
    }

    .article_content {
      p {
        img {
          width: 100% !important;
        }
      }
    }
  }
}
</style>
