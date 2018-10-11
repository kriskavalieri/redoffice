<template>
  <fingerprint-spinner
    v-if="loaderType === 'finger_spinner'" class="mb-3" :animation-duration="1500" :size="loaderSize" :color="'#d1021b'" :class="'spinnerClass'"/>
  <breeding-rhombus-spinner 
    v-else-if="loaderType === 'explode'" class="mb-3" :animation-duration="1500" :size="loaderSize" color="'#d1021b'" :class="'spinnerClass'"/>
  <half-circle-spinner 
    v-else-if="loaderType === 'circle'"  class="mb-3" :animation-duration="1000" :size="loaderSize" :class="'spinnerClass'" color="#ff1d5e" /> 
  <span v-else-if="loaderType === 'none'" />
</template>

<script>
  import {FingerprintSpinner, BreedingRhombusSpinner, HalfCircleSpinner} from 'epic-spinners'
  export default {
    name: 'redoffice-pre-loader',
    props: {
      loaderSize: {
        type: Number
      },
      loaderType: {
        type: String,
        default: 'finger_spinner'
      }
    },
    components: {
      FingerprintSpinner,
      BreedingRhombusSpinner,
      HalfCircleSpinner
    }
  }
</script>
<style lang="scss" scoped>
  .spinnerClass{
    margin: auto;
    left: 0 !important;
  }
</style>


