<template>
  <div class="container">
    <h1> portal</h1>
    <el-button type="primary" plain>Adib</el-button>

    <img src="~assets/images/man.gif" alt="Man">
  </div>
</template>

<script>

export default {
    components: {

    },

}
</script>

<style lang="scss">
.container {
  font-size: $g-font-family-default;

  /*
* === THEME SWITCH ===
*/
  input.theme-switch {
    display: none;
  }

  input.theme-switch + label {
    cursor: pointer;
  }

  input.theme-switch:not(:checked) + label:hover {
    cursor: pointer;
  }

  input.theme-switch + label:active,
  input.theme-switch:checked + label {
    cursor: pointer;
  }
}
</style>
