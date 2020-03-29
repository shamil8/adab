<template>
    <div class="poem">
      Poem {{$route.params.id}}
    </div>
</template>

<script>
    export default {
        validate({params}) {
          return /^\d+$/.test(params.id)
        }
    }
</script>

<style lang="scss">

</style>
