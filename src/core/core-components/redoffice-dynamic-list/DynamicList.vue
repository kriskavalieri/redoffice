<template>
<div>
    <div class="form-group with-icon-left">
        <div class="input-group">
            <i class="ion ion-ios-add-circle-outline form-icon"></i>
            <input id="dynamic-list-inp" required="required" @keypress.enter="entered">
            <label for="dynamic-list-inp" class="control-label">{{ cta }}</label>
        </div>
    </div>
    <div class="dynlist-container p-2" v-if="value[0]">
        <div class="d-flex flex-column-reverse">
            <div class="p-2 col-6 dynlist-item" v-for="(item, idx) in value" :key="idx">
                {{ item }}
                <i class="remove-dynlist-item ion ion-ios-remove-circle-outline" @click="removeDynlistItem(idx)"></i>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: "redoffice-dynamic-list",
        props: {
            cta: {
                type: String,
                default: "Add new"
            },
            value: {
                type: Array,
                default(){
                    return []
                }
            },
            beforeAddedItem: {
                type: Function,
                default: val => val
            }
        },
        methods: {
            entered(e){
                let val = e.target.value
                if(val){
                    e.target.value = ""
                    this.value.push(val)
                }
                this.$emit("addedItem", val)
            },
            reset(){
                this.value = []
            },
            removeDynlistItem(idx){
                this.value.splice(idx, 1)
            }
        }
    }
</script>

<style lang="scss">
    .form-icon{
        position: absolute;
        top: 6px;
        font-size: 1.2rem;
    }
    #dynamic-list-inp{
        border-bottom: 1px solid #eee;
    }
    .dynlist-container{
        margin-top: -2.5rem;
    }
    .dynlist-item{
        padding: 1rem;
        border-top: 1px dashed #eee;
        &:last-child{
            border-top: none !important;
        }
        &:hover{
            background: #f8f8f8;
        }
    }
    .remove-dynlist-item{
        float: right;
        cursor: pointer;
        top: 4px;
        position: relative;
    }
</style>
