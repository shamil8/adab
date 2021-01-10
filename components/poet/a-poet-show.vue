<template>
  <div class="a-poem-show">
    <el-card class="a-poem-show__card" :ref="refParentContainer">
      <div slot="header" :ref="refHeader" class="a-poem-show__card--header header">
        <el-page-header class="header__back" title="Назад" @back="$router.push({name: 'poems'})" />
        <span class="header__title">{{poem.name}}</span>
      </div>


      <div class="a-poem-show__card--body body">
        <p class="body__text" v-html="poem.text"></p>

        <div class="body__content">
          <p class="body__content--poet">Устод:
            <el-link type="primary">{{poem.poet.name + ' ' + poem.poet.surname}}</el-link>
          </p>
          <p class="body__content--owner">
            Добавил: {{$store.getters['auth/isUser'] && isOwner ? 'вы' : ''}} {{poem.owner.name}}
            <!--      <el-link type="primary">{{poem.owner.name}}</el-link>-->
          </p>
          <p class="body__content--date">Последние изменения: {{poem.createdAtAgo}}</p>
        </div>

        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item name="1">
            <template slot="title">
              Описание <i class="header-icon el-icon-info"></i>
            </template>
            <div v-html="poem.description"></div>
          </el-collapse-item>
          <el-collapse-item title="Тафсир" name="2">
            <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
            <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-card>
  </div>
</template>

<script>
import fScrollHeight from '~/mixins/f-scroll-height'

export default {
  name: "a-poet-show",
  mixins: [fScrollHeight],
  data() {
    return {
      activeNames: ['1', '2'],

      headerClass: 'header-scroll',  // data mixin fScrollHeight
      refParentContainer: 'header-parent-container',
      refHeader: 'header',
      pageTopOffset: 75
    }
  },
  computed: {
    poem() {
      return this.$store.getters['poem/poemById'](+this.$route.params.id)
    },
    isOwner() {
      return this.poem.hasOwnProperty('owner')
        && this.poem.owner['@id'] === this.$store.getters['auth/user']['@id']
    }
  },
  methods: {
    handleChange(val) {
      console.log(val)
    }
  }
}
</script>

<style scoped>

</style>
