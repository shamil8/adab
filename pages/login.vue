<template>
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px" class="form-container">
    <el-input placeholder="E-mail" type="text" v-model="ruleForm.login" autocomplete="off"/>
    <el-input placeholder="Password" type="password" v-model="ruleForm.pass" autocomplete="off"/>
    <div class="form-group">
      <nuxt-link to="forgetpwd">Forgot password?</nuxt-link>
    </div>
    <el-button type="primary" @click="submitForm('ruleForm')">Login</el-button>
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
        let checkAge = (rule, value, callback) => {
          if (!value) {
            return callback(new Error('Please input the age'));
          }
          setTimeout(() => {
            if (!Number.isInteger(value)) {
              callback(new Error('Please input digits'));
            } else {
              if (value < 18) {
                callback(new Error('Age must be greater than 18'));
              } else {
                callback();
              }
            }
          }, 1000);
        };
        let validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('Please input the password'));
          } else {
            if (this.ruleForm.checkPass !== '') {
              this.$refs.ruleForm.validateField('checkPass');
            }
            callback();
          }
        };
        let validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('Please input the password again'));
          } else if (value !== this.ruleForm.pass) {
            callback(new Error('Two inputs don\'t match!'));
          } else {
            callback();
          }
        };
        return {
          ruleForm: {
            pass: '',
            checkPass: '',
            age: ''
          },
          rules: {
            pass: [
              { validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
              { validator: validatePass2, trigger: 'blur' }
            ],
            age: [
              { validator: checkAge, trigger: 'blur' }
            ]
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
              console.log('error submit!!');
              return false;
            }
          });
        }
      }
    }
</script>

<style lang="scss">

</style>
