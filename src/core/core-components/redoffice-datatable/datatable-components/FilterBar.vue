<template>
  <div class="filter-bar-container form-group with-icon-left pl-3">
    <div class="input-group" :style="{'top': '19px'}">
      <div class="row">
        <div class="col filterbar-select" :style="{'left': '10px'}">
          <redoffice-simple-select
            v-if="filterFields[0]"
            v-model="fieldOptionModel"
            option-key="description"
            :label="'Search by:'"
            :selectedCallback="selectedCallback"
            :style="{'margin-left': 'auto', 'margin-right': 'auto'}"
            :options="filterFields">
          </redoffice-simple-select>
        </div>
        <div class="col filterbar-search" :style="{'margin-top': '7px'}">
          <i class="glyphicon glyphicon-search icon-left input-icon search-icon"></i>
          <template v-if="selectedFilter.match('date|time') === null">
            <input id="input-icon-left" name="input-icon-left" @keyup="doFilter()" v-model="filterText" required/>
            <label class="control-label" for="input-icon-left">Search</label>
          </template>
          <slot v-else name="date-component"><input type="date" required></slot>
          <i class="bar"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'filterBar',
    props: {
      filterFields: {
        type: Array,
        default(){
          return []
        }
      }
    },
    data () {
      return {
        selectedFilter: '',
        filterText: '',
        fieldOptionModel: ''
      }
    },
    methods: {
      selectedCallback(option){
        this.selectedFilter = option.id
        this.$emit("selectedFilter", option.id)
      },
      doFilter(){
        this.$emit('filter', this.filterText, this.fieldOptionModel.id)
      }
    }
  }
</script>

<style lang="scss">
  .search-icon {
    transform: rotate(90deg);
  }

  .form-group {
    min-width: 7rem;
  }

  @media (max-width: 768px) {
    .filter-bar-container {
      .form-group {
          width: 80%;
        }
    }
  }

  @media (max-width: 500px) {
    .filterbar-select {
      padding-left: 0 !important;
    }
    .filterbar-search {
      margin-bottom: 2rem;
      max-width: 237px !important;
      min-width: 237px !important;
    }
    .with-icon-left {
      padding: 0 !important;
      max-width: 237px !important;
      min-width: 237px !important;
    }
    .filterbar-select, .filterbar-search {
      margin-left: auto;
      margin-right: auto;
    }
    .form-group.select-form-group .dropdown-menu {
        margin-left: -1.2rem;
    }
  }

  .filterbar-search {
    input:focus ~ .control-label {
      left: 15px;
    }

  }


</style>
