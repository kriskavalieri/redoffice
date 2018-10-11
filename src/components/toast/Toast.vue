<template>
<div class="row">
    <div class="col-lg-5 mb-4">
        <redoffice-widget :headerText="'Toast positions'" :headerStyle="{'text-align': 'center'}" :gradientedBackground="true" >
            <template slot="widgetBody">
                <div class="row center text-center" :style="{width: '15rem'}">
                    <div class="col-4">
                        <button class="btn btn-primary btn-sm square-btn" @click="openToast('top-left')">
                            <i class="ion ion-md-expand"></i>
                        </button>
                    </div>
                    <div class="col-4">
                        <button class="btn btn-primary btn-sm square-btn " @click="openToast('top-center')">
                            <i class="ion ion-md-expand"></i>
                        </button>
                    </div>
                    <div class="col-4">
                        <button class="btn btn-primary btn-sm square-btn " @click="openToast('top-right')">
                            <i class="ion ion-md-expand"></i>
                        </button>
                    </div>
                    <div class="col-4 mt-4">
                        <button class="btn btn-primary btn-sm square-btn " @click="openToast('bottom-left')">
                            <i class="ion ion-md-expand"></i>
                        </button>
                    </div>
                    <div class="col-4 mt-4">
                        <button class="btn btn-primary btn-sm square-btn " @click="openToast('bottom-center')">
                            <i class="ion ion-md-expand"></i>
                        </button>
                    </div>
                    <div class="col-4 mt-4">
                        <button class="btn btn-primary btn-sm square-btn " @click="openToast('bottom-right')">
                            <i class="ion ion-md-expand"></i>
                        </button>
                    </div>
                </div>
            </template>
        </redoffice-widget>
    </div>
    <div class="col-lg-7">
        <redoffice-widget :headerText="'Toast types'" :headerStyle="{'text-align': 'center'}" :gradientedBackground="true" >
            <template slot="widgetBody">
                <div class="row">
                    <div class="col-md-6 center d-flex justify-content-center mt-2">
                        <button class="btn btn-sm btn-info" @click="openToast('auto', 'info')">Info</button>
                    </div>
                    <div class="col-md-6 center d-flex justify-content-center mt-2">
                        <button class="btn btn-sm btn-danger" @click="openToast('auto', 'error')">Error</button>
                    </div>
                    <div class="col-md-6 center d-flex justify-content-center mt-2">
                        <button class="btn btn-sm btn-success" @click="openToast('auto', 'success')">Success</button>
                    </div>
                    <div class="col-md-6 center d-flex justify-content-center mt-2">
                        <button class="btn btn-sm btn-secondary" @click="openToast('auto', 'action')">Action</button>
                    </div>
                </div>
            </template>
        </redoffice-widget>
    </div>
</div>
</template>
<script>
export default {
    methods: {
        openToast(position, type) {
            if(type){
                if(type === 'action'){
                    return this.$toasted.show('Example of a toast with actions', {
                        duration: 5000,
                        action : [
                            {
                                text : 'Cancel',
                                onClick : (e, toastObject) => {
                                    toastObject.goAway(0);
                                }
                            },
                            {
                                text : 'Home',
                                // router navigation
                                push : { 
                                    name : 'Overview',
                                    // thise will prevent toast from closing
                                    dontClose : true
                                }
                            }
                        ]
                    })
                }
                this[type](type, {position})
            }
            else{
                this.$toasted.show(position, {position, duration: 500})
            }
        }
    }
}
</script>

<style lang="scss">
  @import "../../sass/_variables.scss";
    .square-btn {
        padding: .8rem .8rem .8rem 1rem !important;
    }
    .cube {
        cursor: pointer;
        width: 3rem;
        height: 3rem;
        background: $that-cool-red;
        &:hover{
            opacity: .8;
        }
    }
</style>

