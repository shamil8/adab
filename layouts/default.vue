<template>
  <el-scrollbar ref="myDiv" class="body__scrollbar" :native="false">
      <vTopBar />
      <vNavMenu />
      <main>
        <div class="container" :style="{'margin-left': getNavMenu.isCollapse ? getNavMenu.collapse : getNavMenu.normal}">
          <nuxt />
        </div>
      </main>
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
              getNavMenu: 'menu/getNavMenu'
          })
      }
  }
</script>

<style lang="scss">
  body, #__nuxt, #__layout {
    height: 100%;
    overflow: hidden;
  }
  .container {
    min-width: 346px;
    padding: 15px;
  }

  .body__scrollbar {
    height: 100%;
    .el-scrollbar__thumb {
      background-color: rgba(236, 182, 20, 0.7);

      &:hover {
        background-color: rgba(236, 182, 20, 1);
      }

    }
    .el-scrollbar__wrap {
      overflow-x: hidden;
    }
    .el-scrollbar__bar.is-horizontal {
      display: none;
    }
    .el-collapse-item {  // Element UI collapse
      &__wrap, &__header {
        background-color: var(--app-background);
        color: var(--app-text-normal);
      }
      &__content {
        color: var(--app-logo-text);
      }
    }

  }
</style>
