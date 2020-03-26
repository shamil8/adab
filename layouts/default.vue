<template>
  <div>
    <vTopBar />
    <vNavMenu/>
    <nuxt :style="[getIsCollapse ? {'margin-left': '54px'} : {'margin-left': '200px'}]"/>
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
              getIsCollapse: 'menu/getIsCollapse'
          })
      }
  }
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

</style>
