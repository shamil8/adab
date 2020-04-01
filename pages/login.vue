<template>
    <section>
      <el-alert
        v-if="$route.query.message"
        title="Need login firs"
        type="warning"
      >
      </el-alert>
      <form @submit.prevent="onSubmit">
        <h1>Login page</h1>
        <input type="text">
        <button type="submit">Login</button>
      </form>
    </section>
</template>

<script>
    export default {
      name: "login",
      layout: 'empty',
      methods: {
        onSubmit() {
          this.$store.dispatch('login')
          this.$router.push('/')
        }
      }
    }
</script>

<style scoped>

</style>
