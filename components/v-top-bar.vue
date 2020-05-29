<template>
    <div class="v-top-bar"
         :style="{'margin-left': getNavMenu.isCollapse ? getNavMenu.collapse : getNavMenu.normal}"
    >
      <el-menu
        class="v-top-bar__container"
        mode="horizontal"
        :default-active="activeIndex"
        @select="handleSelect"
      >

        <el-menu-item @click="toggleNavMenu" class="v-top-bar__container--nav">
          <i v-if="getNavMenu.isCollapse" class="el-icon-d-arrow-right"/>
          <i v-else class="el-icon-d-arrow-left"/>
        </el-menu-item>

<!--        <el-menu-item index="1">Center</el-menu-item>-->
<!--        <el-menu-item index="2">Orders</el-menu-item>-->

        <vSearch
          v-if="getScreenName.large === getWindow.type || getScreenName.medium === getWindow.type"
          class="v-top-bar__container--search"
        />

<!--          <el-menu-item> <vLangSwitcher /> </el-menu-item>-->
        <el-menu-item v-if="!hasToken" class="v-top-bar__container--login" index="login" >Login</el-menu-item>
        <div v-else class="v-top-bar__container--right right-container">
          <vUserPopover />
        </div>

      </el-menu>
    </div>
</template>

<script>
  import { mapMutations, mapGetters } from 'vuex'
  import vUserPopover from '~/components/v-user-popover'
  import vSearch from '~/components/v-search'
  // import vLangSwitcher from '~/components/v-lang-switcher'

  export default {
    name: "v-top-bar",
    components: {
      vUserPopover,
      vSearch,
      // vLangSwitcher
    },
    data() {
      return {
        activeIndex: '1'
      }
    },
    computed: {
      ...mapGetters({
        getNavMenu: 'menu/getNavMenu',
        getWindow: 'default/getWindow',
        getScreenName: 'default/getScreenName'
      }),
      hasToken() {
        return this.$store.getters.hasToken
      }
    },
    methods: {
      handleSelect(index) {
        this.$router.push({name: index})
      },
      ...mapMutations({
        toggleNavMenu: 'menu/toggleNavMenu'
      })
    }
  }
</script>

<style lang="scss">
  .v-top-bar {
    min-width: 346px;

    &__container {
      height: 60px;

      &.el-menu.el-menu--horizontal {
        border-bottom: 1px solid var(--app-border-menu);

        .is-active {
          border-bottom: 1px solid $blue;
        }
      }

      &--nav {
        &:hover, &:focus {
          background: rgba(var(--app-background-color), 1) !important;
        }
      }

      &--search {
        margin-top: 10px;
        margin-left: 15px;
      }

      &--right, .right-container {  // Right container
        float: right;
        height: 100%;
        margin-top: 10px;
        margin-right: 25px;

        @media (max-width: 768px) {
          margin-right: 14px;
        }

      }

      &--login {
        /*display: flex;*/
        float: right !important;
        margin-right: 25px !important;

        /*.el-menu-item {*/
        /*  height: 60px;*/
        /*  line-height: 60px;*/
        /*}*/

        @media (max-width: 768px) {
          margin-right: 14px;
        }
      }
    }
  }
</style>
