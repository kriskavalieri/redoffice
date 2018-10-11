<template>
<div>
    <redoffice-widget :headerText="'Button types'" :bodyStyle="{overflow: 'visible'}">
        <template slot="widgetBody">
            <div class="row">
                <div class="col-sm-6 col-lg-4"><button class="btn btn-primary btn-with-icon">
                        <div class="btn-with-icon-content"><i class="ion-md-close ion"></i>
                            BUTTON
                        </div>
                    </button>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <div role="toolbar" aria-label="Toolbar with button groups" class="btn-toolbar  d-inline-flex">
                        <div role="group" aria-label="First group" class="btn-group"><button type="button" class="btn btn-primary">1</button>
                            <button type="button" class="btn btn-primary focus">2</button> <button type="button" class="btn btn-primary">3</button>
                            <button type="button" class="btn btn-primary">4</button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4 pt-1">
                    <redoffice-dropdown selected="Dropdown" :options="dropdownOptions">
                        <template slot="opts" slot-scope="slotProps">
                            {{ slotProps.option.value }}
                        </template>
                    </redoffice-dropdown>
                </div>
            </div>
        </template>
    </redoffice-widget>
    <redoffice-widget :headerText="'Button states'" class="mt-5">
        <template slot="widgetBody">
            <div class="row">
                <div class="col-md-6 col-xs-12 d-flex justify-content-center mt-2">
                    <button class="btn btn-primary">
                    primary button
                    </button>
                </div> 
                <div class="col-md-6 col-xs-12 d-flex justify-content-center mt-2">
                    <button class="btn btn-primary hover">
                    primary hover
                    </button>
                </div>
                <div class="col-md-6 col-xs-12 d-flex justify-content-center mt-2">
                    <button class="btn btn-primary focus">
                        primary pressed
                    </button>
                </div>
                <div class="col-md-6 col-xs-12 d-flex justify-content-center mt-2">
                    <button disabled="disabled" class="btn btn-primary">
                        primary disabled
                    </button>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-md-6 mt-2 d-flex justify-content-center">
                    <button class="btn btn-secondary">
                        secondary button
                    </button></div>
                <div class="col-md-6 mt-2 d-flex justify-content-center">
                    <button class="btn btn-secondary hover">
                        secondary hover
                    </button></div>
                <div class="col-md-6 mt-2 d-flex justify-content-center">
                    <button class="btn btn-secondary focus">
                        secondary pressed
                    </button></div>
                <div class="col-md-6 mt-2 d-flex justify-content-center">
                    <button disabled="disabled" class="btn btn-secondary">
                        secondary disabled
                    </button>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-sm-6 d-flex justify-content-center col-lg-3">
                    <button class="btn btn-primary btn-sm">
                        small
                    </button>
                </div>
                <div class="col-sm-6 d-flex justify-content-center align-items-center col-lg-3">
                    <button class="btn btn-primary btn-micro">
                        micro
                    </button>
                </div>
            </div>
        </template>
    </redoffice-widget>

    <redoffice-widget :headerText="'Colored buttons'" class="mt-5">
        <template slot="widgetBody">
            <div class="row btn-margin-row">
                <div class="col-sm-6  d-flex justify-content-center col-lg-4 col-md-6 mt-2">
                    <button class="btn btn-info">
                        info
                    </button>
                </div>
                <div class="col-sm-6  d-flex justify-content-center col-lg-4 col-md-6 mt-2">
                    <button class="btn btn-success">
                        success
                    </button>
                </div>
                <div class="col-sm-6  d-flex justify-content-center col-lg-4 col-md-6 mt-2">
                    <button class="btn btn-warning">
                        warning
                    </button>
                </div>
                <div class="col-sm-6  d-flex justify-content-center col-lg-4 col-md-6 mt-2">
                    <button class="btn btn-danger">
                        danger
                    </button>
                </div>
                <div class="col-sm-6  d-flex justify-content-center col-lg-4 col-md-6 mt-2">
                    <button class="btn btn-dark">
                        dark
                    </button>
                </div>
                <div class="col-sm-6  d-flex justify-content-center col-lg-4 col-md-6 mt-2">
                    <button class="btn btn-light">
                        light
                    </button>
                </div>
            </div>
        </template>
    </redoffice-widget>
    
</div>
    


</template>

<script>
export default {
    data(){
        return {
            dropdownOptions: [
                {value: 10},
                {value: 20},
                {value: 30}
            ]
        }
    }
}
</script>

