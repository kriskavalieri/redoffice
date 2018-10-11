<template>
<div>
    <redoffice-widget :headerText="'Tags'" :bodyStyle="{overflow: 'visible'}">
        <template slot="widgetBody" :headerText="'Tree'">
            <h5 class='text-left p-2'>Default behaviour</h5>
            <vue-tags-input
                v-model="tag1"
                :tags="tags1"
                @tags-changed="newTags => tags1 = newTags"
            />


            <h5 class='text-left p-2 mt-5'>Autocomplete (countries, external API)</h5>
            <vue-tags-input
                v-model="tag3"
                :tags="tags3"
                placeholder='Add country'
                :autocomplete-items="autocompleteItems"
                :add-only-from-autocomplete="true"
                @tags-changed="update">
                <div v-show="isLoading" slot="between-elements">
                    <div class="autocomplete">
                        <ul>
                            <li class="item valid">
                                <div>
                                    <redoffice-pre-loader :loaderType="'circle'" :loaderSize=30 class="pre-loader"></redoffice-pre-loader>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </vue-tags-input>


            <h5 class='text-left p-2 pb-0 mt-5'>Input validation</h5>
            <small class="pl-2">Validation Rules: length >= 4, no numbers, can't contain word "Cannot"</small>
            <vue-tags-input
                v-model="validation_tag"
                :tags="validation_tags"
                :validation="validation"
                @tags-changed="newTags => validation_tags = newTags">
            </vue-tags-input>


            <h5 class='text-left p-2 mt-5'>Edit tags</h5>
            <vue-tags-input
                v-model="validation_tag"
                :allow-edit-tags="true"
                :tags="validation_tags"
                @tags-changed="newTags => validation_tags = newTags">
            </vue-tags-input>


            <h5 class='text-left p-2 mt-5'>Custom styling</h5>
            <vue-tags-input
                class="custom-theme"
                v-model="customTag"
                :allow-edit-tags="true"
                :validation="validation"
                :tags="customTags"
                @tags-changed="newTags => customTags = newTags">
                <div
                    slot="tagLeft"
                    class="my-tag-left"
                    slot-scope="props"
                    @click="props.performOpenEdit(props.index)">
                    <i class="md ion-md-pricetag mr-1"></i>
                </div>
            </vue-tags-input>

        </template>
    </redoffice-widget>
</div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            tag1: '',
            tags1: [],
            customTag: "",
            customTags: [{text: 'chuck norris'}, {text: 1234}],
            validation_tag: '',
            validation_tags: [{text: '12345'}, {text: 'ab'}, {text: 'abcd'}, {text: 'Cannot'}],
            tag3: '',
            tags3: [{text: 'Germany'}, {text: 'France'}],
            autocompleteItems: [],
            debounce: null,
            isLoading: false,
            validation: [
                {
                    type: 'min-length',
                    rule: /^.{4,}$/
                }, {
                    type: 'no-numbers',
                    rule: /^([^0-9]*)$/
                }, {
                    type: 'avoid-item',
                    rule: /^(?!Cannot).*$/,
                    disableAdd: true
                }
            ]
        }
    },
    methods: {
        update(newTags) {
            this.autocompleteItems = []
            this.tags3 = newTags
        },
    },
    watch: {
        tag3(val){
            if (this.tag3.length === 0) return
            this.autocompleteItems = []
            this.isLoading = true
            const url = `https://restcountries.eu/rest/v2/name/${this.tag3}?fields=name`
            clearTimeout(this.debounce)
            this.debounce = setTimeout(() => {
                axios.get(url).then(response => {
                    this.isLoading = false
                    this.autocompleteItems = response.data.map(a => {
                        return { text: a.name }
                    })
                }).catch((e) => {
                    this.isLoading = false
                    if(e.response.status !== 404){
                        console.warn('Oh. Something went wrong', e)
                    }
                })
            }, 200)
        }
    }
    
}
</script>

<style lang="scss">
@import "../../sass/variables";
.custom-theme {
    color: #fff !important;
    background-color: $brand-primary;
    .tag{
        color: #fff !important;
        &.valid{
            background-color: $brand-success !important;
        }
        &.invalid{
            background-color: $that-cool-red !important;
        }
    }
}
</style>
