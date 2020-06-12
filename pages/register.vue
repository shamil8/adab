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
      Регистрация
    </el-button>

    <div class="form-group">
<!--      You have an account?-->
      Уже есть аккаунт?
      <nuxt-link class="register" to="login">Войти</nuxt-link>
    </div>
  </el-form>
</template>

<script>
  import pAuthError from '../mixins/p-auth-error'

  export default {
    name: "register",
    layout: 'auth',
    mixins: [ pAuthError ],
    data() {
      return {
        errors: [],
        newUser: {
          name: '',
          email: '',
          password: ''
        },
        rules: {
          name: [
            { required: true, message: 'Введите ваши имя и фамилию', trigger: 'blur' },
            { min: 2, message: 'Имя слишком короткая.' },
            { max: 55, message: 'Имя слишком длинная.' },
          ],
          email: [
            { required: true, message: 'Введите e-mail', trigger: 'blur' },
            { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
          ],
          password: [
            { required: true, message: 'Введите пароль', trigger: 'blur' },
            { min: 6, message: 'Пароль слишком короткий' },
          ],
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate( valid => {
          if (!valid) return false

          this.newUser.username = this.newUser.email.split('@')[0]    // bad!
          this.formProcessing = true

          this.errors.forEach((error, i, errors) => errors[i].message = '')   // called new message

          this.$axios.post('/api/users', this.newUser)
            .then(res => {
              console.log(res.data)

              this.newUser = {}
              this.$message({   // alert message
                showClose: true,
                message: 'Авторизация пройдено успешно :)',
                type: 'success'
              })

              // this.$store.dispatch('login')
              // this.$router.push('/')
            })
            .catch(err => this.errorQueryCheck(err.response ? err.response.data : {}) )
            .then(() => this.formProcessing = false)
        })
      },
      getErrorForField(field, errors) {
        if (!errors && !errors.length) {
          return false
        }

        let filtered = errors.filter(error => error.path[0] === field)

        if (filtered.length) {
          return filtered[0].message
        }
      }
    }
  }
</script>

<style lang="scss">

</style>
