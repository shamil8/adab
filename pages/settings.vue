<template>
  <div class="settings">
    <h1>Settings</h1>
    <br>
    <div class="settings-cont">
      <p>Name: <i>{{ user.name }}</i></p>
      <p>Email: <i>{{ user.email }}</i></p>
      <br>
      <p>
        <b>Roles:</b> <br>
        <template v-for="role in user.roles">
          <span>{{ role }}</span> <br>
        </template>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['auth'],
  name: "settings",
  components: {

  },
  data() {
    return {

    }
  },
  computed: {
    user () {
      return this.$store.getters['auth/user']
    }
  }
  }
</script>

<style lang="scss">

</style>
