<template>
  <div>
    <el-page-header title="Назад" @back="$router.push({name: 'poems'})" />

    <h1>Update the poem</h1>
  </div>
</template>

<script>
  export default {
    name: "update",

  }
</script>

<style lang="scss">

</style>
