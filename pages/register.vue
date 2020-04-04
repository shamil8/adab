<template>
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px" class="form-container">
    <el-input placeholder="Name" type="text" v-model="ruleForm.login" autocomplete="off"/>
    <el-input placeholder="E-mail" type="text" v-model="ruleForm.login" autocomplete="off"/>
    <el-input  placeholder="Password" type="password" v-model="ruleForm.pass" autocomplete="off"/>
    <el-input placeholder="Confirm password" type="password" v-model="ruleForm.checkPass" autocomplete="off"/>
    <el-button type="primary" @click="submitForm('ruleForm')">Sign up</el-button>

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
      var checkAge = (rule, value, callback) => {
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
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
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
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
  .box-card {
    width: 370px;
    margin: 25px auto;

  }
</style>
