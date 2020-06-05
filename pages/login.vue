<template>
  <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" class="form-container">
    <el-form-item prop="email">
      <el-input placeholder="Логин или e-mail" :disabled="formProcessing" type="text" v-model="loginForm.email" />
    </el-form-item>

    <el-form-item prop="password">
      <el-input placeholder="Пароль" :disabled="formProcessing" type="password" v-model="loginForm.password"/>
    </el-form-item>

    <div class="form-group forgetpwd">
      <nuxt-link to="forgetpwd">Забыли пароль?</nuxt-link>
    </div>
    <el-button :loading="formProcessing" type="primary" @click="submitForm('loginForm')">Войти</el-button>
    <div class="form-group">
      Еще нет аккаунта?
      <nuxt-link class="register" to="register">Зарегистрироваться</nuxt-link>
    </div>
  </el-form>
</template>

<script>
  import axios from 'axios'
  import fAuthError from '../mixins/f-auth-error'

  export default {
    name: "login",
    layout: 'auth',
    mixins: [ fAuthError ],
    data() {
      return {
        loginForm: {
          email: '',
          password: '',
        },
        rules: {
          email: [
            { required: true, message: 'Введите ваш логин или e-mail ', trigger: 'blur' }
          ],
          password: [
            { required: true, message: 'Введите ваш пароль' }
          ],
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate( valid => {
          if (!valid) return false

          this.formProcessing = true

          axios.post('/api/login', this.loginForm)
            .then(res => {
              console.log(res.data)
              axios.get(res.headers.location)

              this.$message({   // alert message
                showClose: true,
                message: 'Авторизация пройдено успешно :)',
                type: 'success'
              })
              //
              // // Save the token.
              // this.$store.dispatch('auth/saveToken', {
              //   token: data.token,
              //   remember: true
              // })
              // // Fetch the user.
              // this.$store.dispatch('auth/fetchUser')
              //
              // // Redirect index.
              // this.$router.push({ name: 'index' })
            })
            .catch(err => this.errorQueryCheck(err.response ? err.response.data : {}) )
            .then(() => this.formProcessing = false)
        })
      }
    }
  }
</script>

<style lang="scss">

</style>
