export default {
  data() {
    return {
      formProcessing: false,
    }
  },
  methods: {
    errorQueryCheck(data) {
      if (data.violations) {
        data.violations.forEach( (item, i, items) => {
          items[i].path = [item.propertyPath]

          delete items[i].propertyPath
        })

        this.errors = data.violations

      } else {
        this.$message({   // alert message
          showClose: true,
          message: data.error ? data.error : 'Неизвестная ошибка',
          type: 'error'
        })
      }
    }
  }
}


