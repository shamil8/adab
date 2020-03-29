<template>
    <div>
      <vTopBar />
      <vNavMenu />
      <nuxt :style="[getNavMenu.isCollapse ? {'margin-left': getNavMenu.collapse} : {'margin-left': getNavMenu.normal}]"
      />
    </div>
</template>

<script>
  import vTopBar from '../components/v-top-bar'
  import vNavMenu from '../components/v-nav-menu'
  import { mapGetters } from 'vuex'

  export default {
      components: {
          vTopBar,
          vNavMenu
      },
      computed: {
          ...mapGetters({
              getNavMenu: 'menu/getNavMenu'
          })
      }
  }
</script>

<style lang="scss">
  body {

  }
</style>
