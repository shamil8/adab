<template>
  <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" class="form-container">
    <el-form-item prop="email">
      <el-input placeholder="Email" type="email" v-model="loginForm.email" />
    </el-form-item>

    <el-form-item prop="password">
      <el-input placeholder="Password" type="password" v-model="loginForm.password"/>
    </el-form-item>

    <div class="form-group forgetpwd">
      <nuxt-link to="forgetpwd">Forgot password?</nuxt-link>
    </div>
    <el-button type="primary" @click="submitForm('loginForm')">Login</el-button>
    <div class="form-group">
      Create new account?
      <nuxt-link class="register" to="register">Sign up!</nuxt-link>
    </div>
  </el-form>
</template>

<script>
    export default {
      name: "login",
      layout: 'auth',
      data() {
        return {
          loginForm: {
            email: '',
            password: '',
          },
          rules: {
            email: [
              { required: true, message: 'Please input email address', trigger: 'blur' },
              { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
            ],
            password: [
              { required: true, message: 'Please enter your password', trigger: 'blur' },
              { min: 6, message: 'Your password is too short!' },
            ],
          }
        }
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              this.$store.dispatch('login')
              this.$router.push('/')
            } else {
              return false
            }
          })
        }
      }
    }
</script>

<style lang="scss">

</style>
