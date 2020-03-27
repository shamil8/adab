<template>
  <el-scrollbar :native="false">
    <div>
      <vTopBar />
      <vNavMenu/>
      <nuxt :style="[getIsCollapse ? {'margin-left': '54px'} : {'margin-left': '200px'}]"/>
    </div>
  </el-scrollbar>
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

html {
  height: 100%;
}
body {
  background: radial-gradient( circle farthest-corner at -4% -12.9%,
                var(--app-background-second) 0.3%, var(--app-background) 90.2% ) no-repeat fixed;
  height: 100%;
}
</style>
