<template>
  <el-form :model="newUser" status-icon :rules="rules" ref="newUser" class="form-container">
    <el-form-item prop="name">
      <el-input placeholder="Name" type="text" v-model="newUser.name" />
    </el-form-item>

    <el-form-item prop="email">
      <el-input placeholder="Email" type="email" v-model="newUser.email" />
    </el-form-item>

    <el-form-item prop="password">
      <el-input placeholder="Password" type="password" v-model="newUser.password"/>
    </el-form-item>

    <el-button type="primary" @click="submitForm('newUser')">Sign up</el-button>

    <div class="form-group">
      You have an account?
      <nuxt-link class="register" to="login">Login!</nuxt-link>
    </div>
  </el-form>
</template>

<script>
  export default {
    name: "register",
    layout: 'auth',
    data() {
      return {
        newUser: {
          name: '',
          email: '',
          password: ''
        },
        rules: {
          name: [
            { required: true, message: 'Please enter your name', trigger: 'blur' },
            { min: 2, message: 'Your name is too short!' },
          ],
          email: [
            { required: true, message: 'Please input email address', trigger: 'blur' },
            { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
          ],
          password: [
            { required: true, message: 'Please enter your password', trigger: 'blur' },
            { min: 6, message: 'Your password is too short!' },
          ],
        }
      };
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
