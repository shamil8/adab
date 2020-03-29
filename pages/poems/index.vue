<template>
    <div class="poems">
      <h3>Adiboni Tojik</h3>
      <ul>
        <li v-for="poem in poems" :key="poem.id">
          <a href="#" @click.prevent="showPoem(poem)">{{poem.name}}</a>
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: "index.vue",
    async asyncData({$axios}) {
      const poems = await $axios.$get('https://jsonplaceholder.typicode.com/users')
      return {poems}
    },
    data() {
      return {

      }
    },
    methods: {
      showPoem(poem) {
        this.$router.push('/poems/' + poem.id)
      }
    }
  }
</script>

<style scoped>

</style>
