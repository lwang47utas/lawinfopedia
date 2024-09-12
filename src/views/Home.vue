<template>
  <div id="home">
    <div class="mainmenu">
      <menu-vue
        :logo="logo"
        :menus="menus"
      ></menu-vue>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      logo: {
        path: '/index',
        img: '@/assets/logo.png',
      },
      menus: [
        {
          path: '/allOffices',
          name: 'Pro Bono & Offices',
          children: [
            {
              title: 'Pro Bono Offices',
              path: '/Pro-Bono-Offices',
              name: 'Pro Bono Offices'
            },
            {
              title: 'Unemployment Offices',
              path: '/Unemployment-Offices',
              name: 'Unemployment Offices'
            },
            {
              title: 'Employment Departments',
              path: '/Employment-Departments',
              name: 'Employment Departments'
            },
            {
              title: 'Victim Assistance Centers',
              path: '/Victim-Assistance-Centers',
              name: 'Victim Assistance Centers'
            },
            {
              title: 'Courts',
              path: '/Courts',
              name: 'Courts'
            },
            {
              title: 'Bar Associations',
              path: '/Bar-Associations',
              name: 'Bar Associations'
            },
            {
              title: 'District Attorney Offices',
              path: '/District-Attorney-Offices',
              name: 'District Attorney Offices'
            },
            {

              title: 'Departments of Justice',
              path: '/Departments-of-Justice',
              name: 'Departments of Justice'

            },
            {
              title: 'Attorney Generals',
              path: '/Attorney-Generals',
              name: 'Attorney Generals'
            }

          ]
          // icon: require('@/assets/image/live.png')
        },
        {
          path: '/post/category',
          name: 'Free Legal Advice',
          children: [
            {
              title: 'ALL',
              path: '/post/category/ALL',
              name: 'ALL'
            },
            {
              title: 'Pro Bono Services',
              path: '/post/category/Pro-Bono-Services',
              name: 'Pro Bono Services'
            },
            {
              title: 'Unemployment Benefits',
              path: '/post/category/Unemployment-Benefits',
              name: 'Unemployment Benefits'
            },
            {
              title: 'Free Legal Aid',
              path: '/post/category/Free-Legal-Aid',
              name: 'Free Legal Aid'
            },{
              title: 'Retaining a Lawyer',
              path: '/post/category/Retaining-a-Lawyer',
              name: 'Retaining a Lawyer'
            },{
              title: 'ACLU',
              path: '/post/category/ACLU',
              name: 'ACLU'
            },{
              title: 'Types of Lawyers',
              path: '/post/category/Types-of-Lawyers',
              name: 'Types of Lawyers'
            },
          ]
        },
        {
          path: '/answers',
          name: 'Legal Q & A',
          children: [
            {
              title: 'Answers by legal issue',
              path: '/answers/legal-issue',
              name: 'Answers by legal issue'
            },
            {
              title: 'Answers by state',
              path: '/answers/state',
              name: 'Answers by state'
            }
            // {
            //   title: 'Answers list',
            //   path: '/answers/list',
            //   name: 'Answers list'
            // }
          ]
        }
 ]
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
    },
    setPopClass (item) {
      // this.popclass = true;
      this.popclass = item.path
    },
    closePopClass (item) {
      this.selectName = item.name
      this.popclass = false
    }
  }

}
</script>

<style lang="less" scoped>
#home {
  width: 100%;
  display: flex;

  .mainmenu {
    width: 100%;
  }
}
</style>
