<template>
  <div class="container">
    <h1>Education portal</h1>
    <el-button type="primary" plain>Adib</el-button>
    <input type="checkbox" id='theme-switch' class='theme-switch' v-model="darkMode"/>
    <label for='theme-switch'>
                        <span v-if="darkMode === true">
                            <img alt="logo" src="~assets/images/sun.png" width="40">
                        </span>
      <span v-else>
                            <img alt="logo" src="~assets/images/moon.png" width="40">
                        </span>
    </label>
  </div>
</template>

<script>

export default {
    components: {

    },
    data() {
        return {
            darkMode: false,
        }
    },
    mounted() {
        // set page title
        document.title = 'Multiple Themes in Vue.js';

        // set 'app-background' class to body tag
        let bodyElement = document.body;
        bodyElement.classList.add("app-background");

        // check for active theme
        let htmlElement = document.documentElement;
        let theme = localStorage.getItem("theme");

        if (theme === 'dark') {
            htmlElement.setAttribute('theme', 'dark')
            this.darkMode = true
        } else {
            htmlElement.setAttribute('theme', 'light');
            this.darkMode = false
        }
    },
    watch: {
        darkMode: function () {
            // add/remove class to/from html tag
            let htmlElement = document.documentElement;

            if (this.darkMode) {
                localStorage.setItem("theme", 'dark');
                htmlElement.setAttribute('theme', 'dark');
            } else {
                localStorage.setItem("theme", 'light');
                htmlElement.setAttribute('theme', 'light');
            }
        }
    }
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
