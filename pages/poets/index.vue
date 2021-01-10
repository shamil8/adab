<template>
  <div class="poets-index">
    <h1 class="poets-title">Poets</h1>

    <a-poets/>
  </div>
</template>

<script>
import aPoets from '~/components/poet/a-poets'

export default {
  name: 'poetsIndex',
  async asyncData ({ store }) {
    if(store.getters['poet/poets'].length === 0) {
      await store.dispatch('poet/fetchPoets')
    }
  },
  data () {
    return {

    }
  },
  components: {
    aPoets
  }
}
</script>

<style lang="scss">
.poets-index {
  .poets-title {
    margin-bottom: 15px;
  }
}

</style>
