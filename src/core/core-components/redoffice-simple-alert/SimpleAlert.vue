<template>
    <div ref="simpleAlert" class="redoffice-simple-alert alert with-close" :class="'alert-' + theme" :style="simpleSelectStyle">
        <span class="badge badge-pill" :class="'badge-' + theme">{{ theme }}</span>
            <div class="p-1 alert-text">{{ msg }}</div>
        <i class="close-alert ion ion-ios-close" @click="closeAlert()"></i>
    </div>
</template>

<script>
export default {
    name: 'redoffice-simple-alert',
    data(){
        return {
            simpleSelectStyle: {}
        }
    },
    props: {
        msg: String,
        theme: {
            validator(val){
                return ['info', 'success', 'warning', 'danger', 'dark'].indexOf(val) !== -1
            }
        }
    },
    methods: {
        closeAlert(){
            setTimeout(() => {this.$refs.simpleAlert.remove()}, 500)
            this.$set(this.simpleSelectStyle, 'opacity', 0)
        }
    }
}
</script>

<style lang="scss">
    .redoffice-simple-alert {
        transition: opacity .5s;
        opacity: 1;
    }
    .alert-text{
        font-family: Montserrat;
        font-weight: 500;

    }
    .close-alert{
        cursor: pointer;
        position: absolute;
        right: 8px;
        font-size: 1.4rem;
    }
</style>
