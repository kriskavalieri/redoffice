
<template>
<div class="table-responsive redoffice-table">
  <div class="d-flex flex-md-row flex-column justify-content-md-between align-items-center">
    <filter-bar ref="filterBar" 
                v-if="canSearch" 
                :filterFields="filterFields" 
                @selectedFilter="onSelectedFilter" 
                @filter="onFilterSet">
      <template slot="date-component">
        <slot name="date-component"></slot>
      </template>
    </filter-bar>
    <items-per-page :options="itemsPerPage"
                    v-show="canPaginate"
                    :dropdownStyle="perPageDropdownStyle"
                    :defaultPerPage="defaultPerPageComputed"
                    :class="adjustItemsPerPageClass"
                    @items-per-page="onItemsPerPage"></items-per-page>
  </div>
  <vuetable ref="vuetable"
            :class="loadingClass"
            :apiUrl="apiUrl"
            :apiMode="apiMode"
            :fields="tableFields"
            :dataTotal="dataCount"
            :noDataTemplate="noDataTemplate"
            :css="css.table"
            :httpFetch="fetch"
            :detail-row-transition="'expand'"
            :track-by="trackBy"
            :paginationPath="paginationPath"
            :appendParams="moreParams"
            :perPage="perPage"
            :detail-row-component="detailRowComponent"
            :row-class="rowClass"
            dataPath="data"
            @vuetable:row-clicked="onRowClicked"
            @vuetable:pagination-data="onPaginationData">
  </vuetable>
  <div class="d-flex justify-content-center mb-4" v-show="canPaginate">
    <vuetable-pagination ref="pagination"
                          :css="css.pagination"
                          :onEachSide="onEachSide"
                          @vuetable-pagination:change-page="onChangePage">
    </vuetable-pagination>
  </div>
</div>
</template>
<script>
  import Vuetable from 'vuetable-2/src/components/Vuetable'
  import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
  import FilterBar from './datatable-components/FilterBar.vue'
  import ItemsPerPage from './datatable-components/ItemsPerPage.vue'
  import Vue from 'vue'
  import _ from 'lodash'

  const DataTableStyles = {
      table: {
        tableClass: 'table table-striped',
        loadingClass:  'loading',
        ascendingIcon: 'ion ion-ios-arrow-up',
        descendingIcon: 'ion ion-ios-arrow-down',
        detailRowClass: 'detail-row-default'
      },
      pagination: {
        wrapperClass: 'btn-group redoffice-btn-group',
        activeClass: 'focus',
        disabledClass: 'disabled',
        pageClass: 'btn btn-primary hide-not-focused-btn',
        linkClass: 'btn btn-primary pagination-link-btn',
        icons: {
          first: 'ion ion-md-skip-backward',
          prev: 'ion ion-md-fastforward flipped',
          next: 'ion ion-md-fastforward',
          last: 'ion ion-md-skip-forward'
        }
      }
  }

  export default {
    name: 'redoffice-data-table',
    components: {
      FilterBar,
      Vuetable,
      VuetablePagination,
      ItemsPerPage
    },
    props: {
      perPageDropdownStyle: {
        type: Object,
        default(){
          return {}
        }
      },
      adjustItemsPerPageClass: {
        type: String,
        default: 'adjust-to-right'
      },
      canPaginate: {
        type: Boolean,
        default: true
      },
      rowClass: {
        type: String
      },
      onRowClicked: {
        type: Function,
        default(){
          return (dataItem, event) => {}
        }
      },
      trackBy: {
        type: String
      },
      detailRowComponent: {
        type: String
      },
      canSearch: {
        type: Boolean,
        default: false
      },
      apiUrl: {
        type: String
      },
      tableFields: {
        type: Array,
        required: true
      },
      itemsPerPage: {
        type: Array
      },
      defaultPerPage: {
        type: Number
      },
      onEachSide: {
        type: Number,
        default: 2
      },
      paginationPath: {
        type: String,
        default: ''
      },
      transformFn: {
        type: Function,
        default(){
          return (data) => data
        }
      },
      apiMode: {
        type: Boolean,
        default: true
      },
      filterFields: {
        type: Array,
        default(){
          return []
        }
      },
      queryParams: {
        type: Object,
        default(){
          return {
            page: 'page',
            per_page: 'per_page',
            sort_field: 'sort',
            sort_order: 'desc',
            desc_word: 'desc',
            asc_word: 'asc'
          }
        }
      },
      transformSearchQuery: {
        type: Function,
        default: q => {
          return {
            filter_val: _.trim(q.filter_value),
            filter_field: _.trim(q.filter_field)
          }
        }
      }
    },
    data () {
      return {
        noDataTemplate: `<div class="text-center empty-text">No data available</div><div class="mt-3 half-circle-spinner"> <div class="circle circle-1"></div> <div class="circle circle-2"></div> </div>`,
        perPage: this.defaultPerPage,
        isloading: false,
        colorClasses: {},
        moreParams: {},
        dataCount: 0,
        current_page: 1,
        css: DataTableStyles,
        response_headers: {}
      }
    },
    computed: {
      defaultPerPageComputed () {
        return this.perPage
      },
      loadingClass(){
        return this.isloading && 'loading' || ''
      }
    },
    methods: {
      transform(data){
        return this.transformFn(data)
      },
      async fetch(url, httpOptions){
        let search_obj = Object.keys(this.moreParams).length === 0 ? {} : this.transformSearchQuery(this.moreParams)
        var sortQuery = {}
        if(httpOptions.params.sort){
          let [sortField, sortDir] = httpOptions.params.sort.split("|")
          sortQuery = {
            [this.queryParams.sort_field]: sortField,
            [this.queryParams.sort_order]: this.queryParams[`${sortDir}_word`]
          }
        }
        let query = {
          [this.queryParams.page]: httpOptions.params.page,
          [this.queryParams.per_page]: httpOptions.params.per_page,
          ...search_obj,
          ...sortQuery
        }

        this.isloading = true
        let resp = await this.axios_inst.get(url, {query})
        this.isloading = false
        if(resp.status > 200){
          this.error("Couldn't fetch data for the table: " + resp.source.message || resp.statusText)
          return null
        }
        this.response_headers = resp.headers
        return resp
      },
      onFilterSet(filterText, filterField) {
        if(filterText){
          this.moreParams = {
            filter_field: filterField,
            filter_value: filterText
          }
          Vue.nextTick(() => this.$refs.vuetable.refresh())
        }
        else{
          this.moreParams = {}
          Vue.nextTick(() => this.$refs.vuetable.refresh())
        }
      },
      onSelectedFilter(filter){
        let sel = document.querySelector("#_" + filter)
        document.querySelectorAll(".vuetable.table.table-striped th").forEach(item => {
          item.classList.remove("marked-filter")
        })
        sel.classList.add("marked-filter")
      },
      onItemsPerPage (itemsPerPageValue) {
        this.perPage = itemsPerPageValue
        Vue.nextTick(() => this.$refs.vuetable.refresh())
      },
      onPaginationData (paginationData) {
        this.$refs.pagination.setPaginationData(paginationData)
      },
      onChangePage (page) {
        if(page === 'prev') this.current_page--
        else if(page === 'next') this.current_page++
        else this.current_page = page

        this.$refs.vuetable.changePage(page)
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/variables";
  .redoffice-table{
    .vuetable.loading{
      tbody{
        .vuetable-empty-result{
          .empty-text{
            opacity: 0;
          }
          .half-circle-spinner{
            display: block;
          }
        }
      }
    }
  }
  .adjust-to-right{
    right: 6px;
  }
  .adjust-to-left{
    left: 4px;
  }
  .marked-filter{
    border: 2px solid $that-cool-red !important;
    border-bottom: 2px solid white !important;
  }
  .row-collapsible{
    cursor: pointer;
  }
  .detail-row-default:nth-of-type(even){
    // transition: all 1s ease;
    background: linear-gradient(white 1%, #d2d2d2);
  }
  .detail-row-default:nth-of-type(odd){
    background: linear-gradient(#eff4f5, #d2d2d2);
  }
  .pagination-link-btn {
    i{
      font-size: 1rem;
    }
  }

  @media (max-width: 1258px) {
    .pagination-link-btn:first-child, .pagination-link-btn:last-child {
      display: none;
    }

    .pagination-link-btn:nth-child(2) {
      border-top-left-radius: $btn-border-radius !important;
      border-bottom-left-radius: $btn-border-radius !important;
    }

    .pagination-link-btn:nth-last-child(2) {
      border-top-right-radius: $btn-border-radius !important;
      border-bottom-right-radius: $btn-border-radius !important;
    }
  }

  @media (max-width: 576px) {
    .hide-not-focused-btn:not(.focus) {
      display: none;
    }
  }

</style>
