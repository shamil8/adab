<template>
    <div>
      <vTopBar />
      <vNavMenu />
      <main>
        <div class="container" :style="{'margin-left': getNavMenu.isCollapse ? getNavMenu.collapse : getNavMenu.normal}">
          <nuxt />
        </div>
      </main>
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
  .container {
    min-width: 346px;
    padding: 15px;
  }
</style>
