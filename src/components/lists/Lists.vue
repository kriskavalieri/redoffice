<template>
<div>
    <redoffice-widget :headerText="'Dynamic list'" >
        <template slot="widgetBody">
            <redoffice-dynamic-list v-model="dynamicArray"/>                        
        </template>
    </redoffice-widget>
    <redoffice-widget :headerText="'Draggable list'" class="mt-5">
        <template slot="widgetBody">
            <redoffice-sortable :value="draggableArray" :autoBackgroundColor="true"/>
        </template>
    </redoffice-widget>
    <redoffice-widget 
        :headerText="'Infinite list'" 
        class="mt-5"
        :noPadding="true"
        :bodyStyle="{'height': '30rem', overflow: 'scroll', position: 'relative'}">
        <template slot="widgetBody">
            <div class="top-shadow"></div>
            <div v-for="(item, index) in infinityArray" 
                :key="index" 
                class="mt-2 infinity-item list-group-item list-group-item-action flex-column align-items-start" 
                :style="{border: 0, background: colorGen.next().value}">
                <div class="infinity-card-container">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">List group item heading</h5>
                        <span class="badge badge-pill flat-pill" :style="{'min-width': '0rem'}">{{ item }}</span>
                    </div>
                    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                    <small class="text-muted">Donec id elit non mi porta.</small>
                </div>
            </div>
            <infinite-loading @infinite="infiniteHandler"></infinite-loading>
            <div class="bottom-shadow"></div>
        </template>
    </redoffice-widget>
</div>
</template>
<script>
import InfiniteLoading from 'vue-infinite-loading'

export default {
    components: {InfiniteLoading},
    mounted(){
        this.colorGen = this.dealColors()
    },
    data(){
        const colors = this.dealColors(6, 21)
        return {
            dynamicArray: ['Item 1', 'Item 2'],
            draggableArray: [
                {name: "item1", style: {background: colors.next().value, color: "#fff", fontFamily: "Montserrat"}},
                {name: "item2", style: {background: colors.next().value, color: "#fff", fontFamily: "Montserrat"}},
                {name: "item3", style: {background: colors.next().value, color: "#fff", fontFamily: "Montserrat"}},
                {name: "item4", style: {background: colors.next().value, color: "#fff", fontFamily: "Montserrat"}},
                {name: "item5", style: {background: colors.next().value, color: "#fff", fontFamily: "Montserrat"}},
                {name: "item6", style: {background: colors.next().value, color: "#fff", fontFamily: "Montserrat"}},
            ],
            infinityArray: []
        }
    },
    methods: {
        infiniteHandler($state) {
            setTimeout(() => {
                const temp = [];
                for (let i = this.infinityArray.length + 1; i <= this.infinityArray.length + 20; i++) {
                    temp.push(i)
                }
                this.infinityArray = this.infinityArray.concat(temp)
                $state.loaded()
            }, 1000)
            },
    },
    watch: {
        draggableArray(val){
            console.log(val)
        }
    }
}
</script>
<style lang="scss">
    .top-shadow, .bottom-shadow{
        position: sticky;
        width: 100%;
        height: 4rem;
        z-index: 1;
        left: 0;
    }
    .top-shadow{
        top: 0;
        background: linear-gradient(#2d2d2d87, transparent);
    }
    .bottom-shadow{
        bottom: 0;
        background: linear-gradient(transparent, #2d2d2d87);
    }
    .infinity-card-container{
        border-radius: 4px;
        background: rgba(250, 250, 250, .4);
        padding: 1rem;
        color: #000;
        h5{
            font-family: Montserrat;
        }
        small{
            color: #fff !important;
            background: #0000006e;
            padding: 2px 17px;
            border-radius: 4px;
            font-weight: 100;
            font-family: Montserrat;
        }
    }
    .infinity-item {
        box-shadow: 0 3px 11px #555555bd;
        width: 90%;
        margin: 0 auto;
    }
    .flat-pill {
        border-radius: 0;
    }
</style>
