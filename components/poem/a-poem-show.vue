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
          <p class="body__content--owner">Добавил: {{poem.owner.name}}
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
    name: "a-poem-show",
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
      }
    },
    methods: {
      handleChange(val) {
        console.log(val)
      }
    }
  }
</script>

<style lang="scss">
  .a-poem-show {
    .header-scroll {
      z-index: 200;
      position: absolute;
      padding: 18px 20px;
      margin-left: -20px;
      border-bottom: 1px solid #EBEEF5;
      box-sizing: border-box;
      background-color: var(--app-background);
    }
    &__card {
      background-color: var(--app-background);
      color: var(--app-text-normal);
      &--header, .header {  // card header
        &__back {
          display: inline-block;
          &:hover {
            transition: 0.3s;
            color: $blue;
          }
        }

        &__title {
          text-align: center;
          font-weight: 600;
        }
      }

      &--body, .body {  // card body

        .el-collapse-item {  // Element UI collapse
          &__wrap, &__header {
            background-color: var(--app-background);
            color: var(--app-text-normal);
          }
          &__content {
            color: var(--app-logo-text);
          }
        }

        &__text {
          text-align: center;
        }

        &__content {    // body content
          margin: 20px 0;
          border-top: 1px solid var(--app-border-menu);

          &--poet {
            margin: 15px 0;
          }

          &--owner {

          }

          &--date {
            margin: 15px 0;
          }
        }
      }
    }
  }
</style>
