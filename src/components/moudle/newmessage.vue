<template>
  <div class="newMessage">
    <ul class="grid-three">
      <li v-for="(item, index) in newsList" :key="index">
        <img
          :src="item.img ? item.img : ''"
          alt=""
          srcset=""
          @click="newMessage(item)"
        />
        <div class="content">
          <span v-if="item.type">{{ item.type }}</span>
          <span v-if="item.type">{{ item.showDate }}</span>
          <div
            class="newsTitle mle"
            v-if="item.title"
            @click="newMessage(item)"
          >
            {{ item.title }}
          </div>
          <div class="newsTitle mle" v-if="item.name" @click="newMessage(item)">
            {{ item.name }}
          </div>
          <div
            class="newsIntroduce mle"
            v-if="item.overview"
            @click="newMessage(item)"
          >
            {{ item.overview }}
          </div>
          <div
            class="newsIntroduce sle"
            v-if="item.address"
            @click="getmap(item.address)"
          >
            <svg-icon icon-class="address"></svg-icon>
            {{ item.address }}
          </div>

          <div class="newsIntroduce" v-if="item.phone">
            <a :href="'tel:' + item?.phone" style="color: #1463bf">
              <svg-icon icon-class="phone"></svg-icon>
              {{ item.phone }}
            </a>
          </div>
          <div class="more" v-if="item.label">
            <div class="more-lable">
              <span>{{ item.label[0] }}</span>
              <!--              <span-->
              <!--                v-for="(modelList, index) in item.label"-->
              <!--                :key="index"-->
              <!--                class="model"-->
              <!--              >{{modelList}}</span>-->
            </div>
          </div>
        </div>
        <div class="office-btn-list" v-if="concat">
          <div class="office-btn-details" @click="newMessage(item)">
            <svg-icon icon-class="list"></svg-icon>
            <span>{{ $t("pro-Bono.tipTxt.list") }}</span>
          </div>
          <div class="office-btn-tel">
            <a :href="'tel:' + item?.phone" style="color: #1463bf">
              <svg-icon icon-class="phone"></svg-icon>
              <span>{{ $t("pro-Bono.tipTxt.phone") }}</span>
            </a>
          </div>
          <span class="seeMore" v-if="read">{{
            $t("pro-Bono.tipTxt.read")
          }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import router from "@/router";
export default {
  props: ["newsList", "read", "concat"],
  methods: {
    newMessage(item) {
      this.$emit("newMessage", item);
    },
    getmap(address) {
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: address }, function (results, status) {
        if (status === "OK") {
          console.log(results);
          var latitude = results[0].geometry.location.lat();
          var longitude = results[0].geometry.location.lng();
          router.push({
            path: "/map",
            query: { lat: latitude, lng: longitude, name: address },
          });
          // console.log("Latitude: " + latitude + ", Longitude: " + longitude);
        } else {
          console.log("Geocoding failed: " + status);
        }
      });
      console.log(geocoder);
    },
  },
  //   mounted () {
  //     console.log(this.newsList)
  //   }
};
</script>

<style lang="less" scoped>
.newMessage {
  width: 100%;
  max-width: 1280px;

  ul {
    width: 100%;

    li {
      width: 100%;
      background: #ffffff;
      box-shadow: 0px 0px 16px 1px #e1e9f5;
      border-radius: 4px;
      //margin-bottom: 40px;
      overflow: hidden;
      box-sizing: border-box;
      cursor: pointer;
      border: solid 1px #e5e5e5;
      //margin-right: 20px;
      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }

      .content {
        text-align: left;
        padding: 16px;

        span {
          font-size: 12px;
          display: inline-block;
          box-sizing: border-box;

          &:nth-child(1) {
            //width: 69px;
            //height: 25px;
            padding: 0px 5px;
            color: #ffffff;
            background: var(--theme_color);
            line-height: 25px;
            text-align: center;
            border-radius: 4px 4px 4px 4px;
            margin-right: 14px;
          }

          &:nth-child(2) {
            color: #959595;
          }
        }

        .newsTitle {
          font-size: 18px;
          margin: 10px 0 10px 0;
          overflow: hidden;
          height: 46px;
        }

        .newsIntroduce {
          //height: 44px;
          font-size: 14px;
          line-height: 22px;
          color: var(--txt_color);
          overflow: hidden;

          svg {
            margin-right: 10px;
          }
        }

        .more {
          //display: flex;
          //justify-content: space-between;
          margin-top: 20px;

          .more-lable {
            display: flex;
          }

          .model {
            display: inline-block;
            width: 45%;
            height: 24px;
            text-align: center;
            line-height: 24px;
            background: #f7f7f7;
            border-radius: 16px 16px 16px 16px;
            opacity: 1;
            color: #999999;
            border: 1px solid #c1c7db;
            margin-right: 10px;
            margin-bottom: 5px;
            overflow: hidden;
            text-overflow: ellipsis; /* 超出部分省略号 */
            word-break: break-all; /* break-all(允许在单词内换行。) */
            -webkit-box-orient: vertical; /* 设置或检索伸缩盒对象的子元素的排列方式 */
            -webkit-line-clamp: 1; /* 显示的行数 */
          }

          .seeMore {
            width: 100%;
            text-align: center;
            margin-top: 10px;
            //margin-bottom: 10px;
            font-size: 18px;
            // margin-left: 82px;
            color: var(--txt_color);
            cursor: pointer;
          }
        }
      }
      .office-btn-list {
        display: flex;
        .office-btn-details {
          background-color: #eef1f6;
          color: #273b58;
          fill: #273b58;
          span {
            color: #273b58;
          }
        }
        .office-btn-details,
        .office-btn-tel {
          font-size: 14px;
          width: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 16px;
          line-height: 44px;
          box-sizing: border-box;
          svg {
            margin-right: 8px;
          }
        }
      }
    }

    li:hover {
      box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
<style lang="less" scoped>
@media screen and (max-width: 800px) {
  .newMessage {
    li {
      //width: 43% !important;
      //height: 380px !important;
      //img {
      //  height: 180px !important;
      //}

      //.content {
      //  padding: 0px 5px !important;
      //}
    }
  }
}
</style>
