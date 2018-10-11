<template>
<div class="card redoffice-collapse" :class="'bg-' + theme">
    <div class="card-header text-center" @click="toggleFoldCard"> <slot name="header"/> </div>
    <div ref="body" class="card-body"> <slot name="body"/> </div>
</div>
</template>

<script>
export default {
    name: "redoffice-collapse",
    props: {
        theme: {
            type: String,
            default: 'primary',
            validator: value => {
                return ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'dark'].indexOf(value) >= 0
            }
        },
        folded: {
            type: Boolean,
            default: false
        }
    },
    mounted(){
        if(!this.folded){
            let body = this.$refs.body
            let scroll_height = body.scrollHeight
            let top_offset = body.offsetTop
            let height = scroll_height + top_offset
            this.$nextTick(() => {
                body.style.height = height + "px"
                body.style.opacity = 1
            })
        }
    },
    methods: {
        toggle(flag){
            let bodyHeight = this.$refs.body.scrollHeight + "px"
            this.$nextTick(() => {
                let height = flag ? bodyHeight : 0
                this.$refs.body.style.height = height
                this.$refs.body.style.opacity = height || 1
            })
        },
        toggleFoldCard(){
            this.toggle(this.folded)
            this.$emit('update:folded', !this.folded)
        }
    },
    watch: {
        folded(new_val){
            this.toggle(!new_val)
        }
    }
}
</script>

<style lang="scss">
    .redoffice-collapse{
        .card-header {
            cursor: pointer;
        }
        .card-body {
            padding: 0;
            height: 0;
            transition: all .5s cubic-bezier(.8, .2, 0.1, 1);
            box-shadow: 0 17px 15px -13px #0000005c inset;
            overflow: hidden;
        }
    }
</style>
