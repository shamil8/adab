<template>
  <div class="auth">
    <el-alert
      v-if="$route.query.message"
      title="Need login firs"
      type="warning"
    >
    </el-alert>

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

    &__card {
      max-width: 370px;
      margin: 0 auto;
      text-align: center;

      margin-top: 30px;
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
        color: $grey;
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
