<template>
  <div>
    <a-poem-update />
  </div>
</template>

<script>
  import pPoemsId from "~/mixins/p-poems_id"
  import aPoemUpdate from '~/components/poem/a-poem-update'

  export default {
    name: "update",
    mixins: [ pPoemsId ],
    components: {
      aPoemUpdate
    }

  }
</script>

<style lang="scss">

</style>
