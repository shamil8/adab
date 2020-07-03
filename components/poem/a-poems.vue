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
      poems() {
        return this.$store.getters['poems/poems']
      }
    },
    methods: {
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
      font-size: 55px;
      color: $grey;
    }
  }
</style>
