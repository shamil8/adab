<template>
  <el-card :body-style="{ padding: '0px' }">
    <img @click="showPoet(poet.id)" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
    <div style="padding: 14px;">
      <span  @click="showopenPoet(poet.id)">{{ `${poet.name} ${poet.surname}` }}</span>
      <div class="bottom clearfix">
        <time class="time date-birth">Тавалуд: {{ getYear(poet.dateBirth) }}</time>
        <time class="time">Вафот: {{ getYear(poet.dateDeath) }}</time>
        <el-link class="right-but" type="infxo" href="https://github.com/shamil8" target="_blank">Wiki</el-link>
      </div>
    </div>
  </el-card>

</template>

<script>

export default {
  name: "a-poet",
  props: {
    poet: { type: Object, default: {} }
  },
  data () {
    return {
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  },
  methods: {
    showPoet (id) {
      this.$router.push({ name: 'poets-id', params: { id } })
    },
    getYear (date) {
      const year = date && this.$moment(date).format('Y') || '-'

      return Number(year[0]) === 0 ? year.slice(1) : year
    }
  }
}
</script>

<style scoped>
.time {
  display: block;
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.right-but {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  max-height: 150px;
  display: block;
}

.date-birth {
  margin-bottom: 7px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
</style>
