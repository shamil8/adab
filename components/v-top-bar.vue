<template>
    <div class="v-top-bar"
         :style="[getNavMenu.isCollapse ? {'margin-left': getNavMenu.collapse} : {'margin-left': getNavMenu.normal}]"
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

        <el-menu-item index="1">Center</el-menu-item>
        <el-menu-item index="2">Orders</el-menu-item>

        <div class="v-top-bar__container--right right-container">
          <cDayNightToggle class="right-container__day-night"/>

        </div>


      </el-menu>
    </div>
</template>

<script>
    import { mapMutations, mapGetters } from 'vuex'
    import cDayNightToggle from '../components/c-day-night-toggle'
    export default {
        name: "v-top-bar",
        components: {
            cDayNightToggle
        },
        data() {
            return {
                activeIndex: '1'
            };
        },
        computed: {
            ...mapGetters({
                getNavMenu: 'menu/getNavMenu'
            })
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            ...mapMutations({
                toggleNavMenu: 'menu/toggleNavMenu'
            })
        }
    }
</script>

<style lang="scss">
  .v-top-bar {
    &__container {
      height: 60px;

      &.el-menu.el-menu--horizontal {
        border-bottom: 1px solid var(--app-border-menu);

        .is-active {
          border-bottom: 1px solid $g-color-blue;
        }
      }

      &--nav {
        &:hover, &:focus {
          background: rgba(var(--app-background-color), 1) !important;
        }
      }

      &--right, .right-container {  // Right container
        float: right;
        height: 100%;

        &__day-night {
          margin-top: 5px;
          margin-right: 25px;

          @media (max-width: 768px) {
            margin-right: 14px;
          }
        }
      }
    }
  }
</style>
