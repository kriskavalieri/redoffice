<template>
    <div class="report-card-placeholder">
        <div class="row" v-if="isLoading" :style="{'padding-top': '3rem'}">
            <div class="col-md-12">
                <redoffice-pre-loader ref="preLoader" :loaderSize=128 class="pre-loader"></redoffice-pre-loader>
                <fun-msg/>
            </div>
        </div>
        <template v-else>
            <template v-if="isOn">
                <div class="row">
                    <div class="col-md-6 offset-md-3" :style="{'padding': '2rem'}">
                        <redoffice-switch v-model="isSummary" :style="{'padding': '3rem 0px'}">
                            <span slot="trueTitle">Summary</span>
                            <span slot="falseTitle">Details</span>
                        </redoffice-switch>
                    </div>
                </div>
                <transition name="fade" mode="out-in">
                    <div class="row summary-main" v-if="isSummary" key="summary">
                            <div class="col-sm-4 stat-container">
                                <redoffice-statwidget :iconClass="'ion ion-ios-warning-outline'" :title="'notifications today'" :value="notifs"/>
                            </div>
                            <div class="col-sm-4 stat-container">
                                <redoffice-statwidget :iconClass="'ion ion-ios-contacts-outline'" :title="'new comments today'" :value="comments"/>
                            </div>
                            <div class="col-sm-4 stat-container">
                                <redoffice-statwidget :iconClass="'ion ion-ios-contacts-outline'" :title="'users registered today'" :value="user_registations"/>
                            </div>
                            <div class="col-sm-4 stat-container">
                                <redoffice-statwidget :iconClass="'ion ion-ios-basket-outline'" :title="'baskets today'" :value="baskets_count"/>
                            </div>
                            <div class="col-sm-4 stat-container">
                                <redoffice-statwidget :iconClass="'ion ion-ios-paper-outline'" :title="'number of coupons generated'" :value="coupons_count"/>
                            </div>
                            <div class="col-sm-4 stat-container">
                                <redoffice-statwidget :iconClass="'ion ion-ios-pricetags-outline'" :title="'total income'" :value=" coupons_value"/>
                            </div>
                            <div class="col-sm-4 stat-container">
                                <redoffice-statwidget :iconClass="'ion ion-ios-podium-outline'" :title="'Best performing worker ID'" :value="best_worker_id"/>
                            </div>
                            <div class="col-sm-4 stat-container">
                                <redoffice-statwidget :iconClass="'ion ion-ios-exit-outline'" :title="'% of web traffic bounced'" :value="traffic_bounced"/>
                            </div>
                    </div>
                    <div class="row" :style="{bottom: '5rem', position: 'relative'}" v-else key="detail">
                        <div class="col-lg-6 barchart-container">
                            <chart ref="barchart" :options="pieOptions" auto-resize/>
                        </div>
                        <div class="col-lg-6 barchart-container">
                            <chart ref="barchart" :options="pieOptions2" auto-resize/>
                        </div>
                        <vue-table v-if="!emptyDetails" :columns="mockTable.header" :rows="mockTable.rows" :class="'table-custom'">
                            <template slot="status" slot-scope="data">
                                <redoffice-tooltip :options="{'content': data.row.status}">
                                    <i class="status-ball" :class="data.row.status" ></i>
                                </redoffice-tooltip>
                            </template>
                        </vue-table>
                        <h6 class="text-center dimmed" v-else :style="{color: '#c1c1c1'}">
                            Nothing to detail
                        </h6>
                    </div>
                </transition>
            </template>
        </template>
    </div>
</template>

<script>
import Vue from 'vue'
import VueTable from '@lossendae/vue-table'
import { VueTableMixin } from '@lossendae/vue-table'

const fontFamily = '"Muli", sans-serif'
const pieBase = {
    tooltip: {
        textStyle: {
            fontFamily
        }
    },
    legend: {
        top: '10%',
        textStyle: {
            fontFamily
        }
    },
    series: [
        {
            type: 'pie',
            radius: [0, '55%'],
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200
            },
            label: {show: false}
        }
    ]
}
export default {
    name: "ReportCard",
    mixins: {VueTableMixin},
    components: {VueTable},
    computed: {
        pieOptions(){
            return {
                ...pieBase,
                tooltip: {
                    ...pieBase.tooltip,
                    formatter: "{c}MB ({d}%)"
                },
                series: [
                    {
                        ...pieBase.series[0],
                        data: this.pieData
                    }
                ]
            }
        },
        pieOptions2(){
            return {
                ...pieBase,
                tooltip: {
                    ...pieBase.tooltip,
                    formatter: "${c} ({d}%)"
                },
                series: [
                    {
                        ...pieBase.series[0],
                        data: this.pieData2
                    }
                ]
            }
        }
    },
    data(){
        const self = this
        return {
            report_id: null,
            isSummary: true,
            emptyDetails: false,
            isLoading: true,
            isOn: false,
            parsed: {},
            coupons_count: null,
            traffic_bounced: null,
            coupons_value: null,
            best_worker_id: null,
            pieData: [],
            mockTable: [],
            rows: [
                {ean: 399023423, sku: 92, vol: 93, ind: 2, p100: 932},
                {ean: 399023423, sku: 92, vol: 93, ind: 2, p100: 932},
                {ean: 399023423, sku: 92, vol: 93, ind: 2, p100: 932}
            ]
        }
    },
    methods: {
        destroy() {
            this.isOn = false
        }
    }
}
</script>

<style lang="scss" >
    @import "../../../sass/_variables.scss";
  @import "~bootstrap/scss/mixins/breakpoints";
  @import "~bootstrap/scss/functions";
  @import "~bootstrap/scss/variables";

.table-custom {
    display: inline-table;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-scrolling: -ms-autohiding-scrollbar;
    @include media-breakpoint-down(sm) {
        display: block;
    }
}
.echarts{
    width: 100% !important;
    @include media-breakpoint-down(lg) {
        height: 270px;
    }
}
.table thead tr {
    border-bottom: 2px solid #b71c1c;
}
.table-main {
    width: 100%;
    background: linear-gradient(transparent, #fff);
    td, tr{
      background: none !important;
    }
    thead tr{
      border-bottom: none;
    }
}
    .stat-container{
        padding: 4px;
    }
    .sub-title{
        font-size: 19px;
    }
    .summary-main{
        position: relative;
        bottom: 2rem;
        background: #e6e6e65c;
        padding: .25rem 0;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .25s;
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
    }
    
  .status-ball{
      width: 10px;
      height: 10px;
      border-radius: 50%;
      display: inline-block;
    
      &.active{
          background: $brand-success;
      }
      &.inactive{
          background: $brand-danger;
      }
      &.pending{
          background: $theme-orange;
      }
  }
</style>
