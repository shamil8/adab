<template>
  <div class="main">
    <h3 class="main__title" >Education portal</h3>
    <vSearch class="main__search" v-if="getScreenName.small === getWindow.type" />
    <img class="main__image" src="~assets/images/man.gif" alt="Man">
    <el-button type="primary" plain>Adib</el-button>

    {{getSearchText}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import vSearch from '~/components/v-search'

export default {
  computed: {
    ...mapGetters({
      getSearchText: 'variables/getSearchText',
      getWindow: 'default/getWindow',
      getScreenName: 'default/getScreenName'
    })
  },
  components: {
    vSearch
  },
  data() {
    return {
      
    }
  },
}
</script>

<style lang="scss">
.main {

  &__title {
    margin-bottom: 15px;
  }

  &__search {
    width: 100%;

  }

  &__image {
    width: 250px;
    display: block;
    margin: 15px;
  }

  margin-bottom: 700px;
}
</style>
