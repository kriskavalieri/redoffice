<template>
<div>
    <redoffice-widget :noPadding="true" :headerText="'Data table with extendable rows'">
        <template slot="widgetBody">
            <p class="p-4 text-center"><b>Data is fed through the external API so at times you may want to give a few seconds to load</b></p>
            <p class="text-center mb-4">Click on any row to expand it</p>
            <hr>
            <redoffice-data-table 
                  apiUrl="https://mockjson.herokuapp.com/users"
                  ref="table"
                  :detailRowComponent="'tableRowDetail'"
                  :rowClass="'row-collapsible'"
                  :onRowClicked="onRowClicked"
                  :apiMode=true
                  :canSearch=true
                  :trackBy="'index'"
                  :filterFields="userTable.filterFields"
                  :itemsPerPage="userTable.itemsPerPage"
                  :defaultPerPage="userTable.defaultTablePerPage"
                  :onEachSide="userTable.onEachSide"
                  :transformFn="transUserTableData"
                  :transformSearchQuery="transformSearchQuery"
                  :queryParams="userTable.queryParams"
                  :adjustItemsPerPageClass="'adjust-to-left'"
                  :perPageDropdownStyle="{left: '16px'}"
                  :tableFields="userTable.tableFields"/>
        </template>
    </redoffice-widget>
    <redoffice-widget class="mt-5" :noPadding="true" :headerText="'Simple table with sorting and filtering'">
        <template slot="widgetBody">
            <vue-good-table
                styleClass="vgt-table striped"
                :select-options="{ enabled: true }"
                :columns="goodTableColumns"
                :rows="goodTableRows">
                <template slot="table-row" slot-scope="props">
                    <span v-if="props.column.field == 'sex'">
                        <span v-if="props.row.sex === 'Male'" class="green"><i class="ion ion-md-male"></i></span>
                        <span v-else class="pink"><i class="ion ion-md-female"></i></span>
                    </span>
                    <span v-else>
                        {{props.formattedRow[props.column.field]}}
                    </span>
                </template>
            </vue-good-table>
        </template>
    </redoffice-widget>
</div>
</template>
<script>
import Vue from 'vue'
import TableRowDetail from './../overview/TableRowDetail'
import VueGoodTablePlugin from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css'

Vue.use(VueGoodTablePlugin)
Vue.component('tableRowDetail', TableRowDetail)
export default {
    data(){
        return {
            goodTableColumns: [
                {
                    label: 'Name',
                    field: 'name',
                    filterOptions: {
                        enabled: true
                    }
                },
                {
                    label: 'Age',
                    field: 'age',
                    type: 'number',
                    filterOptions: {
                        enabled: true,
                        filterDropdownItems: ['Teens', '20+', '30+', '40+'],
                        filterFn: this.columnFilterAge
                    }
                },
                {
                    label: 'Sex',
                    field: 'sex',
                    filterOptions: {
                        enabled: true,
                        filterDropdownItems: ['Male', 'Female'],
                        filterFn: this.columnFilterFn
                    }
                },
                {
                    label: 'Created On',
                    field: 'createdAt',
                    type: 'date',
                    dateInputFormat: 'YYYY-MM-DD',
                    dateOutputFormat: 'MMM Do YY'
                },
                {
                    label: 'Percent',
                    field: 'score',
                    type: 'percentage'
                }
            ],
            goodTableRows: [
                { id:1, name:"John", sex: "Male", age: 20, createdAt: '2010-10-31',score: 0.03343 },
                { id:2, name:"Jane", sex: "Female", age: 24, createdAt: '2011-10-31', score: 0.03343 },
                { id:3, name:"Susan", sex: "Female", age: 16, createdAt: '2011-10-30', score: 0.03343 },
                { id:4, name:"Eva", sex: "Female", age: 55, createdAt: '2011-10-11', score: 0.03343 },
                { id:5, name:"Dan", sex: "Male", age: 40, createdAt: '2011-10-21', score: 0.03343 },
                { id:6, name:"John", sex: "Male", age: 20, createdAt: '2011-10-31', score: 0.03343 }
            ],
            userTable: {
                filterFields: [
                    {id: 'name', description: 'Customer name'},
                    {id: 'email', description: 'Email address'},
                ],
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
        transformSearchQuery(q){
            return {
               [`${q.filter_field}_like`]: q.filter_value
            }
        },
        columnFilterFn(a, b){
            if(a === b){
                return true
            }
        },
        columnFilterAge(a, b){
            if(b === 'Teens'){
                return a < 20
            }
            if(b === '20+'){
                return a >= 20 && a < 30
            }
            if(b === '30+'){
                return a >= 30 && a < 40
            }
            if(b === '40+'){
                return a >= 40
            }
        },
        onRowClicked(dataItem, event){
            this.$refs.table.$refs.vuetable.toggleDetailRow(dataItem.index)
        },
        stateLabel(value){
            return `<span class="flag-icon flag-icon-${value.toLowerCase()}"></span>`
        },
        genderLabel(value) {
            return value === 'male'
                ? '<span class="green"><i class="ion ion-md-male"></i></span>'
                : '<span class="pink"><i class="ion ion-md-female"></i></span>'
        },
        transUserTableData(data){
            const self = this
            let headers = this.$refs.table.response_headers
            let total_count = +headers['x-total-count'] // total count of *all* the records. You will have to either 
                                                       // know it in advance how many records to expect 
                                                       // or have your API server tell you that. A common technique is
                                                       // return the count of records in a header, like here.
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
    }
}
</script>
<style lang="scss">
    .dropdown.adjust-to-left > button{
        margin: 1rem;
        margin-top: 0;
    }
</style>
