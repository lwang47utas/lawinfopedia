<template>
  <div id="information">
    <div class="information-con">
      <newmessage :newsList="informationList" :concat="true" @newMessage="newMessage"></newmessage>

    </div>
  </div>
</template>
<script>
import Newmessage from 'comps/moudle/newmessage.vue'

export default {
  props: ['informationList'],
  data () {
    return {
      // informationList: [{}]
    }
  },
  components: { Newmessage },
  mounted () {
    // this.getInformationFn()
  },
  methods: {
    getInformationFn () {
      getIcon({
        area: localStorage.getItem('lawArea'),
        state:
          localStorage.getItem('lawState'),
        categoryItem: this.$route.query.type
      }).then(res => {
        this.informationList = res.data
      })
    },
    newMessage (item) {
      this.$router.push({
        // name: 'newsContent',
        path: `/${this.$route.name.replace(/ /g, '-')}/${this.$route.params.state.replace(/ /g, '-')}/${this.$route.params.area.replace(/[ ,&.]/g, '-').replace(/-+/g, '-')}/${item.oid}-${item.name.replace(/[ ,&.]/g, '-').replace(/-+/g, '-')}`
      })
      localStorage.setItem('layOid', item.oid)
    }
  },
  // path: `/${this.$route.params.type}/${this.$route.params.state}/${this.$route.params.area}/${this.$route.params.oid}`,
}
</script>
<style lang="less">
#information {
  .information-con {
    padding-top: 20px;

    .newMessage {
      .grid-three {
        grid-gap: 16px;
        clear: both;
        display: grid;
        grid-template-columns: 1fr 1fr !important;
        @media screen and (max-width: 800px) {
          grid-template-columns: 1fr !important;
        }
      }


    }
  }
}
</style>
