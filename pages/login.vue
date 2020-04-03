<template>
    <section>
      <el-alert
        v-if="$route.query.message"
        title="Need login firs"
        type="warning"
      >
      </el-alert>
      <el-card class="box-card">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
          <el-form-item label="Password" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"/>
          </el-form-item>
          <el-form-item label="Confirm" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"/>
          </el-form-item>
          <el-form-item label="Age" prop="age">
            <el-input v-model.number="ruleForm.age"/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">Submit</el-button>
            <el-button @click="resetForm('ruleForm')">Reset</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </section>
</template>

<script>
    export default {
      name: "login",
      layout: 'empty',
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
              alert('$router Home!')
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
