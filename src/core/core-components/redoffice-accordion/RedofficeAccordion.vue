<template>
<div class="redoffice-accordion">
    <redoffice-collapse 
      v-for="(card, index) in cards" 
      :key="index" 
      :theme="card.theme || theme" 
      @update:folded="updated(index, $event)"
      ref="redcollapse"
      :folded.sync="card.folded">
        <template slot="header">
            <slot name="accordionHeader" :card="card">
                {{ card.header }}
            </slot>
        </template>
        <template slot="body">
            <slot name="accordionBody" :card="card">
                <div class="p-5">
                    <h5 class="card-title">{{ card.title }}</h5>
                    {{ card.body }}
                </div>
            </slot>
        </template>
    </redoffice-collapse>
</div>
</template>

<script>
export default {
    name: "redoffice-accordion",
    props: {
        theme: {
            type: String,
            default: 'primary',
            validator: value => {
                return ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'dark'].indexOf(value) >= 0
            }
        },
        cards: {
            type: Array,
            required: true,
            default(){
                return []
            }
        }
    },
    methods: {
        updated(index, flag){
            const self = this
            this.$nextTick(() => {
                this.cards.forEach(item => {
                    self.$set(item, 'folded', true)
                })
            })
            this.$nextTick(() => {
                this.$set(self.cards[index], 'folded', flag)
            })
        }
    }
}
</script>
<style lang="scss">
    .redoffice-accordion {
        .card {
            border-radius: 0;
            border-top: 1px solid #bebebe;
        }
    }    
</style>
