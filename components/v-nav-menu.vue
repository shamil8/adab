<template>
    <div class="v-nav-menu" :style="[getIsCollapse ? {'width': '54px'} : {'width': '200px'}]">
      <el-menu default-active="2" class="v-nav-menu__container" @open="handleOpen" @close="handleClose" :collapse="getIsCollapse">

        <el-menu-item id="logo" index="1">
          <i class="el-icon-magic-stick"></i>
          <span>Adab</span>
        </el-menu-item>

        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">Navigator Two</span>
        </el-menu-item>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"></i>
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
          <i class="el-icon-menu"></i>
          <span slot="title">Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="5" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-setting"></i>
          <span slot="title">Settings</span>
        </el-menu-item>
      </el-menu>
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
    background-color: var(--app-background-color);;
    position: fixed;
    font-size: 0;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;

    &__container {
      border-right: none;
      background-color: inherit;
      margin-bottom: 20px;

      #logo {
        font-size: 32px;
        color: $g-color-white;
        &:hover, &:focus  {
          background-color: inherit;
        }
        i {
          color: #3d8fbe;
        }
      }

    }

    // Default style element-ui
    .el-menu {
      background: inherit;
    }
    .el-submenu__title {
      color: var(--dynamic-title-color);
      /*transition: border-color .3s,background-color .3s,color .3s;*/
      transition: none;

      &:hover {
        background-color: var(--app-background-color-hover);
      }
      &:focus {
        background-color: var(--app-background-color-focus);
      }

      i {
        color: var(--dynamic-title-color);
      }
    }

    .el-menu-item {
      color: $green;
      transition: none;
      /*transition: border-color .3s,background-color .3s,color .3s;*/

      &:hover {
        background-color: #1e282c;
      }
      &:focus {
        background-color: #1e282c;
      }

      i {
        color: $g-color-white;
      }
    }
    //End element-ui
  }
</style>
