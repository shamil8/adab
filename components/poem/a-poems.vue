<template>
  <div class="a-poems">
    <el-button
      v-if="$store.getters['auth/hasToken']"
      @click="$router.push({name: 'poems-new'})"
      class="a-poems__new"
    >
      <i class="el-icon-plus"/>
    </el-button>

    <a-poem
      v-for="(poem, index) in poems"
      :key="poem.id"
      :poem="poem"
      :index="index"
      @removePoem="delPoem = {isDelModal: true, index: index, id: poem.id}"
    />

    <el-dialog
      :visible.sync="delPoem.isDelModal">
      <span>Вы уверены, что хотите удалить данное стихотворение?</span>
      <span slot="footer" class="dialog-footer">
                <el-button @click="delPoem.isDelModal = false">Отмена</el-button>
                <el-button type="danger" @click="removePoem">Удалить</el-button>
            </span>
    </el-dialog>

  </div>
</template>

<script>
  import aPoem from './a-poem'

  export default {
    name: "a-poems",
    data() {
      return {
        delPoem: {
          isDelModal: false,
          index: null,
          id: null
        }

      }
    },
    computed: {
      searchText () {
        return this.$store.getters['variables/getSearchText']
      },
      poems() {
        let poems = this.$store.getters['poem/poems']
        if(this.searchText) {
          poems = this.filterByName(this.searchText, poems)
        }
        return poems
      }
    },
    methods: {
      filterByName(letter, arr){
        const res = []
        arr.forEach(item => item.name.indexOf(letter) === 0 && res.push(item))

        return res
      },
      removePoem() {
        this.delPoem.isDelModal = false
        console.log('We need to add query axios!', this.delPoem)
      }

    },
    components: {
      aPoem
    }
  }
</script>

<style lang="scss">
  .a-poems {
    display: grid;
    /*padding: 24px;*/
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 1rem;
    @media (max-width: 560px) {
      padding: 24px;
    }

    &__new {
      background: var(--app-background);
      font-size: 55px;

      .el-icon-plus {
        color: var(--app-text-normal);
      }
    }
  }
</style>
