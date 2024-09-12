<template>
  <div id="names">

    <div>
      <message-aside :pet-list="petList"></message-aside>
    </div>
    <div class="names-content">
      <h1 class="nameTitle">{{ titleName }} Names</h1>
      <div class="sexLists">
        <el-radio-group v-model="sexRadio" @input="nameInput">
          <el-radio-button label="">ALL</el-radio-button>
          <el-radio-button label="BOY"></el-radio-button>
          <el-radio-button label="GIRL"></el-radio-button>
          <el-radio-button label="UNISEX"></el-radio-button>
        </el-radio-group>
      </div>
      <div class="nameLists">
        <div>
          <el-radio-group v-model="nameRadio" @input="nameInput">
            <el-radio label="">ALL</el-radio>
            <el-radio v-for="(item,index) in  nameList" :key="index" :label="item">{{ item }}</el-radio>
          </el-radio-group>
        </div>
      </div>
      <div>
        <div v-for="(item,index) in namesLists" :key="index" class="nameLists-li">
          <span class="sex">
             <svg-icon icon-class="Male" v-if=" item.sex==='boy'"></svg-icon>
             <svg-icon icon-class="Female" v-if=" item.sex==='girl'"></svg-icon>

            <!--            {{ item.sex }}-->
          </span>
          <span class="name">{{ item.name }}</span>
          <span class="type">{{ item.meaning }}</span>
          <!--          <span class="type">{{ item.origin }}</span>-->
        </div>
      </div>
      <div class="page">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page.sync="pageNo"
          :page-size="20"
          background
          layout="total,  pager"
          :total="count">
        </el-pagination>
      </div>

    </div>

  </div>
</template>
<script>
import { getMoreList } from '@/libs/utils'

export default {
  data () {
    return {
      titleName: '',
      nameRadio: '',
      nameList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      namesLists: [
        {
          sex: 'nan',
          name: 'name',
          type: 'intelligent, smart'
        }, {
          sex: 'nv',
          name: 'name',
          type: 'smart'
        }],
      sexRadio: '',
      petList: [
        {
          img: require('../../assets/image/about/bg.png'),
          title: '10 Most Popular Dog Breeds in 2024'
        },
        {
          img: require('../../assets/image/about/bg.png'),
          title: '10 Most Popular Dog Breeds in 2024'
        }
      ],
      pageNo: 1,
      count: 0
    }
  },
  watch: {
    $route (to, from) {
      this.titleName = to.name
      this.nameRadio = ''
      this.sexRadio = ''
      // this.getNameList()
    }
  },
  async mounted () {
    this.titleName = this.$route.name
    this.getNameList()
    const list = await getMoreList()
    this.petList = list.dog.splice(0, 2).concat(list.cat.splice(0, 2))
  },
  methods: {
    getNameList () {
      getName({
        category: this.titleName,
        pageNo: this.pageNo,
        pageSize: 15,
        initial: this.nameRadio,
        sex: this.sexRadio
      }).then((res) => {
        // console.log(res)
        this.namesLists = res.data.petName
        this.count = res.data.count
      })
    },
    handleCurrentChange (num) {
      this.pageNo = num
      this.getNameList()
    },
    /**
     * 单选名称
     */
    nameInput () {
      this.getNameList()
    }
  }
}
</script>
<style scoped lang="less">

#names {
  display: flex;
  padding: 40px 0;
  width: 100%;
  max-width: 1000px;

  .names-content {
    flex: 1;
    width: 100%;
    text-align: left;

    .nameTitle {
      font-size: 32px;
      color: var(--txt_color);
      margin-bottom: 20px;
    }

    .sexLists {
      margin-bottom: 5px;
    }

    .nameLists {
      margin-bottom: 30px;

      /deep/ .el-radio {
        margin-bottom: 1px;
        font-size: 28px;
        margin-right: 0;
        width: 70px;
      }

    }

    .nameLists-li {
      width: 100%;
      padding: 10px 12px;
      font-size: 16px;
      //line-height: 20px;

      //border: 1px solid rgba(64, 158, 255, .8);
      border-radius: 5px;
      margin-bottom: 4px;

      &:nth-child(2n) {
        background: #f9f9f9;
      }

      span {
        display: inline-block;
      }

      .sex {

        margin-right: 20px;
        width: 25px;
      }

      .name {
        //margin-right: 48px;
        width: 130px;
      }

      .type {
        font-size: 14px;
        line-height: 20px;
        color: #666;

      }
    }

    .page {
      margin-top: 10px;
      text-align: right;
    }
  }
}

@media screen and (max-width: 800px) {
  #names {
    flex-direction: column-reverse;
    padding: 20px 15px;

  }
}

</style>
