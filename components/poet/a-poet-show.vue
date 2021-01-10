<template>
  <div class="a-poet-show">
    <el-card class="a-poet-show__card" :ref="refParentContainer">
      <div slot="header" :ref="refHeader" class="a-poet-show__card--header header">
        <el-page-header class="header__back" title="Back" @back="$router.push({name: 'poets'})" />
        <span class="header__title">{{ `${poet.name} ${poet.surname}` }}</span>
      </div>


      <div class="a-poet-show__card--body body">
        <div class="body__main">
          <div class="body__cont">
            <p class="body__cont--fullname">{{poet.fullName}}</p>
            <p class="body__cont--date-birth">Date of birth: {{ getYear(poet.dateBirth) }}</p>
            <p class="body__cont--date-death">Date of death: {{ getYear(poet.dateDeath) }}</p>
            <p class="body__cont--text" v-html="poet.biography"/>
          </div>
          <img class="body__img" :src="poet.url || url">
        </div>

        <div class="body__content">

        </div>

        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item name="1">
            <template slot="title">
              Biography <i class="header-icon el-icon-info"></i>
            </template>
            <div v-html="poet.biography"></div>
          </el-collapse-item>
          <el-collapse-item class="video-cont" title="Videos information" name="2">
            <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
            <iframe  width="420" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY" />
          </el-collapse-item>
        </el-collapse>

        <p class="last-change">The last change: {{poet.createdAtAgo || '-'}}</p>
      </div>
    </el-card>
  </div>
</template>

<script>
import fScrollHeight from '~/mixins/f-scroll-height'

export default {
  name: "a-poet-show",
  mixins: [fScrollHeight],
  data() {
    return {
      activeNames: ['1' ], // '2'
      url: '/default-poet.png',
      headerClass: 'header-scroll',  // data mixin fScrollHeight
      refParentContainer: 'header-parent-container',
      refHeader: 'header',
      pageTopOffset: 75
    }
  },
  computed: {
    poet() {
      return this.$store.getters['poet/poetById'](+this.$route.params.id)
    }
  },
  methods: {
    handleChange(val) {
      console.log(val)
    },
    getYear (date) {
      const year = date && this.$moment(date).format('Y') || '-'

      return Number(year[0]) === 0 ? year.slice(1) : year
    }
  }
}
</script>

<style lang="scss">
.a-poet-show {
  .header-scroll {
    z-index: 200;
    position: absolute;
    padding: 18px 20px;
    margin-left: -20px;
    border-bottom: 1px solid #EBEEF5;
    box-sizing: border-box;
    background-color: var(--app-background);
  }
  &__card {
    background-color: var(--app-background);
    color: var(--app-text-normal);
    &--header, .header {  // card header
      &__back {
        display: inline-block;
        &:hover {
          transition: 0.3s;
          color: $blue;
        }
      }

      &__title {
        text-align: center;
        font-weight: 600;
      }
    }

    &--body, .body {  // card body

      .el-collapse-item {  // Element UI collapse
        &__wrap, &__header {
          background-color: var(--app-background);
          color: var(--app-text-normal);
        }
        &__content {
          color: var(--app-logo-text);
        }
      }

      &__main {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
      }

      &__img {
        border-radius: 10px;
        max-width: 300px;
        max-height: 300px;
        text-align: right;
        right: 0;
      }

      &__cont {    // body content
        margin: 15px 25px 15px 0;

        &--fullname {
          margin: 15px 0;
          padding-bottom: 4px;
          border-bottom: 1px solid var(--app-border-menu);
          font-weight: bold;
        }

        &--date-birth, &--date-death {
          font-style: italic;
          padding: 4px 0;
        }

        &--text {
          margin-top: 10px;

        }
      }
    }

    .video-cont {
      text-align: center;
    }

    .last-change {
      margin-top: 12px;
      text-align: right;
      font-size: 12px;
    }
  }
}
</style>
