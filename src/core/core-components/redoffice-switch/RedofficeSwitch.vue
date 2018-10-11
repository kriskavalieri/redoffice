<template>
  <div class="redoffice-switch">
    <div class="redoffice-switch-option true-option" :class="{'active': value}" @click.prevent="setValue(true)">
      <slot name="trueTitle"></slot>
    </div>
    <div class="redoffice-switch-option false-option" :class="{'active': !value}" @click.prevent="setValue(false)">
      <slot name="falseTitle"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'redoffice-switch',
    props: {
      value: Boolean
    },
    mounted () {
      this.$emit('input', this.value)
    },
    methods: {
      setValue (newVal) {
        this.$emit('input', newVal)
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/_variables.scss";

  .redoffice-switch {
    cursor: pointer;
    display: flex;
    flex-direction: row;

    .redoffice-switch-option {
      padding: $redoffice-switch-padding;
      border-top: $redoffice-switch-border-size solid transparent;
      border-bottom: $redoffice-switch-border-size solid $redoffice-switch-bg;
      background-color: transparent;
      transition: all 0.15s ease;
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 300;
      font-family: Montserrat;

      &.active {
        color: $white;
        background-color: $redoffice-switch-bg;
      }

      &:not(.active):hover {
        color: $brand-primary;
      }
    }
  }
</style>
