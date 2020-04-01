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
    async fetch({store}) {
      if (store.getters['poems/poems'].length === 0) {
        await store.dispatch('poems/fetch')
      }
    },
    computed: {
      poems() {
        return this.$store.getters['poems/poems']
      }
    },
    methods: {
      showPoem(poem) {
        this.$router.push({ name: 'poems-id', params: { id: poem.id } })
      }
    }
  }
</script>

<style scoped>

</style>
