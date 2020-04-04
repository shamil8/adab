<template>
  <el-form status-icon ref="ruleForm" label-width="120px" class="form-container">
    <div class="form-group">
      Enter your email address and we'll reset your password
    </div>
    <el-input placeholder="E-mail" type="text" autocomplete="off"/>
    <el-button type="primary">Send</el-button>

    <div class="form-group">
      You have an account?
      <nuxt-link class="register" to="login">Login!</nuxt-link>
    </div>
  </el-form>
</template>

<script>
  export default {
    name: "forgetpwd",
    layout: 'auth'
  }
</script>

<style scoped>

</style>
