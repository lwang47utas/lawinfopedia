<template>
  <div id="search">
    <message-aside :msg-list="msgList"></message-aside>
    <div class="search-box">
      <div class="search-list" v-for="item in queryList" :key="item.oid" @click="searchListFn(item)">
        <div class="search-name">{{ item.name }}</div>
        <div class="search-about">{{ item.aboutThisOffice }}</div>
        <div class="search-address">{{ item.address }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getQuery } from '@/api/index'
import { getPetArticleList } from '@/libs/utils'

export default {
  data () {
    return {
      queryList: []
    }
  },
  async mounted () {
    this.msgList = await getPetArticleList()
    getQuery({
      msg:
      this.$route.query.msg,
      pageNo:
        100,
      pageSize:
        20
    }).then(res => {
      this.queryList = res.data.list
    })
  },
  methods: {
    searchListFn (item) {
      this.$router.push({
        path: '/help/detail',
        query: { oid: item.oid }
      })
    }
  }
}
</script>

<style scoped lang="less">
#search {
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
  display: flex;
  justify-content: center;
  margin-top: 40px;
  width: 100%;

  .search-box {
    max-width: 800px;
  }

  .search-list {
    text-align: left;
    padding: 12px 0;
    cursor: pointer;

    .search-name {
      line-height: 26px;
      padding: 2px 0;
      font-size: 20px;
      color: var(--txt_color);
    }

    .search-about {
      font-size: 14px;
      line-height: 16px;
      color: #666666;
      margin: 5px 0;
    }

    .search-address {
      font-size: 15px;

      color: var(--txt_color);
    }
    &:hover{
      //font-weight: 600;
      .search-name{
        text-decoration: underline;
        font-weight: 600;
      }
    }
  }
}


</style>
