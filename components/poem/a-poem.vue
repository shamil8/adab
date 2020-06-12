<template>
  <div class="a-poem">
    <el-card class="a-poem-item" :body-style="{ padding: '0px' }">
      <div slot="header" class="a-poem-item__header">
        <span @click="showPoem(poem)" class="a-poem-item__header--title">
          {{poem.name}}
          <span><i class="el-icon-view"/></span>
        </span>

        <div class="a-poem-item__header--action">
          <span @click="$router.push({ name: 'poems-id-update', params: { id: poem.id } })" class="action__edit">
            <i class="el-icon-edit-outline"/>
          </span>

          <span @click="$emit('removePoem')" class="action__delete">
            <i class="el-icon-delete"/>
            <!--          <i v-else class="el-icon-loading"/>-->
          </span>
        </div>
      </div>


      <div class="a-poem-item__info">
        <p @click="showPoem(poem)" v-html="poem.shortText" class="a-poem-item__info--text"></p>

        <p class="a-poem-item__info--address">Устод:
          <el-link type="primary">{{poem.poet.name + ' ' + poem.poet.surname}}</el-link>
        </p>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "a-poem",
    props: {
      poem: {
        type: Object,
        default: {}
      },
      index: {
        type: Number,
        default: null
      }
    },
    methods: {
      showPoem(poem) {
        this.$router.push({ name: 'poems-id', params: { id: poem.id } })
      }
    }
  }
</script>

<style lang="scss">
  .a-poem-item {
    background: var(--app-background);
    position: relative;

    .el-card__header {   // It's UI element
      padding: 16px 16px 12px;
    }

    &__header {      //Information block
      &:before,
      &:after {
        display: table;
        content: "";
      }
      &:after {
        clear: both
      }

      &--title {
        font-size: 1.2rem;
        font-weight: 600;
        text-align: left;
        color: var(--app-logo-text);
        cursor: pointer;
        text-decoration: none;
        &:hover {
          transition: 0.3s;
          color: $blue;
        }
      }

      &--action, .action {
        background: rgba(var(--app-background),0.5);
        float: right;
        padding: 3px 0;
        border-radius: 0.2rem;

        &__edit, &__delete {
          cursor: pointer;
          color: var(--app-logo-text);
          &:hover {
            transition: 0.3s;
            color: $red;
          }
        }

        &__edit {
          margin-right: 8px;
          &:hover {
            color: $blue;
          }
        }
      }
    }

    &__info {    //Information block
      padding: 16px;
      text-align: left;

      &--text {
        cursor: pointer;
      }

      &--address {
        margin-top: 16px;
        color: $grey;
        font-size: 0.8rem;
      }
    }
  }
</style>
