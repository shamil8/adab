<template>
  <el-card>
    <img @click="showPoet(poet.id)" :src="poet.url || url" class="image">
    <div class="main-cont" style="padding: 14px;">
      <span class="name" @click="showPoet(poet.id)">{{ `${poet.name} ${poet.surname}` }}</span>
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
      url: '/default-poet.png'
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

<style lang="scss" scoped>
.image {
  width: 100%;
  max-height: 150px;
  display: block;
  cursor: pointer;
}

.main-cont {
  padding: 14px 0 0  !important;

  .name {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
      transition: 200ms;
    }
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .date-birth {
    margin-bottom: 7px;
  }

  .time {
    display: block;
    font-size: 13px;
    color: #999;
  }

  .right-but {
    padding: 0;
    float: right;
  }
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
