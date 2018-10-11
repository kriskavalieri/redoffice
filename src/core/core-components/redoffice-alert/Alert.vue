<template>
    <div>
        <div @click="alertClicked(item, index)" class="alert row" :class="item.type" v-for="(item, index) in alerts" :key="index">
            <div class="col-xs-6">
                <i class="alert-icon" :class="alertIcon(item.type)"></i>
                <span class="time">
                    <i class="ion ion-md-time"></i> {{ item.time | parseTime }}
                </span>
            </div>
            <div class="col-xs-6">
                <span class="badge badge-pill">{{ item.channel }}</span>
            </div>
            <div class="col-xs-12 title"><h4>{{ item.title }}</h4></div>
            <div class="row details" ref="details">
                <div class="col-xs-12">{{ item.msg }}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "redoffice-alert",
    props: {
        alerts: {
            type: Array,
            default(){
                return []
            }
        }
    },
    filters: {
        parseTime(time){
            if(time){
                let date = new Date(time + "Z")
                return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
            }
        }
    },
    data(){
        return {
            iconMap: {
                info: "information-circle",
                warning: "warning",
                error: "alert",
                failure: "flash",
                success: 'checkmark-circle'
            },
            busy: false
        }
    },
    methods: {
        alertIcon(type){
            let icon_name = this.iconMap[type]
            return `ion ion-ios-${icon_name}`
        },
        alertClicked(item, index){
            let el = this.$refs.details[index]
            el.classList.toggle("expanded")
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../../sass/_variables.scss";
    @import "~bootstrap/scss/mixins/breakpoints";
    @import "~bootstrap/scss/functions";
    @import "~bootstrap/scss/variables";
    .alert-icon{
        font-size: 6.55rem;
        position: absolute;
        right: 8px;
        top: calc(50% - 48px);
        opacity: .1;
    }
    .exception_notifications{
        background: red;
        color: #fff;
        box-shadow: 0px 4px 9.6px 0.4px rgba(red, .4);
    }
    .alert{
        background: #fff;
        color: #fff;
        box-shadow: 0px 2px 6px 0.4px rgba(#000, .2);
        .badge-pill {
            border: 1px solid white;
            color: white;
        }
        .details{
            color: #fff;
        }
        &.failure{
            background: $dark-violet;
            .time{
                color: $dark-violet;
            }
        }
        &.warning{
            background: $dark-orange;
            .time{
                color: $dark-orange;
            }
        }
        &.info{
            background: $primary;
            .time{
                color: $primary;
            }
        }
        &.error{
            background: $that-cool-red;
            .time{
                color: $that-cool-red;
            }
        }
        &.success{
            background: $brand-success;
            .time{
                color:  $brand-success;
            }
        }
    }
    .details{
        transition: all .2s;
        opacity: 0;
        width: 100%;
        background: #00000052;
        margin: 0;
        padding: 0;
        height: 0;
        font-family: Montserrat;
    }
    .details.expanded{
        margin-top: .5rem;
        padding: 1rem;
        opacity: 1;
        height: auto;
    }
    .badge-pill {
        margin: .5rem .4rem;
        background-color: rgba(255, 255, 255, 0.37);
        border-radius: 1rem;
        color: #000;
        padding: .2rem 0.5rem;
        bottom: 2px;
        position: relative;
    }
    .time {
        font-family: Montserrat;
        font-size: 0.8rem;
        margin: .5rem 0;
        background-color: #fff;
        border-radius: 2rem;
        color: #000;
        font-weight: 100;
        min-width: 10rem;
        padding: .2rem 0.5rem;
        padding-left: 2.1rem;
        bottom: 3px;
    position: relative;
        i {
            font-size: 1.8rem;
            position: absolute;
            color: inherit;
            left: -1px;
            bottom: -4px;
        }
    }
    .title {
        margin: 0 auto;
        padding: 1rem 0;
        h4{
            font-weight: 100;
            font-size: 1.2rem;
            display: contents;
        }
    }
    .alert.alerts {
        text-align: left;
        color: white;
        background: $that-cool-red;
        box-shadow: 0 14px 22px -5px #711010a3;
        .badge-pill {
            background: pink;
        }
    }
</style>

