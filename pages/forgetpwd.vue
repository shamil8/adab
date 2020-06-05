<template>
  <el-form :model="newPass" status-icon :rules="rules" ref="newPass" class="form-container">
    <div class="form-group">
      Введите ваш e-mail, и мы отправим вам письмо с паролем!
    </div>

    <el-form-item prop="email">
      <el-input placeholder="E-mail" type="email" v-model="newPass.email"></el-input>
    </el-form-item>

    <el-button type="primary" @click="submitForm('newPass')">Отправить</el-button>

    <div class="form-group">
      Уже есть аккаунт?
      <nuxt-link class="register" to="login">Войти</nuxt-link>
    </div>
  </el-form>
</template>

<script>
  export default {
    name: "forgetpwd",
    layout: 'auth',
    data() {
      return {
        newPass: {
          email: ''
        },
        rules: {
          email: [
            { required: true, message: 'Введите ваш e-mail', trigger: 'blur' },
            { type: 'email', message: 'Пожалуйста, введите правильный e-mail', trigger: ['blur', 'change'] }
          ]
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

<style scoped>

</style>
