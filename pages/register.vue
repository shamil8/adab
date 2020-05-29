<template>
  <el-form :model="newUser" status-icon :rules="rules" ref="newUser" class="form-container">
    <el-form-item prop="name" :error="getErrorForField('name', errors)">
      <el-input placeholder="Name" type="text" v-model="newUser.name" />
    </el-form-item>

    <el-form-item prop="email" :error="getErrorForField('email', errors)">
      <el-input placeholder="Email" type="email" v-model="newUser.email" />
    </el-form-item>

    <el-form-item prop="password" :error="getErrorForField('password', errors)">
      <el-input placeholder="Password" type="password" v-model="newUser.password"/>
    </el-form-item>

    <el-alert
      v-if="error"
      :title="error"
      type="error"
    />
    <el-button type="primary" @click="submitForm('newUser')">Sign up</el-button>

    <div class="form-group">
      You have an account?
      <nuxt-link class="register" to="login">Login!</nuxt-link>
    </div>
  </el-form>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "register",
    layout: 'auth',
    data() {
      return {
        error: '',
        errors: [],
        newUser: {
          name: '',
          email: '',
          password: ''
        },
        rules: {
          name: [
            // { required: true, message: 'Please enter your name', trigger: 'blur' },
            // { min: 2, message: 'Your name is too short!' },
            { required: true, message: 'Введите ваше имя и фамилию', trigger: 'blur' },
            { min: 2, message: 'Имя слишком короткая.' },
            { max: 55, message: 'Имя слишком длинная.' },
          ],
          email: [
            // { required: true, message: 'Please input email address', trigger: 'blur' },
            // { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
            { required: true, message: 'Введите e-mail', trigger: 'blur' },
            { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
          ],
          password: [
            // { required: true, message: 'Please enter your password', trigger: 'blur' },
            // { min: 6, message: 'Your password is too short!' },
            { required: true, message: 'Введите пароль', trigger: 'blur' },
            { min: 6, message: 'Пароль слишком короткий' },
          ],
        }
      };
    },
    methods: {
      getErrorForField(field, errors) {
        if (!errors && !errors.length) {
          return false
        }
        let filtered = errors.filter(error => {
          return error.path[0] === field
        })
        if (filtered.length) {
          return filtered[0].message
        }
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.newUser.username = this.newUser.email.split('@')[0]

            axios.post('https://adabapi.ga/api/users', this.newUser)
              .then(res => {
                console.log(res.data)
                this.newUser = {}
              })
              .catch(err => {
              let data =  err.response.data

              if (data.violations) {
                data.violations.forEach( item =>
                  this.errors.push({
                    'path': [item.propertyPath],
                    'message': item.message
                  })
                )

              } else if(data.error) {
                this.error = data.error;
              }else {
                // this.error = 'Unknown error';
                this.error = 'Неизвестная ошибка';
              }
            })

            // this.$store.dispatch('login')
            // this.$router.push('/')
          }
            else return false
        })
      }
    }
  }
</script>

<style lang="scss">

</style>
