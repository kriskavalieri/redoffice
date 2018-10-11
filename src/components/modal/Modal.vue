<template>
<div>
    <redoffice-modal
            :small="true" 
            :okText="'OK'"
            :theme="theme"
            ref="modal1">
            <div slot="title">Modal {{ theme }}</div>
            <template slot="body">
                <h4 class="text-center">Pellentesque pulvinar pellentesque</h4>
                <p class="lead">Mauris cursus mattis molestie a iaculis at erat. </p>
                <p>
                    Euismod in pellentesque massa placerat duis ultricies lacus sed turpis. Id ornare arcu odio ut sem. Varius quam quisque id diam vel quam elementum. 
                </p>
            </template>
    </redoffice-modal>
    <redoffice-modal
            :showCancel="true"
            :medium="true" 
            :okText="'OK'"
            :theme="theme"
            ref="modal2">
            <div slot="title">Modal {{ theme }}</div>
            <template slot="body">
                <h4 class="text-center">Pellentesque pulvinar pellentesque</h4>
                <p class="lead text-center">Mauris cursus mattis molestie a iaculis at erat. </p>
                <p class="text-justify p-4">
                    Euismod in pellentesque massa placerat duis ultricies lacus sed turpis. Id ornare arcu odio ut sem. Varius quam quisque id diam vel quam elementum. 
                </p>
            </template>
    </redoffice-modal>
    <redoffice-modal
            :showCancel="true"
            :large="true" 
            :okText="'OK'"
            :theme="theme"
            ref="modal3">
            <div slot="title">Modal {{ theme }}</div>
            <template slot="body">
                <h4 class="text-center">Pellentesque pulvinar pellentesque</h4>
                <p class="lead text-center">Mauris cursus mattis molestie a iaculis at erat. </p>
                <p class="text-justify p-5">
                    Euismod in pellentesque massa placerat duis ultricies lacus sed turpis. Id ornare arcu odio ut sem. Varius quam quisque id diam vel quam elementum. 
                </p>
            </template>
    </redoffice-modal>
    <redoffice-widget :headerText="'Modal sizes'" :gradientedBackground="true">
        <template slot="widgetBody">
                    <!-- @exit="onModalExit"
                    @open="onModalOpened" -->
            <div class="row">
                <div class="col-md-10 center d-flex justify-content-center">
                    <button class="btn btn-primary" @click="openModal('modal1', 'primary')">Small modal</button>
                </div>
                <div class="col-md-10 center d-flex justify-content-center mt-4">
                    <button class="btn btn-primary" @click="openModal('modal2', 'primary')">Medium modal</button>
                </div>
                <div class="col-md-10 center d-flex justify-content-center mt-4">
                    <button class="btn btn-primary" @click="openModal('modal3', 'primary')">Big modal</button>
                </div>
            </div>
        </template>
    </redoffice-widget>
    <redoffice-widget :headerText="'Modal themes'" :gradientedBackground="true" class="mt-4">
        <template slot="widgetBody">
            <div class="row">
                <div class="col-md-10 center d-flex justify-content-center">
                    <button class="btn btn-info" @click="openModal('modal2', 'info')">Info modal theme</button>
                </div>
                <div class="col-md-10 center d-flex justify-content-center mt-4">
                    <button class="btn btn-warning" @click="openModal('modal2', 'warning')">Warning modal theme</button>
                </div>
                <div class="col-md-10 center d-flex justify-content-center mt-4">
                    <button class="btn btn-danger" @click="openModal('modal2', 'danger')">Danger modal theme</button>
                </div>
                <div class="col-md-10 center d-flex justify-content-center mt-4">
                    <button class="btn btn-success" @click="openModal('modal2', 'success')">Success modal theme</button>
                </div>
                <div class="col-md-10 center d-flex justify-content-center mt-4">
                    <button class="btn btn-dark" @click="openModal('modal2', 'dark')">Dark modal theme</button>
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
            theme: "primary"
        }
    },
    methods: {
        openModal(modal, theme){
            this.theme = theme
            this.$refs[modal].open()
        }
    }
}
</script>
