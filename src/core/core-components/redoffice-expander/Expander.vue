<template>
    <div class="expander-container">
        <div class="fader" :class="folded && 'folded'"></div>
        <div class="expander-content" :class="folded && 'folded'">
            <slot></slot>
        </div>
        <div class="toggler flex flex-row" @click="folded=!folded">
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'redoffice-expander',
    data(){
        return {
            folded: true
        }
    }
}
</script>

<style lang="scss">
    @import "../../../sass/_variables.scss";
    .fader{
        background: linear-gradient(180deg, transparent, white);
        position: absolute;
        height: 3rem;
        width: 100%;
        display: none;
        &.folded{
            display: block;
        }
    }
    .toggler{
        width: 31px;
        height: 10px;
        position: relative;
        margin: 0 auto;
        margin-top: 9px;
        cursor: pointer;
        .ball{
            width: 4px;
            height: 4px;
            background: $that-cool-red;
            border-radius: 50%;
            margin: 2px auto;
        }
        &:hover{
            .ball{
                box-shadow: 0 0 5px $that-cool-red;
            }
        }
    }
    .expander-content{
        height: auto;
        overflow-y: hidden;
        &.folded {
            height: 3rem;
        }
    }
</style>

