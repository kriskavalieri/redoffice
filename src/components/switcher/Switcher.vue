<template>
    <redoffice-widget :headerText="'Switches'" :gradientedBackground="true" :bodyStyle="{overflow: 'scroll'}">
        <template slot="widgetBody" >
            <!-- <switches :type-bold="true" theme="custom" color="red" label="is staff" v-model="switch1"></switches> -->
            <h5 class="p-2">Default theme</h5>
            <div class="d-flex flex-row pl-2">
                <switches class="mr-3" color="default" text-enabled="ON" text-disabled="OFF" v-model="switch0"></switches>
                <switches class="mr-3" color="red" text-enabled="ON" text-disabled="OFF" v-model="switch1"></switches>
                <switches class="mr-3" color="green" text-enabled="ON" text-disabled="OFF" v-model="switch2"></switches>
                <switches class="mr-3" color="yellow" text-enabled="ON" text-disabled="OFF" v-model="switch3"></switches>
                <switches class="mr-3" color="orange" text-enabled="ON" text-disabled="OFF" v-model="switch4"></switches>
                <switches class="mr-3" color="blue" text-enabled="ON" text-disabled="OFF" v-model="switch5"></switches>
            </div>
            <div class="d-flex flex-row pl-2">
                <switches class="mr-3" :type-bold="true" color="default" text-enabled="ON" text-disabled="OFF" v-model="switch0"></switches>
                <switches class="mr-3" :type-bold="true" color="red" text-enabled="ON" text-disabled="OFF" v-model="switch1"></switches>
                <switches class="mr-3" :type-bold="true" color="green" text-enabled="ON" text-disabled="OFF" v-model="switch2"></switches>
                <switches class="mr-3" :type-bold="true" color="yellow" text-enabled="ON" text-disabled="OFF" v-model="switch3"></switches>
                <switches class="mr-3" :type-bold="true" color="orange" text-enabled="ON" text-disabled="OFF" v-model="switch4"></switches>
                <switches class="mr-3" :type-bold="true" color="blue" text-enabled="ON" text-disabled="OFF" v-model="switch5"></switches>
            </div>
            <h5 class="p-2 mt-4">Bulma theme</h5>
            <div class="d-flex flex-row pl-2">
                <switches class="mr-3" theme="bulma" color="default" text-enabled="ON" text-disabled="OFF" v-model="switch0"></switches>
                <switches class="mr-3" theme="bulma" color="red" text-enabled="ON" text-disabled="OFF" v-model="switch1"></switches>
                <switches class="mr-3" theme="bulma" color="green" text-enabled="ON" text-disabled="OFF" v-model="switch2"></switches>
                <switches class="mr-3" theme="bulma" color="yellow" text-enabled="ON" text-disabled="OFF" v-model="switch3"></switches>
                <switches class="mr-3" theme="bulma" color="blue" text-enabled="ON" text-disabled="OFF" v-model="switch5"></switches>
            </div>
            <div class="d-flex flex-row pl-2">
                <switches class="mr-3" :type-bold="true" theme="bulma" color="default" text-enabled="ON" text-disabled="OFF" v-model="switch0"></switches>
                <switches class="mr-3" :type-bold="true" theme="bulma" color="red" text-enabled="ON" text-disabled="OFF" v-model="switch1"></switches>
                <switches class="mr-3" :type-bold="true" theme="bulma" color="green" text-enabled="ON" text-disabled="OFF" v-model="switch2"></switches>
                <switches class="mr-3" :type-bold="true" theme="bulma" color="yellow" text-enabled="ON" text-disabled="OFF" v-model="switch3"></switches>
                <switches class="mr-3" :type-bold="true" theme="bulma" color="blue" text-enabled="ON" text-disabled="OFF" v-model="switch5"></switches>
            </div>
            <h5 class="p-2 mt-4">Custom</h5>
            <div class="d-flex flex-row pl-2">
                <switches class="mr-3" theme="custom" color="red" text-enabled="ON" text-disabled="OFF" v-model="switch0"></switches>
            </div>
            <div class="d-flex flex-row pl-2">
                <switches class="mr-3" :type-bold="true" theme="custom" color="red" text-enabled="ON" text-disabled="OFF" v-model="switch0"></switches>
            </div>
        </template>
    </redoffice-widget>
</template>

<script>
export default {
    data(){
        return {
            switch0: false,
            switch1: false,
            switch2: false,
            switch3: false,
            switch4: false,
            switch5: false
        }
    }
}
</script>
