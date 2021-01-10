<template>
  <a-poet-show />
</template>

<script>
import pPoemsId from "~/mixins/p-poems_id"
import aPoetShow from '~/components/poet/a-poet-show'

export default {
  name: "poem",
  mixins: [ pPoemsId ],
  components: {
    aPoetShow
  }

}
</script>

<style scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
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
