<template>
    <div>
        <div v-if="!type || type === 'list'" 
             :id="'redoffice-modalcard-' + modalCardContext.id"
             class="better-widget" 
             :style="{background: cardColor}">
            <div class="inner-widget">
                <div>
                    <div>
                        <h2>
                            {{ modalCardContext.name }}
                        </h2>
                    </div>
                </div>
                <div class="eastside">
                    <div>
                        <h1>{{ modalCardContext.value }}</h1>
                    </div>
                    <div>{{ modalCardContext.text }}</div>
                </div>
            </div>
        </div>
        <div v-else-if="type === 'create'">
            <div class="better-widget create-new" @click="createNewCard()">
                <i class="ion ion-ios-add-circle-outline"></i>
                <h4 class="font-weight-light">{{ create_modal_cta_comp }}</h4>
            </div>
        </div>
        <create-modal-card ref="create"/>
    </div>
</template>

<script>
import CreateModalCard from './CreateModalCard.vue'
export default {
    name: 'redoffice-modal-card',
    props: ['modalCardContext', 'type', 'modalCards', 'create_modal_cta'],
    components: {CreateModalCard},
    computed: {
        cardColor(){
            if(!this.modalCardContext.color){
                this.$store.commit('drawColor', 'modalcard')
            }
            return this.modalCardContext.color || this.$store.state.app.colorSeriesTracker.modalcard.value
        },
        create_modal_cta_comp(){
            return this.create_modal_cta || this.$t('modalcard.cta_create')
        }
    },
    methods: {
        createNewCard(){
            this.$refs.create.open(this.modalCards)
        },
    }
}
</script>

<style lang="scss">
    .create-new{
        min-height: 153px;
        font-size: 2rem;
        color: #333 !important;
        text-align: center;
        display: grid;
        background: #fff;
        padding-top: 2rem;
        i{
            font-size: 3rem;
        }
    }
    .better-widget{
        cursor: pointer;
        // box-shadow: 0 0 28px 0px #999999;
        box-shadow: 0 1px 5px 0px #e3e3e3;
        margin-bottom: 3rem;
        color: #fff;
        padding-left: 15px;
        padding-right: 15px;
        h2{
            font-weight: 100;
            padding: 1rem;
            margin-bottom: 0;
        }
        .eastside{
            margin-top: 1rem;
            // float: right;
            text-align: right;
            // color: #fff;
            font-size: 1rem;
            h1{
                margin: 0;
                font-size: 2rem;
            }
        }
        .inner-widget{
            background:rgba(0, 0, 0, 0.4);
            padding: 11px;
        }
    }
    .better-widget:hover{
        box-shadow: 0 1px 12px 0px #d6d6d6;
    }
    .better-widget:active{
        box-shadow: 0 0 1px 0 #ddd;
    }
</style>
