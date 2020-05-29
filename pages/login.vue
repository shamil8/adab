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
    import axios from "../.nuxt/axios"

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
              let data
              // Submit the form.
              try {
                alert(this.loginForm.email)
                axios.post()
                const response =  this.loginForm.post('/login')
                data = response.data
              } catch (e) {
                return false
              }
              // Save the token.
              this.$store.dispatch('auth/saveToken', {
                token: data.token,
                remember: true
              })
              // Fetch the user.
              this.$store.dispatch('auth/fetchUser')

              // Redirect index.
              this.$router.push({ name: 'index' })
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
