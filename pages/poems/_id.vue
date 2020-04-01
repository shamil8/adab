<template>
    <div class="poem">
      Poem {{$route.params.id}}
      <h3>{{poem.name}}</h3>
      <a href="#">{{poem.email}}</a>
    </div>
</template>

<script>
  export default {
    validate({params}) {
      return /^\d+$/.test(params.id)
    },
    async asyncData({$axios, params}) {
      const poem = await $axios.$get('https://jsonplaceholder.typicode.com/users/' + params.id)
      return {poem}
    }
  }
</script>

<style lang="scss">

</style>
