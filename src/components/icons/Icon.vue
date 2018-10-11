<template>
<div>
    <div class="form-group col-xs-6 col-sm-3">
        <div class="input-group">
            <input type="email" v-model="search" id="simple-input" required="required" aria-describedby="emailHelp"/> 
            <label for="simple-input" class="control-label"><i class="ion ion-ios-search-outline"></i> {{ $t('search') }} </label>
            <i class="bar"></i>
        </div>
    </div>
    <div class="row mt-4">
        <div class="col column" v-for="(icon_name, idx) in filtered" :key="idx" v-if="icon_name">
            <div class="icon-holder">
                <i :class="prefix + `${icon_name}`"></i>
                <div class='mt-2 code-holder'>
                    <code>{{ icon_name | parseAsIcon }}</code>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import icons from './ionic.json'
export default {
    data(){
        return {
            icons,
            search: "",
            filtered: icons,
            prefix: 'ion ion-'
        }
    },
    filters: {
        parseAsIcon(icon_name){
            return `<i class="ion ion-${icon_name}"></i>`
        }
    },
    watch: {
        search(val){
            this.filtered = this.icons.map(icon => {
                if(icon.match(val)){
                    return icon
                }
            })
        }
    }
}
</script>

<style lang="scss">
@import "../../sass/_variables.scss";

    .column{
        padding: 5px 0;
    }
    .icon-holder{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;
        height: 9rem;
        width: 9rem;
        background: rgb(245, 245, 245);
        min-height: 1px;
        margin: 0 auto;
        margin-bottom: .9rem;
        text-align: center;
        box-shadow: 0 2px 14px -5px #ccc;
        border-radius: 4px;
        overflow: hidden;
        i {
            font-size: 2rem;
            transition: transform .4s;
            transform: translateY(1.5rem);
        }
        .code-holder{
            transition: transform .1s;
            transform: translateY(5.2rem);
            code {
                color: $that-cool-red;
                font-size: .6rem;
            }
        }
        &:hover {
            box-shadow: 0 0px 3px -10px #ccc;
            .code-holder { 
                transform: translateY(1.2rem);
            }
            i {
                transform: translateY(0);
            }
        }
    }
</style>
