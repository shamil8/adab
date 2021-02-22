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
  import pAuthError from '../mixins/p-auth-error'

  export default {
    name: 'login',
    layout: 'auth',
    async asyncData ({ store, redirect }) {
      if (store.getters['auth/hasToken']) {
        redirect({ name: 'index', message: 'You are already in Adab!' })
      }
    },
    mixins: [ pAuthError ],
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
          this.loginForm.isLogin = true

          this.$store.dispatch('auth/fetchAuthUser', this.loginForm)
            .then(({isSuccess}) => {
              if (isSuccess === true) {
                this.$router.push('/')
              } else {
                this.$message({
                  showClose: true,
                  message: 'Введен неверный логин или пароль!',
                  type: 'error'
                })

                this.formProcessing = false
              }
            })
        })
      }
    }
  }
</script>

<style lang="scss">

</style>
