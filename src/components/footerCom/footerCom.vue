<template>
  <!-- 底部 -->
  <div id="footer">

    <div class="logo">
      LAWYERONCLOUD
    </div>
    <div class="main">
      <a href="">{{ $t('footer.link1') }}</a> |
      <a href="">{{ $t('footer.link2') }} </a> |
      <a href=""> {{ $t('footer.link3') }}</a> |
      <a href="">{{ $t('footer.link4') }}</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        [
          {
            type: 'new',
            name: '“烽火台”灾害监控预警平台'
            // url: 'http://221.122.67.142:3002/fenghuotai/'
          },
          {
            name: '应急减灾',
            url: '/index/emergency'
          },
          {
            name: '公司简介',
            url: '/about'
          }
          // { name: '', url: '' }
        ],
        [
          {
            name: '“观天”气象可视化分析平台',
            url: ''
          },
          {
            name: '能源电力',
            url: '/index/power'
          },
          {
            name: '工作机会',
            url: ''
          }
          // { name: '', url: '' }
        ],
        [
          {
            type: 'new',
            name: '“百川”气象大数据服务平台'
            // url: 'http://221.122.67.142:3002/bcqx/home'
          },
          {
            name: '交通运输',
            url: '/index/transportation'
          },
          {
            name: '',
            url: ''
          }
          // { name: '', url: '' }
        ],
        [
          {
            name: '“司空”天气图制作平台',
            url: ''
          },
          {
            name: '气象应用',
            url: '/index/weather-application'
          },
          {
            name: '',
            url: ''
          }
          // { name: '', url: '' }
        ]
      ]
    }
  },
  methods: {
    toGo (url) {
      if (url) {
        this.$router.push(url)
      }
    }
  }
}
</script>

<style lang="less" scoped>
#footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  color: #ffffff;
  background-color: #0a1d30;
  box-sizing: border-box;
  padding: 40px;
  color: #eef4ff;
  .logo {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .main {
    text-align: center;
    width: 100%;

    font-size: 16px;

    a {
      color: #eef4ff;
      margin: 0 10px;
    }
  }
}

</style>
