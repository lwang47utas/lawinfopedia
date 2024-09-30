<template>
  <!-- 底部 -->
  <div id="footer">
    <!--<div class="logo">LAWYERONCLOUD</div>
    <div class="main">
      <a href="">{{ $t("footer.link1") }}</a> |
      <a href="">{{ $t("footer.link2") }} </a> |
      <a href=""> {{ $t("footer.link3") }}</a> |
      <a href="">{{ $t("footer.link4") }}</a>
    </div>-->
    <div class="footer-box">
      <div class="footer-select">
        <a class="footer-logo" href="/">
          <img height="100%" src="@/assets/image/logoname.png" />
        </a>
        <div class="footer-menu">
          <a class="fm-item" href="/">About Us</a>
          <a class="fm-item" href="/">Disclaimer</a
          ><a class="fm-item" href="/">Privacy Policy</a>
          <a class="fm-item" href="/">Terms and Conditions</a>
        </div>
      </div>
      <div class="footer-des">
        All content contained on lawinfopedia.com, including but not limited to
        images, text, graphics, and information, are for general informational
        purposes only. The information displayed on this site is not intended or
        implied to replace professional legal or financial help. Neither
        professional nor direct legal service is provided on this site.
        Lawinfopedia.com should only be used as a resource for legal
        issue-related information but not a substitute for professional lawyers
        or legal organizations.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        [
          {
            type: "new",
            name: "“烽火台”灾害监控预警平台",
            // url: 'http://221.122.67.142:3002/fenghuotai/'
          },
          {
            name: "应急减灾",
            url: "/index/emergency",
          },
          {
            name: "公司简介",
            url: "/about",
          },
          // { name: '', url: '' }
        ],
        [
          {
            name: "“观天”气象可视化分析平台",
            url: "",
          },
          {
            name: "能源电力",
            url: "/index/power",
          },
          {
            name: "工作机会",
            url: "",
          },
          // { name: '', url: '' }
        ],
        [
          {
            type: "new",
            name: "“百川”气象大数据服务平台",
            // url: 'http://221.122.67.142:3002/bcqx/home'
          },
          {
            name: "交通运输",
            url: "/index/transportation",
          },
          {
            name: "",
            url: "",
          },
          // { name: '', url: '' }
        ],
        [
          {
            name: "“司空”天气图制作平台",
            url: "",
          },
          {
            name: "气象应用",
            url: "/index/weather-application",
          },
          {
            name: "",
            url: "",
          },
          // { name: '', url: '' }
        ],
      ],
    };
  },
  methods: {
    toGo(url) {
      if (url) {
        this.$router.push(url);
      }
    },
  },
};
</script>

<style lang="less" scoped>
#footer {
  width: 100%;
  background-color: #0e2234;
  border-radius: 1px;

  /*
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  color: #ffffff;
  background-color: #0e2234;
  box-sizing: border-box;
  padding: 40px;
  color: #eef4ff;*/
}

.footer-box {
  max-width: 1132px;
  margin: 0 auto;
  padding: 32px 20px 28px;
}
.footer-select {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 4px;
  margin-bottom: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.footer-logo {
  height: 45px;
  width: 100px;
}
@media screen and (min-width: 321px) {
  .header-logo,
  .footer-logo {
    height: 36px;
    width: 100px;
  }
}
.footer-menu {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 32px;
  color: #f8f9fb;
}
.footer-des {
  font-size: 15px;
  line-height: 22px;
  color: #f8f9fb;
  opacity: 0.3;
}
.fm-item {
  font-size: 15px;
  color: #f8f9fb;
  opacity: 0.65;
  margin-right: 20px;
  margin-bottom: 20px;
  text-align: left;
}
.fm-item:hover {
  color: #fff;
}
a {
  display: block;
  text-decoration: none;
  color: #333;
}
@media screen and (min-width: 901px) {
  .footer-box {
    padding: 64px 20px 36px;
  }
  .footer-select {
    flex-direction: row;
    padding-bottom: 20px;
    margin-bottom: 40px;
  }

  .footer-logo {
    height: 47px;
  }
  .footer-menu {
    flex-direction: row;
    margin-top: 12px;
  }
  .fm-item {
    text-align: none;
  }
}
</style>
