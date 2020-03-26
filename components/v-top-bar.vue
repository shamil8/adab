<template>
    <div class="v-top-bar" :style="[getIsCollapse ? {'margin-left': '54px'} : {'margin-left': '200px'}]">
      <el-menu :default-active="activeIndex" class="v-top-bar__container" mode="horizontal" @select="handleSelect">

        <el-menu-item @click="toggleNavMenu" class="v-top-bar__container--nav">
          <i v-if="getIsCollapse" class="el-icon-arrow-right"></i>
          <i v-else class="el-icon-arrow-left"></i>

        </el-menu-item>

        <el-menu-item index="1">Center</el-menu-item>
        <el-menu-item index="2">Orders</el-menu-item>
      </el-menu>
      <div class="line"></div>
    </div>
</template>

<script>
    import { mapMutations, mapGetters } from 'vuex'

    export default {
        name: "v-top-bar",
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
    }
  }
</style>
