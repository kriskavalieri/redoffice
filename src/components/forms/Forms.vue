<template>
<div>
    <redoffice-widget :headerText="$t('sidebar.Forms')">
        <template slot="widgetBody">
            <form>
                <div class="row">
                    <div class="form-group col-lg-6">
                        <div class="input-group">
                            <input type="email" id="simple-input" required="required" aria-describedby="emailHelp"/> 
                            <label for="simple-input" class="control-label">Email address</label>
                            <i class="bar"></i>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                    </div>
                    <div class="form-group col-lg-6">
                        <div class="input-group">
                            <input type="password" id="pass" required="required" aria-describedby="emailHelp"/> 
                            <label for="pass" class="control-label">Password</label>
                            <i class="bar"></i>
                            <small id="emailHelp" class="form-text text-muted">Must contain one grain of salt and a spray of pepper.</small>
                        </div>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="form-group col-lg-4">
                        <div class="input-group">
                            <v-date-picker
                                is-double-paned
                                mode='range'
                                v-model='selectedDateRange'
                                :available-dates='{ start: null, end: new Date() }'
                                show-caps>
                            </v-date-picker>
                            <i class="bar"></i>
                            <small id="emailHelp" class="form-text text-muted">Select date range</small>
                        </div>
                    </div>
                    <div class="form-group col-lg-4">
                        <div class="input-group">
                            <v-date-picker
                                v-model='selectedDate'
                                show-caps>
                            </v-date-picker>
                            <i class="bar"></i>
                            <small id="emailHelp" class="form-text text-muted">Select date</small>
                        </div>
                    </div>
                    <div class=" col-lg-4">
                        <div class="input-group" :style="{'border-bottom': '1px solid rgb(153, 153, 153)'}">
                            <vue-timepicker format="HH:mm:ss" v-model="timeSelected" hide-clear-button :style="{border: 0}"></vue-timepicker>
                        </div>
                        <small id="selectTime" class="form-text text-muted">Select time</small>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-md-4">
                        <knob-control 
                            :min="5" 
                            :max="90" 
                            class="text-center" 
                            :primary-color="$store.getters.palette.danger"  
                            v-model="knobValue"/>
                        <small class="form-text text-center text-muted">Age</small>
                    </div>
                    <div class="col-md-4">
                        <knob-control  
                            :primary-color="$store.getters.palette.info"  
                            :min="100" 
                            :max="1000"
                            :stepSize="10"
                            :size="140"
                            :strokeWidth="10"
                            class="text-center"
                            :valueDisplayFunction="val => '$' + val"
                            v-model="knobValue2"/>
                        <small class="form-text text-center text-muted">Money, money, money</small>
                    </div>
                    <div class="col-md-4">
                        <knob-control  
                            :primary-color="knob3color"  
                            :min="0" 
                            :max="100"
                            :stepSize="5"
                            :size="180"
                            :strokeWidth="3"
                            class="text-center"
                            ref="knob"
                            :valueDisplayFunction="rainbow"
                            v-model="knobValue3"/>
                        <small class="form-text text-center text-muted">Pastel rainbow!</small>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="form-group col-sm-8 offset-md-2 mb-6">
                        <div class="input-group">
                            <textarea :style="{'min-height': '6rem'}" type="text" id="simple-textarea" required="required"></textarea>
                            <label for="simple-textarea" class="control-label">Text Area</label>
                            <i class="bar"></i>
                        </div>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-md-6">
                        <redoffice-simple-select
                            :label="'Select a country'"
                            v-model="countryModel"
                            :options="countries">
                        </redoffice-simple-select>
                    </div>
                    <div class="col-md-6">
                        <div class="">
                            <redoffice-multiselect
                                label="Select one or more assignees"
                                v-model="selectedAssignees"
                                :optionKey="'name'"
                                :options="$store.getters.users" />
                        </div>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-md-3">
                        <div class="form-group">
                            <div class="input-group">
                                <redoffice-checkbox label="I've checked this" :isCircle="true" :checked="true"  brandColor="danger"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <div class="input-group">
                                <redoffice-checkbox label="But not this one" :isCircle="true" brandColor="danger"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <div class="input-group">
                                <redoffice-checkbox :disabled="true" label="Can't select me" :isCircle="true" brandColor="danger"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <div class="input-group">
                                <redoffice-checkbox :disabled="true" :checked="true" label="Sorry, me neither" :isCircle="true" brandColor="danger"/>
                            </div>
                        </div>
                    </div>
                </div>
                 
                <div class="row">
                    <div class="form-group col-md-3" >
                        <div class="input-group">
                            <redoffice-radio-button
                                label="Select this option"
                                :id="'radio1'"
                                :value="'opt1'"
                                :name="'radio'"
                                :group="'radios'"
                                :checked="true"
                                brandColor="danger"
                                v-model="radioModel"/>
                        </div>
                    </div>
                    <div class="form-group col-md-3">
                        <div class="input-group">
                            <redoffice-radio-button
                                label="No, select this one"
                                :id="'radio2'"
                                :value="'opt2'"
                                :name="'radio'"
                                :group="'radios'"
                                brandColor="danger"
                                v-model="radioModel"/>
                        </div>
                    </div>
                    <div class="form-group col-md-3">
                        <div class="input-group">
                            <redoffice-radio-button
                                label="Can't touch me"
                                :id="'radio3'"
                                :value="'opt3'"
                                :name="'radio'"
                                :group="'radios'"
                                :disabled="true"
                                brandColor="danger"
                                v-model="radioModel"/>
                        </div>
                    </div>
                    <div class="form-group col-md-3">
                        <div class="input-group">
                            <redoffice-radio-button
                                label="Forget about it."
                                :id="'radio4'"
                                :value="'opt4'"
                                :name="'radio2'"
                                :group="'radios2'"
                                :disabled="true"
                                :checked="true"
                                brandColor="danger"/>
                        </div>
                    </div>
                </div>
                <div class="row mt-4 mb-5">
                    <redoffice-switch class="col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4" v-model="switchIsLeft" :style="{'padding': '3rem 0px'}">
                        <span slot="trueTitle">I like left</span>
                        <span slot="falseTitle">I prefer right</span>
                    </redoffice-switch>
                    <div class="col-md-12 mt-4">
                        <label class="form-text text-center text-muted mb-4 pb-2">How much do you like this?</label>
                        <redoffice-slider :value="50" :options="slider.sliderOptions2"/>
                    </div>
                    <div class="col-md-12 mt-4">
                        <label class="form-text text-center text-muted mb-4 pb-2">What's your goal salary range?</label>
                        <redoffice-slider :value="[1800, 3400]" :options="slider.sliderOptions1"/>
                    </div>
                </div>
                <div class="row mt-5">
                    <redoffice-dragdrop-upload :uploadUrl="'http://example.com'" />
                </div>
                <button type="submit" class="btn btn-dark">Submit</button>
            </form>  
        </template>
    </redoffice-widget>
    <form-validation/>
</div>
</template>

<script>
import FormValidation from './FormValidation.vue'
const today = new Date()
const begin = new Date()
begin.setDate(today.getDate() - 7)
export default {
    components: {FormValidation},
    data(){
        const colors = this.$store.getters.palette
        return {
            selectedDate: today,
            selectedDateRange: {
                start: begin,
                end: today
            },
            timeSelected: {
                HH: "10",
                mm: "05",
                ss: "00"
            },
            knobValue: 50,
            knobValue2: 550,
            knobValue3: 90,
            knob3color: colors.warning,
            radioModel: 'opt1',
            switchIsLeft: true,
            countryModel: "",
            countries: [
                "Austria", "Belgium", "Canada", "France", "Spain", "Germany", "Italy", "United States"
            ],
            selectedAssignees: [],
            slider: {
                sliderOptions1: {
                    formatter: v => `$${v}`,
                    min: 1000,
                    max: 5000
                },
                sliderOptions2: {
                    formatter: v => `${v}%`,
                    min: 0,
                    max: 100
                }
            }
        }
    },
    methods: {
        rainbow(val){
            const min = 0
            const max = 100
            const h1 = 0
            const h2 = 200
            let ratio = val / (max - min)
            let hue = (ratio * (h2 - h1)) + h1
            this.knob3color = `hsl(${hue}, 70%, 50%)`
            return val
        }
    }
}
</script>
<style lang="scss">
@import '~vue-transmit/dist/vue-transmit.css';
@import "../../sass/_variables.scss";
.time-picker{
    input{
        border: 0 !important;
        height: auto !important;
        font-size: 1rem !important;
        padding: 0.45rem 0.125rem 0.0625rem !important;
    }
    li.active{
        background: $that-cool-red !important;
    }
}
</style>
