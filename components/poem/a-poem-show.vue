<template>
  <div class="a-poem-show">
    <el-page-header title="Назад" @back="$router.push({name: 'poems'})" />

    <h2 class="a-poem-show__title">{{poem.name}}</h2>
    <p class="a-poem-show__text" v-html="poem.text"></p>
    <hr>
    <p class="a-poem-show__description" v-html="poem.description"></p>

    <p class="a-poem-show__poet">Устод:
      <el-link type="primary">{{poem.poet.name + ' ' + poem.poet.surname}}</el-link>
    </p>
    <p class="a-poem-show__poet">Добавил: {{poem.owner.name}}
<!--      <el-link type="primary">{{poem.owner.name}}</el-link>-->
    </p>
    <p>Последние изменения: {{poem.createdAtAgo}}</p>
  </div>
</template>

<script>
  export default {
    name: "a-poem-show",
    computed: {
      poem() {
        return this.$store.getters["poems/poem"]
      }
    }
  }
</script>

<style lang="scss">
  .a-poem-show {

  }
</style>
