<template>
  <div class="a-poem-update">
    <el-card class="a-poem-update__card">
      <div slot="header" class="a-poem-update__card--header header">
        <el-page-header class="header__back" title="Назад" @back="$router.push({name: 'poems'})" />
        <span class="header__title">{{isUpdate ? 'Редактирование' : 'Добавление'}} стихотворения</span>
      </div>
      <form>
      <div class="a-poem-update__card--body body">
        <el-scrollbar class="body__scrollbar" :native="false">
          <el-input
            class="body__text"
            type="textarea"
            :autosize="{ minRows: 8, maxRows: 35}"
            placeholder="Введите текст стихотворения"
            v-model="poem.text"
          />

          <div class="body__content">
            <el-select
              class="body__content--poet"
              v-model="poem.poet.id"
              filterable
              placeholder="Создатель"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>

            <br>

            <el-select
              v-model="value"
              multiple
              filterable
              allow-create
              default-first-option
              placeholder="Choose tags for your article">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>

          <el-button @click.prevent="updatePoem" class="body__submit" type="primary">Сохранить</el-button>
          <br><br><br><br><br><br><br><br><br><br>
        </el-scrollbar>
      </div>
      </form>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "a-poem-update",
    props: {
      isUpdate: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        poem: {
          poet: {},
          owner: {}
        },
        options: [{
          value: 1,
          label: 'HTML'
        }, {
          value: 2,
          label: 'CSS'
        }, {
          value: 3,
          label: 'JavaScript'
        }],
      }
    },
    methods: {
      updatePoem() {
        this.$router.push({name: 'poems'})
      }
    },
    // computed: {
    //   poemUpdate() {
    //
    //   }
    // },
    mounted() {
      if (this.isUpdate) {
        this.poem = this.$store.getters['poems/poemById'](+this.$route.params.id)
      }
    }
  }
</script>

<style lang="scss">
  .a-poem-update {
    &__card {
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
        height: 500px;
        overflow: hidden;

        &__scrollbar {
          height: 100%;

          .el-scrollbar__wrap {
            overflow-x: hidden;
          }
          .el-scrollbar__bar.is-horizontal {
            display: none;
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

        &__submit {
          margin: 0 auto;
          display: block;
        }
      }
    }
  }
</style>
