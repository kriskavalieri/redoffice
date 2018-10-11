<template>
    <redoffice-widget>
        <template slot="widgetBody" :headerText="'Responsive tabs'">
            <redoffice-tabs :names="['Header 1', 'Header 2', 'Header 3', 'Header 4', 'Header 5']">
                <div :slot="'Header 1'">
                    <p class="lead p-3">Orci porta non pulvinar neque laoreet suspendisse interdum. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Ut tellus elementum sagittis vitae et. Nunc congue nisi vitae suscipit tellus mauris a. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. </p>
                </div>
                <div :slot="'Header 2'">
                    <p class="lead p-3">Orci porta non pulvinar neque laoreet suspendisse interdum. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Ut tellus elementum sagittis vitae et. Nunc congue nisi vitae suscipit tellus mauris a. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. </p>
                </div>
                <div :slot="'Header 3'">
                    <p class="lead p-3">Orci porta non pulvinar neque laoreet suspendisse interdum. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Ut tellus elementum sagittis vitae et. Nunc congue nisi vitae suscipit tellus mauris a. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. </p>
                </div>
                <div :slot="'Header 4'">
                    <p class="lead p-3">Orci porta non pulvinar neque laoreet suspendisse interdum. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Ut tellus elementum sagittis vitae et. Nunc congue nisi vitae suscipit tellus mauris a. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. </p>
                </div>
                <div :slot="'Header 5'">
                    <p class="lead p-3">Orci porta non pulvinar neque laoreet suspendisse interdum. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Ut tellus elementum sagittis vitae et. Nunc congue nisi vitae suscipit tellus mauris a. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. </p>
                </div>
            </redoffice-tabs>
        </template>
    </redoffice-widget>
</template>
<script>
export default {
    
}
</script>

