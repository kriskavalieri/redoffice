<template>
  <div class="dashboard">
    <dashboard-info-widgets></dashboard-info-widgets>
    <div class="row mb-5">
      <div class="col-md-6">
        <div class="row">
          <div class="col-sm-6">
            <redoffice-widget class="info-widget brand-info mb-5" :noPadding="true" :bodyStyle="gaugeStyle" >
              <template slot="widgetBody">
                <div class="info-widget-inner">
                  <redoffice-gauge ref="gauge1" :label="$t('dashboard.sales_dc')" numPrefix="$" :value="gauge.value" :max="gauge.max" :min="gauge.min" :menu="gaugeMenu"/>
                </div>
              </template>
            </redoffice-widget>
          </div>
          <div class="col-sm-6">
            <redoffice-widget class="info-widget brand-success mb-5" :noPadding="true" :bodyStyle="gaugeStyle">
              <template slot="widgetBody">
                <div class="info-widget-inner">
                  <redoffice-gauge :label="$t('dashboard.sales_az')"  numPrefix="$" :value="gauge2.value" :max="gauge2.max" :min="gauge2.min"/>
                </div>
              </template>
            </redoffice-widget>
          </div>
        </div>
        <redoffice-widget class="info-widget tasks-wrap mb-5">
          <template slot="widgetBody">
            <div class="info-widget-inner">
                <redoffice-tasks :tasks="tasks" />
            </div>
          </template>
        </redoffice-widget>
      </div>
      <div class="col-md-6">
        <redoffice-widget >
          <template slot="headerSlot">
              <h5 :style="{'text-align': 'center', margin: '0 auto'}">
                  {{ $t('dashboard.alerts') }}
              </h5>
          </template>
          <template slot="widgetBody">
            <redoffice-alert :alerts="alerts"/>
          </template>
        </redoffice-widget>
      </div>
    </div>

    <redoffice-widget :headerText="$t('dashboard.users_table')" class="mb-5">
      <template slot="widgetBody">
        <div class="row">
          <div class="col">
            <redoffice-data-table 
                  apiUrl="https://mockjson.herokuapp.com/users"
                  ref="table"
                  :detailRowComponent="'tableRowDetail'"
                  :rowClass="'row-collapsible'"
                  :onRowClicked="onRowClicked"
                  :apiMode=true
                  :canSearch=false
                  :trackBy="'index'"
                  :itemsPerPage="userTable.itemsPerPage"
                  :defaultPerPage="userTable.defaultTablePerPage"
                  :onEachSide="userTable.onEachSide"
                  :transformFn="transUserTableData"
                  :queryParams="userTable.queryParams"
                  adjustItemsPerPageClass="'adjust-to-left'"
                  :tableFields="userTable.tableFields">
            </redoffice-data-table>
          </div>
        </div>
      </template>
    </redoffice-widget>
  </div>
</template>

<script>
import Vue from "vue"
import DashboardInfoWidgets from './DashboardInfoWidgets'
import TableRowDetail from './TableRowDetail'

Vue.component('tableRowDetail', TableRowDetail)

export default {
  name: 'dashboard',
  data(){
    const self = this
    return {
      gaugeMenu: [
        {
          content: '<i class="ion ion-md-refresh"></i>  Reload',
          url: '#', 
          callback: () => {
            self.gauge.value = Math.round(Math.random() * 1000)
          }
        }
      ],
      gaugeStyle: {
        background: "#fcfcfc"
      },
      gauge: {
        value: Math.round(Math.random() * 100),
        min: 0,
        max: 1000
      }, 
      gauge2: {
        value: Math.round(Math.random() * 100),
        min: 0,
        max: 100
      },
      alerts: [
        {channel: "Server", msg: "Ut tincidunt, ac quis nunc convallis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur", time: "2018-07-16T15:03:52.814745", title: "Database unreachable", type: "failure"},
        {channel: "API", msg: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut tincidunt, ac quis nunc convallis", time: "2018-07-16T15:03:52.814745", title: "Unauthorized access", type: "error"},
        {channel: "API", msg: "At varius vel pharetra vel turpis. Laoreet id donec ultrices tincidunt arcu non. Ut tincidunt, ac quis nunc convallis", time: "2018-07-16T15:03:52.814745", title: "Replay attack detected", type: "warning"},
        {channel: "Frontend", msg: "At varius vel pharetra vel turpis. Laoreet id donec ultrices tincidunt arcu non. MUt tincidunt, ac quis nunc convallisSG", time: "2018-07-16T15:03:52.814745", title: "New version deployed", type: "info"},
      ],
      tasks: [
        {name: 'Introduce new customer', resolved: '2018-07-20', editable: false, assignees: [1, 4]},
        {name: 'Showcase new dashboard', resolved: '2018-08-02', editable: true, assignees: [8, 3]},
        {name: 'Prepare weekly report', assignees: [2]},
        {name: 'Set out goals for Q2', assignees: [1, 2, 3, 4]}
      ],
      userTable: {
        itemsPerPage: [
          {
            value: 5
          },
          {
            value: 10
          },
          {
            value: 15
          }
        ],
        queryParams: {
          page: '_page',
          per_page: '_limit',
          sort_field: '_sort',
          sort_order: '_order',
          desc_word: 'desc',
          asc_word: 'asc'
        },
        defaultTablePerPage: 10,
        onEachSide: 1,
        tableFields: [
          {
            name: "index",
            title: "index",
            dataClass: "text-center"
          },
          {
            name: 'gender',
            sortField: 'gender',
            titleClass: 'center aligned',
            dataClass: 'center aligned',
            callback: this.genderLabel
          },
          {
            name: "name",
            title: "Name",
            sortField: "name"
          },
          {
            name: 'country',
            title: "State",
            titleClass: 'center aligned',
            dataClass: 'center aligned',
            callback: this.stateLabel
          },
          {
            name: "email",
            title: "Email"
          },
          {
            name: 'number',
            title: 'Cell no.'
          }
        ]
      }
    }
  },
  methods: {
    onRowClicked(dataItem, event){
      this.$refs.table.$refs.vuetable.toggleDetailRow(dataItem.index)
    },
    gaugeFormatter(val){
      return "$" + val
    },
    genderLabel(value) {
      return value === 'male'
        ? '<span class="green"><i class="ion ion-md-male"></i></span>'
        : '<span class="pink"><i class="ion ion-md-female"></i></span>'
    },
    stateLabel(value){
      return `<span class="flag-icon flag-icon-${value.toLowerCase()}"></span>`
    },
    transUserTableData(data){
      const self = this
      let total_count = 100 // total count of *all* the records. You will have to either 
                            // know it in advance how many records to expect 
                            // or have your API server tell you that
      let perPage = this.$refs.table.perPage || self.userTable.defaultTablePerPage
      let current_page = this.$refs.table.current_page || 1
      let from_record = current_page === 1 ? 1 : perPage * current_page
      let last = Math.ceil(total_count / perPage)
      let to = from_record + perPage
      let out = {
          total: total_count,
          per_page: perPage,
          current_page: current_page,
          last_page: last,
          from: from_record,
          to: to,
          data: data.map((item, idx) => {
              return {
                  number: item.cell,
                  gender: item.gender,
                  name: item.name,
                  country: item.nat,
                  email: item.email,
                  index: idx + 1 + perPage * (current_page - 1)
              }
          })
      }
      return out
    }
  },
  components: {
    DashboardInfoWidgets
  }
}
</script>

<style lang="scss">
  .tasks-wrap{
    .widget-body{
      padding: 1rem 0 0 1.4rem;
    }
  }
</style>
