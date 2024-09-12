// 登陆界面
<template>
  <div class="main">
    <el-card class="login-box clearfix">
      <div slot="header" class="login-head">
        <span>账号登录</span>
      </div>
      <div>
        <el-form :rules="rules" :model="login" ref="loginForm">
          <el-form-item prop="name">
            <el-input v-model="login.name" placeholder="手机/邮箱/用户名">
              <i slot="prefix" class="el-input__icon el-icon-user"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input v-model="login.pass" placeholder="密码" show-password>
              <i slot="prefix" class="el-input__icon el-icon-lock"></i>
            </el-input>
          </el-form-item>
          <div class="select">
            <el-checkbox v-model="login.auto" class="login-auto"
              >自动登录</el-checkbox
            >
            <!-- <el-link type="primary" class="link">忘记密码</el-link>
            <el-link type="primary" class="link">立即注册</el-link> -->
          </div>
        </el-form>
      </div>

      <el-button type="primary" class="login-but" @click="loginIn"
        >登录</el-button
      >
    </el-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      login: {
        name: "",
        pass: "",
        auto: false,
      },
      rules: {
        name: [{ required: true, message: "账号不能为空", trigger: "blur" }],
        pass: [{ required: true, message: "密码不能为空", trigger: "blur" }],
      },
    };
  },
  mounted() {
    this.login.name = this.$store.state.user.username;
    // this.login.pass = this.$store.state.user.password;
    this.login.auto = this.$store.state.user.auto == "true";
    // console.log(this.login.name )
    // if (this.login.name&&this.login.pass&&this.login.auto) {
    //   this.loginIn();
    // }
  },
  methods: {
    ...mapActions(["handleLogin"]),
    loginIn() {
      // console.log(this.handleLogin)
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          let username = this.login.name;
          let password = this.login.pass;
          let auto = this.login.auto;
          this.handleLogin({ username, password, auto })
            .then(() => {
              this.$router.push(this.$store.state.alert.alertRoute);
            })
            .finally(() => {
              this.loading = false;
            });
        } else {
          return false;
        }
      });
    },
  },
};
</script>
<style lang="less">
.el-link.is-underline:hover:after {
  border-bottom: none;
}
</style>
<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  text-align: center;
  color: #606266;
  .login-box {
    width: 500px;
    display: inline-block;
    margin-top: 10%;
    color: #606266;
    text-align: left;
    .login-but {
      width: 100%;
    }
    .select {
      width: 100%;
      line-height: 40px;
      height: 40px;
      .link {
        float: right;
        padding-left: 10px;
      }
    }
  }
}
</style>