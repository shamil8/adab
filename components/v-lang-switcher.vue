<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      Tojiki<i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">

      <el-dropdown-item v-for="(locale, i) in showLocales" :key="i">
        <nuxt-link :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link>
      </el-dropdown-item>

      <el-dropdown-item disabled>فارسی</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'v-lang-switcher',
  computed: {
    showLocales () {
      return this.$i18n.locales.filter(locale => locale.code !== this.$i18n.locale)
    }
  }
}
</script>

<style lang="scss">
  .v-lang-switcher {
    .el-dropdown-link {
      cursor: pointer;
      color: $blue;
    }
    .el-icon-arrow-down {
      font-size: 12px;
    }
  }

</style>
