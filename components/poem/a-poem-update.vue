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
          <p class="body__under-text">Введите названия стихотворения (необязательно)</p>
          <el-input
            class="body__text"
            placeholder="названия стихотворения"
            type="text"
            v-model="poem.name"
          />

          <p class="body__under-text">Введите текст стихотворения</p>
          <el-input
            class="body__text"
            placeholder="Введите текст стихотворения"
            type="textarea"
            v-model="poem.text"
            :autosize="{ minRows: 8, maxRows: 15}"
          />

          <div class="body__content">
            <p class="body__under-text">Выберите писателя</p>
            <p v-if="loadingPoem">Loading...</p>
            <el-select
              v-else
              class="body__content--poet"
              v-model="poetId"
              filterable
              placeholder="Создатель"
            >
              <el-option
                v-for="poet in poets"
                :key="poet['@id']"
                :label="poet.name + ' ' + poet.surname"
                :value="poet['@id']"
              />
            </el-select>

            <p class="body__under-text">Выберите теги</p>
            <el-select
              v-model="value"
              multiple
              filterable
              allow-create
              default-first-option
              placeholder="Теги для стихотворения"
            >
              <el-option
                v-for="tag in tags"
                :key="tag.value"
                :label="tag.label"
                :value="tag.value"
              />
            </el-select>

            <p class="body__under-text">Введите описания стихотворения (необязательно)</p>
            <el-input
              class="body__text"
              placeholder="Введите текст стихотворения"
              type="textarea"
              v-model="poem.description"
              :autosize="{ minRows: 4, maxRows: 15}"
            />

          </div>

          <el-button @click.prevent="updatePoem"
                     class="body__submit"
                     type="primary"
          >
            {{isUpdate ? 'Изменить' : 'Добавить'}}
          </el-button>
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
        loadingPoem: false,
        poem: {
          poet: null,
          owner: this.$store.getters['auth/user']['@id']    // default creator
        },
        poets: [],
        poetId: '',
        tags: [{
          value: 1,
          label: 'ватан'
        }, {
          value: 2,
          label: 'бародари'
        }, {
          value: 3,
          label: 'мухаббат'
        }],
        value: ''
      }
    },
    methods: {
      updatePoem() {
        if (this.$store.getters["auth/hasToken"]) {   // TODO: You'll need to add validation!!!
          this.poem.poet = this.poetId
          console.log(this.poem)
          this.$store.dispatch('poem/updatePoem', {
            token: this.$store.getters["auth/token"],
            data: this.poem,
            isUpdate: this.isUpdate
          })
            .then(data => {
              if (data.id) {
                this.$router.push({ name: 'poems-id', params: { id: data.id } })
              } else {
                console.log(data)
                this.$message({
                  showClose: true,
                  message: `Не получилось ${this.isUpdate ? 'обновить' : 'создать'} стихотворения`,
                  type: 'error'
                })
              }
            })
        }

      }
    },
    mounted() {
      if (this.isUpdate) {
        this.poem = JSON.parse(JSON.stringify(this.$store.getters['poem/poemById'](+this.$route.params.id))) // copy object
        this.poem.text = this.poem.text.replace(/<br\s*[\/]?>\s{0,}/gi, '\n')

        if (this.poem.description) {
          this.poem.description = this.poem.description.replace(/<br\s*[\/]?>\s{0,}/gi, '\n')
        }

        this.poetId = this.poem.poet['@id']
      }

      if (this.$store.getters['poet/poets'].length === 0) {
        this.loadingPoem = true

        this.$store.dispatch('poet/fetchPoets').then(() => {
          this.poets = this.$store.getters['poet/poets']

          this.loadingPoem = false
        })
      } else this.poets = this.$store.getters['poet/poets']
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

        &__under-text {
          font-weight: 500;
          padding-bottom: 8px;
          padding-top: 15px;
          font-size: 14px;
        }

        &__text {
          width: 98%;
          display: block;
        }

        &__content {    // body content
          margin: 20px 0;
          border-top: 1px solid var(--app-border-menu);

          &--poet {

          }

          &--owner {

          }

          &--date {
            margin: 15px 0;
          }
        }

        &__submit {
          margin: 0 auto 10px;
          display: block;
        }
      }
    }
  }
</style>
