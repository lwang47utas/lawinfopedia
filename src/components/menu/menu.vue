<template>
  <el-container class="main flx-align-center">
    <el-header
      class="header content"
      :class="popclass !== 'index' ? 'shadow' : ''"
      :style="{ background: popclass !== 'index' ? '#fff' : 'transparent' }"
    >

      <div class="hearder-content">
        <div class="main-name">
          <router-link :to="logo.path" @click.native="setPopClass(logo)">
            <span :style="{ color: popclass === 'index' ? '#fff' : '#333'}">LAWYERONCLOUD</span>
          </router-link>
        </div>
       <!--  移动端      -->
        <div class="hearder-svg">
          <el-dropdown>
           <span class="el-dropdown-link">
              <svg-icon class-name="hearderIcon" :icon-class="popclass === 'index' ? 'list-white' : 'list-black'"></svg-icon>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="(item, index) in menus" :key="index" divided>

                {{ item.name }}
                <li v-for="(e, i) in item.children" :key="i">
                  <router-link active-class="active" :to="e.path" class="rout"
                               @click.native="setPopClass(item)">

                    <span>{{ e.title }}</span>
                  </router-link>
                </li>

              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <ul class="main-item">

          <li v-for="(item, index) in menus" :key="index">
            <el-dropdown
              class="rout"
              :style="{ color: popclass === 'index' ? '#fff' : '#333' }"
            >
              <span class="el-dropdown-link">
                {{ item.name }}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown"

              >
                <el-dropdown-item v-for="(e, i) in item.children" :key="i">
                  <router-link active-class="active" :to="e.path" class="rout"
                               @click.native="setPopClass(e)">

                    <span>{{ e.title }}</span>
                  </router-link>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
        </ul>
      </div>

      <!--      <div-->
      <!--        class="login"-->
      <!--        :style="{ color: popclass === 'index' ? '#fff' : '#333' }"-->
      <!--      >-->
      <!--        &lt;!&ndash; 注册登陆 &ndash;&gt;-->
      <!--      </div>-->
    </el-header>
    <!--    <img src="../../assets/image/index/banner-desktop.webp" alt="">-->

    <el-main class="view content">
      <router-view :key="$route.fullPath"></router-view>
    </el-main>
    <el-footer class="footer">
      <div v-if="popclass !== 'index'">
        <footer-com></footer-com>
      </div>
    </el-footer>
  </el-container>
</template>
<script>
import footerCom from '../footerCom/footerCom.vue'
// import { getMaxTemp, getMinTemp, getRain, getWind } from "@/api/alert";

export default {
  components: { footerCom },

  props: ['logo', 'menus', 'isBellAlert', 'radarStateAlert'],
  data () {
    return {
      popclass: localStorage.getItem('changeRoute')
    }
  },
  methods: {
    setPopClass (item) {
      this.popclass = item.path
      if (item.path === '/index') {
        this.popclass = 'index'
      }
      localStorage.setItem('changeRoute', item)
    },
    closePopClass (item) {
      this.selectName = item.name
      this.popclass = false
    },
    goNew (url) {
      window.open(url, '_blank')
    }
  },
  mounted () {
    this.popclass = this.$route.name
  },
  watch: {
    $route (to, from) {
      this.popclass = to.name
    }
  }
  // beforeDestroy() {
  //   this.getSuperWeather && clearInterval(this.getSuperWeather);
  //   this.getSuperWeather = null;
  // },
  // computed: {
  //   maxNumAlert() {
  //     return this.superWeather.length !== 0;
  //   },
  // },
}
</script>

<style lang="less" scoped>
@import "./menu.less";

.main {
  position: relative;
  @media screen and (min-width: 800px) {
    .hearder-svg {
      display: none;
    }
  }
  @media screen and (max-width: 800px) {
    .hearder-svg {
      display: block;
    }

    .main-item {
      display: none !important;
    }
  }

  // .content{
  //       padding: 0 16%;
  // }

  .header {
    //position: absolute;
    //top: 0;
    width: 100%;
    height: @head_height !important;
    line-height: @head_height;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 900;

    img {
      margin-left: 240px;
      vertical-align: middle;
      // width: 120px;
      // height: 50px;
    }

    .hearder-svg {
      height: 100%;
      line-height: @head_height;

      .hearderIcon {
        width: 32px;
        height: 32px;
        color: #ffffff;
      }
    }

    .hearder-content {
      display: flex;
      justify-content: space-between;
      max-width: 1700px;
      width: 100%;
    }

    .main-name {
      a {
        font-size: 30px;
        color: #fff;
        font-weight: bold;
      }
      @media screen and (max-width: 800px){
       a{
         font-size: 26px;
       }
      }
    }

    .main-item {
      //margin-left: 190px;
      //width: 40%;
      //flex: 1;
      display: flex;
      justify-content: space-between;
      font-size: 24px;
      font-weight: bold;


      li {


        div {
          display: inline-block;
          margin-right: 40px;
        }

        img {
          margin-left: 4px;
        }

        // margin-right: 45px;
      }
    }

    .topName {
      &:hover {
        cursor: pointer;
      }
    }

    .login {
      margin-left: 292px;
    }

    .active {
      color: #3269ff !important;
      //border-bottom: 2px solid #3269ff;
      box-sizing: border-box;
    }
  }

  .shadow {
    box-shadow: 0px 4px 8px 1px rgba(0, 0, 0, 0.08);
  }

  // el-main{
  //   position: relative;
  // }
  // .view{
  //   position: relative;
  //   height: 100%;
  // }
  .el-main {
    padding: 0;
    display: flex;
    width: 100%;
    justify-content: center;
    //background-color: #f3f5f7;
  }

  .footer {
    display: flex;
    z-index: 1000;
    width: 100%;
    padding: 0;

    div {
      width: 100%;
    }
  }
}
</style>
<style lang="less">
.el-dropdown {
  font-size: 18px;
}
.el-dropdown-menu {
  font-size: 20px !important;

  .el-dropdown-menu__item {
    a {
      text-decoration: none;
      color: var(--txt_color) !important;
    }
  }
}

</style>
