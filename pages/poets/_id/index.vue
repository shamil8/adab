<template>
  <div>
    <a-poet-show />
  </div>
</template>

<script>
import pPoetsId from '~/mixins/p-poets_id'
import aPoetShow from '~/components/poet/a-poet-show'

export default {
  name: "poetIdIndex",
  mixins: [ pPoetsId ],
  components: {
    aPoetShow
  }

}
</script>

<style scoped>

</style>
