<template>
  <el-form :model="newUser" status-icon :rules="rules" ref="newUser" class="form-container">
    <el-form-item
      prop="name"
      :error="getErrorForField('name', errors)"
      :show-message="true" :validate-status="'error'"
    >
      <el-input placeholder="Имя и фамилия" :disabled="formProcessing" type="text" v-model="newUser.name" />
    </el-form-item>

    <el-form-item prop="email" :error="getErrorForField('email', errors)">
      <el-input placeholder="E-mail" :disabled="formProcessing" type="email" v-model="newUser.email" />
    </el-form-item>

    <el-form-item prop="password" :error="getErrorForField('password', errors)">
      <el-input placeholder="Пароль" :disabled="formProcessing" type="password" v-model="newUser.password"/>
    </el-form-item>

    <el-button
      :loading="formProcessing"
      type="primary"
      @click="submitForm('newUser')"
    >
      Sign up
    </el-button>

    <div class="form-group">
      You have an account?
      <nuxt-link class="register" to="login">Login!</nuxt-link>
    </div>
  </el-form>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "register",
    layout: 'auth',
    data() {
      return {
        errors: [],
        formProcessing: false,
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
      }
    },
    methods: {
      getErrorForField(field, errors) {
        if (!errors && !errors.length) {
          return false
        }

        let filtered = errors.filter(error => error.path[0] === field)

        if (filtered.length) {
          return filtered[0].message
        }
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (!valid) {
            return false
          }

          this.formProcessing = true
          this.newUser.username = this.newUser.email.split('@')[0]

          this.errors.forEach((error, i, errors) => errors[i].message = '')   // called new message

          axios.post('https://adabapi.ga/api/users', this.newUser, {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
          })
            .then(res => {
              console.log(res.data)

              this.newUser = {}
              this.$message({   // alert message
                showClose: true,
                message: 'Авторизация пройдено успешно:)',
                type: 'success'
              })

              // this.$store.dispatch('login')
              // this.$router.push('/')
            })
            .catch(err => {
              let data =  err.response.data

              if (data.violations) {
                data.violations.forEach( (item, i, items) => {
                  items[i].path = [item.propertyPath]

                  delete items[i].propertyPath
                })

                this.errors = data.violations

              } else {
                this.$message({   // alert message
                  showClose: true,
                  message: data.error ? data.error : 'Неизвестная ошибка',
                  type: 'error'
                })
              }
            })
            .then(() => this.formProcessing = false)
        })
      }
    }
  }
</script>

<style lang="scss">

</style>
