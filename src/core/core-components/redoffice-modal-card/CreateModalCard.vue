<template>
    <redoffice-modal :cancelDisabled="true"  ref="largeModal">
        <div slot="title">{{ create_cta || $t('modalcard.cta_create') }}</div>
        <template slot="body">
            <div class="form-group" :class="{'has-error': errors.has('card_name')}">
                    <div class="input-group">
                        <input v-validate="'required'" id="card_name" name="card_name" v-model="cardName" required/>
                        <label class="control-label" for="card_name">{{ $t('modalcard.card_name') }}</label><i class="bar"></i>
                        <small v-show="errors.has('card_name')" class="help text-danger">
                            {{ errors.first('card_name') }}
                        </small>
                    </div>
            </div>
            <div class="form-group" :class="{'has-error': errors.has('card_value')}">
                <div class="input-group">
                    <input v-validate="'required'" id="card_value" name="card_value" v-model="cardValue" required/>
                    <label class="control-label" for="card_value">{{ $t('modalcard.card_val') }}</label><i class="bar"></i>
                    <small v-show="errors.has('card_value')" class="help text-danger">
                        {{ errors.first('card_value') }}
                    </small>
                </div>
            </div>
            <div class="form-group" :class="{'has-error': errors.has('card_name')}">
                <div class="input-group">
                    <input v-validate="'required'" id="card_text" name="card_text" v-model="cardText" required/>
                    <label class="control-label" for="card_text">{{ $t('modalcard.card_txt') }}</label><i class="bar"></i>
                    <small v-show="errors.has('card_text')" class="help text-danger">
                        {{ errors.first('card_text') }}
                    </small>
                </div>
            </div>
            <div class="row">
                <button class="btn btn-primary btn-micro" @click="submitCard" :style="{margin: '1rem auto'}">
                    {{ $t('submit') }}
                </button>
            </div>
        </template>
</redoffice-modal>        
</template>

<script>
import Vue from 'vue'
export default {
    name: 'create-modal-card',
    props: ['create_cta'],
    data(){
        return {
            cardName: "",
            cardText: "",
            cardValue: ""
        }
    },
    methods: {
        open(modalCards){
            this.modalCards = modalCards
            this.reset()
            this.$refs.largeModal.open()
        },
        reset(){
            this.cardName = ""
            this.cardValue = ""
            this.cardText = ""
            this.errors.clear()
        },
        async submitCard(){
            let is_valid = await this.$validator.validateAll()
            if(is_valid){
                let data = {
                    name: this.cardName,
                    value: this.cardValue,
                    text: this.cardText
                }
                /* 
                    Proceed with the submission to server here
                */
               let id = this.modalCards[this.modalCards.length - 1].id + 1
               this.modalCards.push(data)
               this.reset()
               this.$refs.largeModal.cancel()
            }
        }
     }
}
</script>

<style lang="scss" scoped>

</style>
