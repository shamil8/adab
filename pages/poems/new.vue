<template>
  <div>
    <a-poem-update :is-update="false" />

  </div>
</template>

<script>
  import aPoemUpdate from '~/components/poem/a-poem-update'

  export default {
    name: "new",
    components: {
      aPoemUpdate
    }
  }
</script>

<style lang="scss">

</style>
