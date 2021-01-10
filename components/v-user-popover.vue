<template>
  <el-popover
    class="v-user-popover"
    placement="bottom"
    width="300"
    trigger="click"
  >
    <el-button slot="reference" class="v-user-popover__reference" circle>
      <img class="v-user-popover__reference--image" src="../assets/images/avatar.png" alt="Img">
    </el-button>

    <div v-if="user" class="v-user-popover__container">
      <img class="v-user-popover__container--image" src="../assets/images/avatar.png" alt="Img">
      <h3 class="v-user-popover__container--name">{{user.name ? user.name : 'Hi!'}}</h3>
      <cDayNightToggle class="v-user-popover__container--day-night"/>
<!--      @click="$router.push({ name: 'poets-id', params: { id: poem.poet.id } })"-->
      <el-link
        @click="$router.push({ name: 'settings' })"
        type="primary"
        class="ling-settings"
      >
        <el-button><i class="el-icon-setting"/> Settings</el-button>
      </el-link>
<!--      <nuxt-link to="settings"></nuxt-link>-->
      <el-button @click.prevent="logout"><i class="el-icon-pear"/>Log out</el-button>
    </div>

  </el-popover>
</template>

<script>
    import cDayNightToggle from "./c-day-night-toggle"

    export default {
      name: "v-user-popover",
      components: {
        cDayNightToggle
      },
      computed: {
        user() {
          return this.$store.getters['auth/user']
        }
      },
      methods: {
        logout() {
          this.$store.dispatch('auth/logout')
          // this.$router.push('/')
        }
      }
    }
</script>

<style lang="scss">
  .v-user-popover {

    &__reference {
      background: none;
      border: none;
      padding: 0;
      line-height: 0;
      &:hover, &:focus {
        background: none;
      }
      &.is-circle {
        padding: 0;
      }

      &--image {
        width: 40px;
        height: 40px;
        padding: 2px;
        border-radius: 50%;
        border: 1px solid var(--app-border-menu);
        &:hover, &:focus {
          transition: 0.25s;
          border: 1px solid $blue;
        }
      }
    }

    &__container {
      margin: 0 auto;
      text-align: center;

      &--image {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 1px solid var(--app-border-menu);
        padding: 3px;
      }
      &--name {

      }
      &--day-night {
        display: block;
        margin: 6px auto;
      }

      .ling-settings:hover {
        text-decoration: unset; // TODO:: remove link decoration!
      }

     }

    .el-button {
      background: var(--app-background);
      color: var(--app-text-main);
    }
  }

  // Default style element-ui

  .el-popover {
    border-color: var(--app-border-menu);
    background-color: var(--app-background);
    margin-top: 9px !important;
  }
  .popper__arrow, .popper__arrow::after {
    border-bottom-color: var(--app-border-menu) !important;
  }
</style>
