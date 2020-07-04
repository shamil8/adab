<template>
  <div>
    <client-only>
      <a-poem-update :is-update="false" />
    </client-only>

  </div>
</template>

<script>
  import aPoemUpdate from '~/components/poem/a-poem-update'

  export default {
    name: "new",
    middleware: ['auth'],
    components: {
      aPoemUpdate
    }
  }
</script>

<style lang="scss">

</style>
