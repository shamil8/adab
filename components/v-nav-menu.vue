<template>
    <div class="v-nav-menu" :style="[getIsCollapse ? {'width': '54px'} : {'width': '200px'}]">
      <el-menu default-active="2" class="v-nav-menu__container" @open="handleOpen" @close="handleClose" :collapse="getIsCollapse">

        <el-menu-item id="logo">
          <img class="logo__img" src="../assets/images/adab-logo.svg" alt="A">
          <span>Adab</span>
        </el-menu-item>

        <el-menu-item index="2">
          <i class="el-icon-collection"/>
          <span slot="title">Poem</span>
        </el-menu-item>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"/>
            <span slot="title">Navigator One</span>
          </template>
          <el-menu-item-group>
            <span slot="title">Group One</span>
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">item four</span>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="4">
          <i class="el-icon-menu"/>
          <span slot="title">Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="5" disabled>
          <i class="el-icon-document"/>
          <span slot="title">Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-setting"/>
          <span slot="title">Settings</span>
        </el-menu-item>
      </el-menu>
      <div class="v-nav-menu__under">

      </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "v-nav-menu",
        computed: {
            ...mapGetters({
                getIsCollapse: 'menu/getIsCollapse'
            })
        },
        data() {
            return {

            }
        },
        mounted() {
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style lang="scss">
  .v-nav-menu {
    background-color: var(--app-background);
    position: fixed;
    font-size: 0;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;

    &__container {
      border-right: 1px solid var(--app-border-menu);
      background-color: inherit;

      #logo {
        height: 60px;
        font-size: 32px;
        color: var(--app-logo-text);
        &:hover, &:focus  {
          background-color: initial;
        }
        .logo__img {
          height: 34px;
        }
      }

    }

    &__under {
      width: 100%;
      height: 100%;
      border-right: 1px solid var(--app-border-menu);
    }

    // Default style element-ui
    .el-menu-item, .el-submenu__title, .el-tooltip {  //size
      padding: 0 13px !important;
    }
    .el-submenu .el-menu-item {
      padding-left: 40px !important;
    }
    .el-menu--collapse {
      width: 54px;
    }

    .el-menu--inline {
      width: 200px;
      border-right: 1px solid var(--app-border-menu);
    }
    .el-menu {  //line active

      .el-menu-item.is-active {
        width: 200px;
        border-right: 1px solid $g-color-blue;
      }

      &--collapse .el-menu-item.is-active {
        width: 54px;
      }
    }
  }

  // Default style element-ui
  .el-menu {
    background: var(--app-background);
  }
  .el-menu--horizontal>.el-menu-item:not(.is-disabled), .el-menu-item, .el-submenu__title {
    color: var(--app-text-color);
    /*transition: border-color .3s,background-color .3s,color .3s;*/
    transition: none;

    &:hover {
      background: var(--app-background-hover);
      color: var(--app-text-color);
    }
    &:focus {
      background: var(--app-background-focus);
      color: var(--app-text-color);
    }

    i {
      color: var(--app-text-color);
    }

    &.is-active, &.is-active i {
      color: $g-color-blue;
      &:hover, &:focus {
        background: none;
        color: $g-color-blue;
      }
    }
  }
  //End element-ui
</style>
