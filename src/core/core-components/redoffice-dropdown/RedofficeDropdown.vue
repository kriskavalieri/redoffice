<template>
  <div class="form-group dropdown" v-dropdown.closeOnMenuClick>
    <button class="btn btn-primary btn-sm dropdown-toggle" 
            type="button"
            @click="onClickButton"
            data-toggle="dropdown">
      {{ selectedText }}
      <i class="ion-ios-arrow-down arrow-down"></i>
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" :style="dropdownStyle">
      <div class="dropdown-menu-content">
        <a class="dropdown-item" ref="dropdownItem"
            v-for="(option) in options" 
            @click="itemsSelected(option.value)"
            :key="option.value">
            <slot name="opts" :option="option">
                {{ option.value }}
            </slot>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import Dropdown from '../../core-directives/Dropdown'

  export default {
    name: "RedofficeDropdown",
    directives: {
      Dropdown
    },
    computed: {
        selectedText(){
            return this.selected || this.selectedOpt || this.options[0].value
        }
    },
    data(){
        return {
            isOpen: false,
            selectedOpt: null
        }
    },
    props: {
      selected: {type: String},
      options: {
        type: Array,
        required: true
      },
      dropdownStyle: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    methods: {
      itemsSelected (optionValue) {
        this.selectedOpt = optionValue
        this.$emit('itemSelected', optionValue)
      },
      onClickButton(e){
          this.isOpen = !this.isOpen
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../sass/variables";

  .btn.dropdown-toggle, .dropdown-menu {
    min-width: 13rem;
    max-width: 13rem;
    z-index: 11;
  }

  .dropdown-item, .dropdown-toggle {
    text-transform: uppercase;
  }

  .dropdown {
    .dropdown-menu{
        top: 27px;
        left: 0px;
      }
  }


</style>
