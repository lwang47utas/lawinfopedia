<template>
  <el-container class="main flx-align-center">
    <el-header
      class="header content"
      :class="popclass === 'index' ? 'white' : 'shadow'"
      :style="{ background: popclass !== 'index' ? '#fff' : 'transparent' }"
    >

      <div class="hearder-content">
        <div class="main-name">
          <router-link :to="logo.path" @click.native="setPopClass(logo)">
            <span :style="{ color: popclass === 'index' ? '#fff' : '#333'}">LAWYERONCLOUD</span>
          </router-link>
        </div>
        <div class="main-menu">
        <!--  移动端      -->
        <div class="hearder-svg">
          <el-popover
            placement="bottom"
            width="400"
            trigger="click">
            <svg-icon slot="reference" class-name="hearderIcon" :icon-class="popclass === 'index' ? 'list' : 'list-black'" @click="showMenu"></svg-icon>
            <el-menu  :router="true" :text-color="popclass === 'index' ? '#fff' : '#333'"
                      class="el-menu-demo" mode="horizontal" >
              <el-submenu v-for="(item, index) in menus" :key="index" :index="item.path">
                <template slot="title"> {{ item.name }}</template>
                <el-menu-item class="item-children" v-for="(e, i) in item.children" :key="i"  :index="e.path">{{ e.name }}</el-menu-item>
              </el-submenu>
              <el-menu-item index="/answers">Legal Q & A</el-menu-item>

            </el-menu>
          </el-popover>
        </div>
        <ul class="main-item">
          <el-menu  :router="true" :text-color="popclass === 'index' ? '#fff' : '#333'"
                    class="el-menu-demo" mode="horizontal" >
            <el-submenu v-for="(item, index) in menus" :key="index" :index="item.path">
              <template slot="title"> {{ item.name }}</template>
                   <el-menu-item class="item-children" v-for="(e, i) in item.children" :key="i"  :index="e.path">{{ e.name }}</el-menu-item>
            </el-submenu>
            <el-menu-item index="/answers">Legal Q & A</el-menu-item>

          </el-menu>
        </ul>
        <el-select v-model="langValue" @change="langChange" placeholder="请选择">
          <el-option
            label="Español"
            value="es">
          </el-option>
          <el-option
            label="English"
            value="en">
          </el-option>
        </el-select>
        </div>
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
      popclass: localStorage.getItem('changeRoute'),
      langValue: localStorage.getItem('lawLanguage') || 'en',
      isShowMenu: false
    }
  },
  methods: {
    // 切换菜单展示模式
    showMenu () {
      this.isShowMenu = !this.isShowMenu
    },
    // 切换语言
    langChange () {
      localStorage.setItem('lawLanguage', this.langValue)
      this.$i18n.locale = this.langValue
      this.$router.go({ path: this.$route.fullPath })
    },
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
      margin-right: 10px;
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

      @media screen and (max-width: 800px) {
        a {
          font-size: 26px;
        }
      }
    }
.main-menu{
  display: flex;
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

.main{
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
  .el-select {
    width: 100px !important;
  }
  @media screen and (max-width: 800px){
    .el-select {
      width: 70px !important;
    }

    .el-input--suffix .el-input__inner {
      padding-right: 20px;
      padding:0 5px;
    }
  }
}
.el-submenu__title {
  font-size: 16px;
  transition: border-color 0s, background-color 0s, color 0s;
}

.el-menu-demo {
  background: transparent !important;
}


.el-menu-item {
  //color: #66b1ff !important;
  border-bottom: 0;
  &:hover {
    background-color: transparent !important;
  }
}

.el-menu--popup {
  .el-submenu__title {
    color: #66b1ff !important;

    &:hover {
      background-color: #ecf5ff !important;
    }
  }
}
.el-menu.el-menu--horizontal{
  border-bottom: 0;
}

.el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background-color: transparent !important;
}
.el-menu--horizontal>.el-submenu.is-active .el-submenu__title{
  border-bottom: 0;

}
.el-menu--horizontal>.el-menu-item{
  height: 90px;
  line-height: 90px;
}
.el-menu--horizontal>.el-submenu .el-submenu__title {
  height: 90px;
  line-height: 90px;
}
.white {
  .el-submenu__title {
    color: #ffffff !important;
  }
  .el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    outline: 0;
    color: #ffffff;
  }
  .el-menu-item.is-active{
    color: #ffffff;
    border-bottom: 0;
  }
}

.item-children{
  color: #000 !important;
}
.el-popover{
  width: 210px !important;
  top: 80px !important;
  right: 0 !important;
  .el-submenu__title{
    color: #000 !important;
  }
  .el-menu--horizontal>.el-menu-item{
    height: 50px;
    line-height: 50px;
  }
  .el-menu--horizontal>.el-submenu .el-submenu__title {
    height: 50px;
    line-height: 50px;
  }
}
</style>
