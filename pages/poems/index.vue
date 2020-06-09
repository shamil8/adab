<template>
  <div class="poems-index">
    <a-poems/>

  </div>
</template>

<script>
  import aPoems from '~/components/poem/a-poems'

  export default {
    name: "index.vue",
    async fetch({store}) {
      if (store.getters['poems/poems'].length === 0) {
        await store.dispatch('poems/fetchPoems')
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

  }
</style>
