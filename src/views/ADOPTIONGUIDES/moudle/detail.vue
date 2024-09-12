<template>
  <div id="detail">

    <div class="detail">
      <div class="detail-title">{{ detailData?.name }}</div>
      <div><img :src="detailData?.img" alt=""></div>
      <div class="detail-message">
        <div>
          <svg-icon icon-class="address"></svg-icon>
          <span>{{ detailData?.address }}</span></div>
        <div>
          <svg-icon icon-class="phone"></svg-icon>
          <span>{{ detailData?.phone }}</span></div>
      </div>
      <div class="detail-concent" v-if="detailData.detaileAddress&&detailData.detaileAddress.length>0">
        <h3>Contact & Map</h3>
        <svg-icon icon-class="address"></svg-icon>
        <span>{{ detailData?.detaileAddress[0] }}</span>
      </div>
      <div class="detail-concent" v-if="detailData.caseTypes&&detailData.caseTypes.length>0">
        <h3>Case Types</h3>
        <div>
          <ul>
            <li class="sle" v-for="(item,index) in detailData?.caseTypes" :key="index">{{ item }}</li>
          </ul>
        </div>
      </div>
      <div class="detail-concent" v-if="detailData.caseRestrictions">
        <h3>Case Restrictions</h3>
        <svg-icon icon-class="address"></svg-icon>
        <span>{{ detailData?.caseRestrictions }}</span>
      </div>
      <div class="detail-concent" v-if="detailData.servicesProvided && detailData.servicesProvided.length>0">
        <h3>Services Provided</h3>
        <div>
          <ul>
            <li class="sle" v-for="(item,index) in detailData?.servicesProvided" :key="index">{{ item }}</li>
          </ul>
        </div>
      </div>
      <div class="detail-concent" v-if="detailData.aboutThisOffice">
        <h3>About This Office</h3>
        <div class="detail-concent-about">{{ detailData.aboutThisOffice ?? '--' }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getInformation } from '../../../api/help'

export default {
  data () {
    return {
      detailData: {}
    }
  },
  mounted () {

    getInformation({ oid: this.$route.params.oid.split('-')[0] }).then(res => {
      this.detailData = res.data[0]
      localStorage.setItem('layId', this.detailData.id)
      this.$emit('changeState' , res.data[0])
    })
  },

}
</script>

<style scoped lang="less">
#detail {
  text-align: left;

  .detail {
    padding-top: 20px;
    svg {
      color: var(--txt_color);
      width: 16px;
      height: 16px;
      margin-right: 12px;
      vertical-align:-0.1em;
    }
    .detail-title {
      font-size: 24px;
      line-height: 1.2;
      font-weight: 600;
    }

    img {
      width: 500px;
      margin: 20px 0 20px;

    }

    .detail-message {
      font-size: 16px;

      margin-bottom: 20px;

      div {
        margin-bottom: 8px;
      }
    }

    .detail-concent {
      padding: 20px 0;
      border-top: 1px solid #e6eaf0;

      h3 {
        font-size: 24px;
        margin-bottom: 20px;
        font-weight: 600;
      }

      svg {
        margin-right: 10px;
      }

      ul {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        list-style: inherit;
        li {
          //display: inline-block;
          width: 30%;
          font-size: 16px;
          line-height: 20px;
          margin-bottom: 12px;
          padding: 0px 10px;
          list-style-type: disc;
          list-style-position:inside;
          text-align: left;
        }
      }

      span {
        font-size: 16px;

      }

      .detail-concent-about {
        font-size: 16px;
        text-indent: 2em;
        line-height: 1.4;
        color: #666666;
      }
    }
  }
}
</style>
<style lang="less">
#detail{
  @media screen and (max-width: 800px){
    .detail-concent{
      ul{
        li{
          width: 40% !important;
        }

      }
    }
  }

}
</style>
