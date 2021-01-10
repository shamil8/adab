<template>
  <el-row class="a-poets">
    <el-col
      v-for="(poet, index) in poets"
      :span="5"
      :key="poet.id"
      :offset="index > 0 ? 1 : 0"
    >
      <a-poet
        :key="poet.id"
        :poet="poet"
        :index="index"
        @removePoem="delPoem = {isDelModal: true, index: index, id: poet.id}"
        class="a-poet"
      />
    </el-col>
  </el-row>
</template>

<script>
import aPoet from './a-poet'

export default {
  name: "a-poets",
  data () {
    return {

    }
  },
  computed: {
    poets () {
      let poets = this.$store.getters['poet/poets']
      if (this.searchText) {
        poets = this.filterByName(this.searchText, poets)
      }

      return poets
    },
    searchText () {
      return this.$store.getters['variables/getSearchText']
    }
  },
  methods: {
    filterByName(letter, arr){
      const res = []
      arr.forEach(item => item.name.indexOf(letter) === 0 && res.push(item))

      return res
    }
  },
  components: {
    aPoet
  }
}
</script>

<style lang="scss">
.a-poets {

  .a-poet {

  }
}
</style>
