/**
 * @refHeader = 'header'| string  // It's ref argument
 * @refParentContainer = 'parent-container' | string  // It's parent container
 * @headerClass = 'header'| string  // This class is for changing css
 * @pageTopOffset = 75 | int  // It's top offset in page
 *
 */
const fScrollHeight = {
  data() {
    return {
      refHeader: 'header',
      refParentContainer: 'parent-container',
      headerClass: 'header',
      pageTopOffset: 75,
      clientWidth: null
    }
  },

  methods: {
    handleScroll() {  // TODO: You need to upgrade it!
      const pageYOffset = window.pageYOffset  // distances from the beginning of pages
      const parentHeader = this.$refs[this.refParentContainer]
      const header = this.$refs[this.refHeader]
// console.log(pageYOffset)
      const clientWidth = parentHeader.hasOwnProperty('clientWidth')
        ? parentHeader.clientWidth : parentHeader.$el.clientWidth

      if (pageYOffset > this.pageTopOffset) {
        header.classList.add(this.headerClass)
        header.style.top = `${pageYOffset}px`
        header.style.width = `${clientWidth}px`
      } else {
        header.classList.remove(this.headerClass)
        header.style.top = ''
      }
    }
  },

  mounted() {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll)
  },

  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}

export default fScrollHeight
