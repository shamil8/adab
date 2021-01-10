<template>
  <div class="poems-index">
    <h1 class="poems-title">Poems</h1>
    <a-poems/>

  </div>
</template>

<script>
  import aPoems from '~/components/poem/a-poems'

  export default {
    name: "index.vue",
    async asyncData ({ store }) {
      if (store.getters['poem/poems'].length === 0) {
        await store.dispatch('poem/fetchPoems')
      }
    },
    methods: {
      showPoem(poem) {
        this.$router.push({ name: 'poems-id', params: { id: poem.id } })
      }
    },
    components: {
      aPoems
    }
  }
</script>

<style lang="scss">
  .poems-index {
    .poems-title {
      margin-bottom: 15px;

    }
  }
</style>
