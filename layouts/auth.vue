<template>
  <div class="auth">
    <el-alert
      v-if="$route.query.message"
      title="Need login firs"
      type="warning"
    >
    </el-alert>

    <div @click="$router.push({name: 'index'})" class="auth__logo">
      <img src="~/assets/images/adab-logo.svg" alt="A" class="auth__logo--img">
      <span class="auth__logo--text">Adab</span>
    </div>
    <el-card class="auth__card">
      <nuxt />
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "auth"
  }
</script>

<style lang="scss">
  .auth {
    padding: 10px;

    &__logo {
      margin-top: 15px;
      text-align: center;
      cursor: pointer;

      &--img {
        height: 34px;
      }

      &--text {
        font-size: 32px;
        color: var(--app-logo-text);
      }
    }

    &__card {
      max-width: 370px;
      margin: 15px auto 0;
      text-align: center;
    }
  }

  .form-container {
    input {
      width: 100%;
      color: $grey;
    }

    button {
      width: 100%;
      margin-bottom: 15px;
    }

    .form-group {
      text-align: left;
      margin-bottom: 15px;

      &.forgetpwd {
        margin-bottom: 22px;
      }

      a {
        color: var(--app-text-color);
        &:hover {
          transition: 0.2s;
          color: $blue;
        }

        &.register {
          color: $blue;
        }
      }
    }

    .el-form-item__content {  // It's element UI
      margin-bottom: 5px;
    }
  }
</style>
