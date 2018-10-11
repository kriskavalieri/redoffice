<template>
<div class="row">
    <div class="col-md-6 mb-4">
        <redoffice-widget :headerText="'Circular progress'" :headerStyle="{'text-align': 'center'}" :gradientedBackground="true">
            <template slot="widgetBody">
                <center>
                    <redoffice-progress :type="'circular'" class="center" :diameter="200" :value="84" :max="100" :text="'Clients developed'"/>
                </center>
            </template>
        </redoffice-widget>
    </div>
    <div class="col-md-6 mb-4">
        <redoffice-widget :headerText="'Gauge'" :headerStyle="{'text-align': 'center'}" :gradientedBackground="true">
            <template slot="widgetBody">
                <div class="info-widget-inner" :style="{height: '12.5rem'}">
                    <redoffice-gauge ref="gauge1" label="Sales in DC" numPrefix="$" :value="14" :max="20" :min="0"/>
                </div>
            </template>
        </redoffice-widget>
    </div>
    <div class="col-md-12">
        <redoffice-widget :headerText="'Horizontal bars'" :headerStyle="{'text-align': 'center'}" >
            <template slot="widgetBody">
                <redoffice-progress theme='danger' 
                                    size="sm"
                                    :type="'horizontal'"  
                                    :value="84" 
                                    :max="100" 
                                    :text="'Theme=danger'"/>
                <redoffice-progress theme='info'
                                    class="mt-5" 
                                    size="md"
                                    :type="'horizontal'" 
                                    :value="453" 
                                    :min="100"
                                    :max="1000" 
                                    :text="'Theme=info'"/>
                <redoffice-progress theme='warning'
                                    class="mt-5"
                                    size="lg"
                                    :type="'horizontal'" 
                                    :value="170" 
                                    :min="0"
                                    :max="1000" 
                                    :text="'Theme=warning'"/>
            </template>
        </redoffice-widget>
    </div>
    <div class="col-md-12 mt-4">
        <redoffice-widget :headerText="'Vertical bars'" :headerStyle="{'text-align': 'center'}">
            <template slot="widgetBody">
                <div class="row">
                    <div class="col-4">
                    <redoffice-progress theme='primary' 
                        size="sm"
                        :type="'vertical'"  
                        :value="84"
                        :max="100" 
                        :text="'Theme=primary'"/>
                    </div>
                    <div class="col-4">
                    <redoffice-progress theme='success' 
                        size="md"
                        :type="'vertical'"  
                        :value="34"
                        :max="100" 
                        :text="'Theme=success'"/>
                    </div>
                    <div class="col-4">
                    <redoffice-progress theme='dark' 
                        size="lg"
                        :type="'vertical'"  
                        :value="90"
                        :max="100" 
                        :text="'Theme=dark'"/>
                    </div>
                </div>
            </template>
        </redoffice-widget>
    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">

</style>
