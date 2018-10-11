<template>
<div class="lang-selector_container">
    <redoffice-simple-select v-model="language" :options="languages" :label="lanLabel" :style="{'width': '25px', 'min-width': 0}">
        <label slot="labelSlot" slot-scope="{ label }" class="selected-lang control-label text-left pl-0">
            <span :class="'flag-icon flag-icon-' + label"></span>
        </label>
        <span slot="optSlot" slot-scope="{ option }" :class="'flag-icon flag-icon-' + option"></span>
    </redoffice-simple-select>
</div>
</template>

<script>
import Vue from 'vue'
const lang_map = {
    us: 'en',
    en: 'us'
}
export default {
    data(){
        let locale_code = this.$store.state.i18n.locale
        let locale = lang_map[locale_code] || locale_code
        console.log(locale_code, locale)
        return {
            lang_map,
            language: locale,
            languages: ['us', 'es']
        }
    },
    computed: {
        lanLabel() {
            return this.language
        }
    },
    watch: {
        language(new_val){
            let lang = lang_map[new_val] || new_val
            Vue.i18n.set(lang)
        }
    }
}
</script>

<style lang="scss">
.lang-selector_container{
    position: absolute;
    right: 5px;
    top: -15px;
    .selected-lang {
        position: absolute !important;
        top: 10px !important;
        font-size: .8rem !important;
        cursor: pointer;
    }
    .redoffice-scrollbar {
        right: 7px;
        width: 2rem;
        .dropdown-item {
            padding: 1px;
            height: 25px;
            & > span {
                margin: 0 auto;
            }
            &:hover {
                background:#eaeaea !important;
            }
        }
    }
}
</style>
