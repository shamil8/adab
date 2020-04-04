<template>
  <el-form :model="newPassForm" status-icon :rules="rules" ref="newPass" class="form-container">
    <div class="form-group">
      Enter your email address and we'll reset your password
    </div>

    <el-form-item prop="email">
      <el-input placeholder="Email" type="email" v-model="newPass.email"></el-input>
    </el-form-item>

    <el-button type="primary" @click="submitForm('newPass')">Send</el-button>

    <div class="form-group">
      You have an account?
      <nuxt-link class="register" to="login">Login!</nuxt-link>
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
            { required: true, message: 'Please input email address', trigger: 'blur' },
            { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
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
