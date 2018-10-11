<template>
<div class="row">
    <div class="col-md-6 mb-4">
    <redoffice-widget :headerText="'Popover'" :gradientedBackground="true" :bodyStyle="{'text-align': 'center', height: '10rem'}">
        <template slot="widgetBody">
            <redoffice-popover popover-class="redoffice-tooltip" placement="right" :style="{transform: 'translateY(100%)'}">
                <h5 slot="header">Popover header</h5>
                <p slot="body" class='pt-2' :style="{width: '10rem'}">
                    Euismod in pellentesque massa placerat duis ultricies lacus sed turpis. Id ornare arcu odio ut sem.
                </p>
                <button slot="trigger" class="btn btn-micro btn-primary center">
                    Show popover
                </button>
            </redoffice-popover>
        </template>
    </redoffice-widget>
    </div>
    <div class="col-md-6">
    <redoffice-widget :headerText="'Tooltip'" :gradientedBackground="true" :bodyStyle="{height: '10rem'}">
        <template slot="widgetBody">
            <div class="container" :style="{width: 'fit-content'}">
                <div class="row" :style="{margin: 0}">
                    <div class="col-xs-1" v-for="user_id in [0, 1, 2, 3, 4, 5,6,  7, 8, 9]" :key="user_id">
                        <redoffice-tooltip :options="{content: $store.getters.users[user_id].name, placement: 'top'}">
                            <div class="face-thumb">
                                <img width="40" height="40" :src="$store.getters.users[user_id].thumbnail"/>
                            </div>
                        </redoffice-tooltip>
                    </div>
                </div>
            </div>
        </template>
    </redoffice-widget>
    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
.face-thumb{
        img{
            border-radius: 50%;
            margin: .15rem;
            border: 3px solid #eee;
        }
    }
</style>
