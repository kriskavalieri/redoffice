<template>
  <div class="form-group with-icon-right dropdown select-form-group"
       v-dropdown.closeOnMenuClick
       :class="{'has-error': hasErrors()}">
    <div class="input-group dropdown-toggle">
      <input
        readonly
        :class="{'has-value': !!displayValue}"
        v-model="displayValue"
        :name="name"
        required/>
      <i class="ion ion-md-arrow-dropdown icon-right input-icon"></i>
      <slot name="labelSlot" :label="label">
        <label class="control-label text-left pl-0">
            {{ label }}
        </label>
        <i class="bar"></i>
      </slot>
      <small v-show="hasErrors()" class="help text-danger">{{ showRequiredError() }}</small>
    </div>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <scrollbar ref="scrollbar">
        <div class="dropdown-menu-content">
          <div class="dropdown-item"
               :class="{'selected': isOptionSelected(option)}" v-for="option in options" :key="option.id"
               @click="selectOption(option)">
              <slot name="optSlot" :option="optionKey ? option[optionKey] : option">
                <span class="ellipsis">
                    {{optionKey ? option[optionKey] : option}}
                </span>
              </slot>
          </div>
        </div>
      </scrollbar>
    </div>
  </div>
</template>

<script>
  import Dropdown from '../../core-directives/Dropdown'
  import Scrollbar from '../redoffice-scrollbar/Scrollbar.vue'

  export default {
    name: 'redoffice-simple-select',
    components: {
      Scrollbar
    },
    directives: {
      dropdown: Dropdown
    },
    data () {
      return {
        displayValue: '',
        validated: false
      }
    },
    props: {
      label: String,
      options: Array,
      value: {},
      optionKey: String,
      required: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        default: 'simple-select'
      },
      selectedCallback: {
        type: Function,
        default: (option) => {}
      }
    },
    mounted () {
      this.updateDisplayValue(this.value)
      this.$emit('input', this.value)
    },

    updated: function () {
      this.updateDisplayValue(this.value)
    },

    methods: {
      isOptionSelected (option) {
        return this.value === option || !!option.selected
      },
      selectOption (option) {
        this.updateDisplayValue(option)
        this.$emit('input', option)
        this.selectedCallback(option)
      },
      updateDisplayValue (val) {
        this.displayValue = this.optionKey ? val[this.optionKey] : val
      },
      validate () {
        this.validated = true
      },
      isValid () {
        let isValid = true
        if (this.required) {
          isValid = !!this.displayValue
        }
        return isValid
      },
      hasErrors () {
        let hasErrors = false
        if (this.required) {
          hasErrors = this.validated && !this.displayValue
        }
        return hasErrors
      },
      showRequiredError () {
        return `The ${this.name} field is required`
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/variables";

  .select-form-group {
    .dropdown-toggle {
      input {
        color: transparent;
        text-shadow: 0 0 0 #000;
        cursor: pointer;
      }
    }
    
    .dropdown-menu {
      padding: 0;
      .redoffice-scrollbar {
        height: $dropdown-item-height * 4;
      }
    }
  }
</style>
