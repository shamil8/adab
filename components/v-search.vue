<template>
  <el-input
    class="v-search"
    v-model="searchText"
    :placeholder="placeholder"
  >
    <i slot="prefix" class="el-input__icon el-icon-search"/>
  </el-input>
</template>

<script>
  import { mapMutations, mapGetters } from 'vuex'

  export default {
    name: "v-search",
    props: {
      placeholder: {
        type: String,
        default: 'Search'
      }
    },
    computed: {
      ...mapGetters({
        getScreen: 'default/getScreen',
        getSearchText: 'variables/getSearchText'
      }),
      searchText: {
        get() {
          return this.getSearchText
        },
        set(val) {
          this.setSearchText(val)
        }
      }
    },
    methods: {
      ...mapMutations({
        setSearchText: 'variables/setSearchText',
        setWindowWidth: 'default/setWindowWidth'
      }),
      handleResize() {
        this.setWindowWidth(window.innerWidth)
      }
    },
    mounted() {
      this.handleResize()
      window.removeEventListener('resize', this.handleResize)
    },
    destroyed() {
      window.removeEventListener('resize', this.handleResize)
    }
  }
</script>

<style lang="scss">
  .v-search {
    width: 250px;

    input {
      background: none;
      color: var(--app-logo-text);
    }
  }
</style>
