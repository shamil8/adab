<template>
    <div>
      <a-poem-show />
    </div>
</template>

<script>
  import pPoemsId from "~/mixins/p-poems_id"
  import aPoemShow from '~/components/poem/a-poem-show'

  export default {
    name: "index",
    mixins: [ pPoemsId ],
    components: {
      aPoemShow
    }
  }
</script>

<style lang="scss">
  .poems-id {

  }
</style>
