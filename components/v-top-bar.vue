<template>
    <div class="v-top-bar" :style="[getIsCollapse ? {'margin-left': '54px'} : {'margin-left': '200px'}]">
      <el-menu :default-active="activeIndex" class="v-top-bar__container" mode="horizontal" @select="handleSelect">

        <el-menu-item @click="toggleNavMenu" class="v-top-bar__container--nav">
          <i v-if="getIsCollapse" class="el-icon-d-arrow-right"/>
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
                getIsCollapse: 'menu/getIsCollapse'
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
      &.el-menu.el-menu--horizontal {
        border-bottom: 1px solid var(--app-border-menu)
      }

      &--nav {
        &:hover, &:focus {
          background: rgba(var(--app-background-color), 1) !important;
        }
      }


      &--right, .right-container {
        float: right;
        height: 100%;

        &__day-night {
          margin-top: 5px;
          margin-right: 25px;
        }
      }
    }
  }
</style>
