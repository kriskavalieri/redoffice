<template>
  <redoffice-dropdown 
      class="pr-3" 
      :selected="selectedText" 
      :options="options" 
      @itemSelected="selectedItemsPerPage" 
      :style="{top: '4px', margin: '0 0 1.5rem .5rem'}"
      :dropdownStyle="dropdownStyle" >
    <template slot="opts" slot-scope="slotProps">
      {{ slotProps.option.value }} per page
    </template>
  </redoffice-dropdown>

</template>

<script>

  export default {
    props: {
      options: {
        type: Array,
        required: true
      },
      defaultPerPage: {
        type: Number
      },
      dropdownStyle: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    computed: {
      selectedText(){
        return this.selected + " per page"
      }
    },
    data () {
      return {
        selected: this.defaultPerPage
      }
    },
    methods: {
      selectedItemsPerPage (optionValue) {
        this.selected = optionValue
        this.$emit('items-per-page', this.selected)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../../sass/variables";

  .btn.dropdown-toggle, .dropdown-menu {
    min-width: 13rem;
    max-width: 13rem;
  }

  .dropdown-item, .dropdown-toggle {
    text-transform: uppercase;
  }

</style>
