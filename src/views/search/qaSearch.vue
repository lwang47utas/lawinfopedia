<template>
  <div id="search">
    <message-aside :msg-list="msgList"></message-aside>
    <div class="search-box">
      <div class="search-title">Search results for "{{ $route.query.msg }}"</div>
      <div class="search-list" v-for="item in queryList" :key="item.oid" @click="searchListFn(item)">
        <img :src="item.img" alt="">
        <div>
          <div class="search-name">{{ item.title }}</div>
          <div class="search-about mle">{{ item.overview }}</div>
        </div>

<!--        <div class="search-address">{{ item.address }}</div>-->
      </div>
<!--      <el-pagination-->
<!--        background-->
<!--        @current-change="handleCurrentChange"-->
<!--        :current-page.sync="pageNo"-->
<!--        :page-size="pageSize"-->
<!--        layout="pager"-->
<!--        :total="total">-->
<!--      </el-pagination>-->
    </div>
  </div>
</template>

<script>
import { getLegalIssuesAndStates } from '@/api/qa.js'
import { getPetArticleList } from '@/libs/utils'

export default {
  data () {
    return {
      queryList: [],
      pageNo: 1,
      pageSize: 20,
      total: 0,
      msgList:[]
    }
  },
  async mounted () {
    this.msgList = await getPetArticleList()
    getLegalIssuesAndStates({
      pageNo: this.pageNo,
      pageSize: this.pageSize,
      legalIssues: this.$route.query.msg
    }).then(res => {
      this.queryList = res.data.lawyerArticleTypeDTOList
      this.total = res.data.count
    })

  },
  methods: {
    handleCurrentChange(){},
    searchListFn (item) {
      this.$router.push({
        path: '/answers/legal-issue/'+item.label[0]+'/'+item.uid,
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
    .search-title{
      font-size: 26px;
      text-align: left;
      font-weight: 600;
      margin-bottom: 20px;
    }
  }

  .search-list {
    display: flex;
    text-align: left;
    padding: 12px 0;
    cursor: pointer;
    img{
      width: 120px;
      margin-right: 20px;
    }
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

    &:hover {
      //font-weight: 600;
      .search-name {
        text-decoration: underline;
        font-weight: 600;
      }
    }
  }
}


</style>
