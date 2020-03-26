<template>
    <div class="v-top-bar" :style="[getIsCollapse ? {'margin-left': '54px'} : {'margin-left': '200px'}]">
      <el-menu :default-active="activeIndex" class="v-top-bar__container" mode="horizontal" @select="handleSelect">

        <el-menu-item @click="toggleNavMenu" class="v-top-bar__container--nav">
          <i v-if="getIsCollapse" class="el-icon-d-arrow-right"></i>
          <i v-else class="el-icon-d-arrow-left"></i>

        </el-menu-item>

        <el-menu-item index="1">Center</el-menu-item>
        <el-menu-item index="2">Orders</el-menu-item>

        <cDayNightToggle class="v-top-bar__container--day-night"/>

      </el-menu>
      <div class="line"></div>
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

      &--nav {
        &:hover {
          background: rgba(var(--app-background-color), 1) !important;
        }
      }


      &--day-night {
        float: right;
        height: 100%;
        line-height: 50px;
        margin-top: 5px;
        margin-right: 25px;
      }
    }
  }
</style>
