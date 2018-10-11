<template>
<div>
    <redoffice-widget :headerText="'Expandable alerts'">
        <template slot="widgetBody">
            <redoffice-alert :alerts="alerts"/>
        </template>
    </redoffice-widget>
    <redoffice-widget :headerText="'Dismissible alerts'" class='mt-5'>
        <template slot="widgetBody">
            <redoffice-simple-alert  msg="Information alert message" theme='info'/>
            <redoffice-simple-alert  msg="Success alert message" theme='success'/>
            <redoffice-simple-alert  msg="Warning alert message" theme='warning'/>
            <redoffice-simple-alert  msg="Danger alert message" theme='danger'/>
            <redoffice-simple-alert  msg="Dark alert message" theme='dark'/>
        </template>
    </redoffice-widget>
</div>
</template>
<script>
export default {
    data(){
        return {
            alerts: [
                {channel: "Frontend", 
                    msg: "At varius vel pharetra vel turpis. Laoreet id donec ultrices tincidunt arcu non. MUt tincidunt, ac quis nunc convallisSG", 
                    time: "2018-07-16T15:03:52.814745", 
                    title: "Information / notice", 
                    type: "info"},
                {channel: "Upgrade", 
                    msg: "Ut tincidunt, ac quis nunc convallis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur", 
                    time: "2018-07-16T15:03:52.814745", 
                    title: "Full success", 
                    type: "success"},
                {channel: "API", 
                    msg: "At varius vel pharetra vel turpis. Laoreet id donec ultrices tincidunt arcu non. Ut tincidunt, ac quis nunc convallis", 
                    time: "2018-07-16T15:03:52.814745", 
                    title: "Warning alert", 
                    type: "warning"},
                {channel: "API", 
                    msg: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut tincidunt, ac quis nunc convallis", 
                    time: "2018-07-16T15:03:52.814745", 
                    title: "Error or exception", 
                    type: "error"},
                {channel: "Server", 
                    msg: "Ut tincidunt, ac quis nunc convallis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur", 
                    time: "2018-07-16T15:03:52.814745", 
                    title: "Critical failure", 
                    type: "failure"},
            ]
        }
    }
}
</script>
