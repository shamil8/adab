<template>
    <div>
      <a-poem-show />
    </div>
</template>

<script>
  import aPoemShow from '~/components/poem/a-poem-show'

  export default {
    validate({params}) {
      return /^\d+$/.test(params.id)
    },
    async fetch({store, params}) {
      if (store.getters['poems/poem'].id !== params.id) {
        await store.dispatch('poems/fetchPoem', params.id)
      }
    },
    computed: {
      poem() {
        return this.$store.getters['poems/poem']
      }
    },
    components: {
      aPoemShow
    }
    // async asyncData({$axios, params}) {
    //   const poem = await $axios.$get('https://jsonplaceholder.typicode.com/users/' + params.id)
    //   return {poem}
    // },
  }
</script>

<style lang="scss">
  .poems-id {

  }
</style>
