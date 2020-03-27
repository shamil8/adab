<template>
  <div class="container">
    <h1> portal</h1>
    <el-button type="primary" plain>Adib</el-button>
    <img src="~assets/images/man.gif" alt="Man">
    <div id="app">
      <h2>list:</h2>
      <el-scrollbar wrap-class="list" wrap-style="color: red;" view-style="font-weight: bold;" view-class="view-box" :noresize="true" :native="false">
        <div v-for="value in num" :key="value">
          {{value}}
        </div>
      </el-scrollbar>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      num: 30
    }
  },
    components: {

    },

}
</script>

<style lang="scss">
.container {
  font-size: $g-font-family-default;
  img {
    width: 80%;
    display: none;
  }
}
#app {
  height: 300px;
  overflow: hidden;
  max-width: 300px;
  background: #fff;
}
.el-scrollbar__thumb {
  display: block;
  background: #ffcc33;
  &:hover {
    background: #ffcc33;
  }
}

.list {
  max-height: 200px;
}

</style>
