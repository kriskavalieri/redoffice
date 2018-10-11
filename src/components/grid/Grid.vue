<template>
<div>
    <redoffice-widget :headerText="'Fixed layout'" :headerStyle="{'text-align': 'center'}" >
        <template slot="widgetBody">
                <div class="row">
                    <div class="col">
                        <div class='col-card'>
                            .col
                        </div>
                    </div>
                    <div class="col">
                        <div class='col-card'>
                            .col
                        </div>
                    </div>
                    <div class="col">
                        <div class='col-card'>
                            .col
                        </div>
                    </div>
                    <div class="col">
                        <div class='col-card'>
                            .col
                        </div>
                    </div>
                    <div class="col">
                        <div class='col-card'>
                            .col
                        </div>
                    </div>
                    <div class="col">
                        <div class='col-card'>
                            .col
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class='col-card'>
                            .col
                        </div>
                    </div>
                    <div class="col">
                        <div class='col-card'>
                            .col
                        </div>
                    </div>
                    <div class="col">
                        <div class='col-card'>
                            .col
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class='col-card'>
                            .col
                        </div>
                    </div>
                    <div class="col">
                        <div class='col-card'>
                            .col
                        </div>
                    </div>
                </div>
        </template>
    </redoffice-widget>
    <redoffice-widget :headerText="'Responsive layout'" :headerStyle="{'text-align': 'center'}" class="mt-4">
        <template slot="widgetBody">
                <div class="row">
                    <div class="col-8">
                        <div class="col-card">
                            col-8
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="col-card">
                            col-4
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-2">
                        <div class="col-card">
                            col-2
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="col-card">
                            col-4
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="col-card">
                            col-6
                        </div>
                    </div>
                </div>
        </template>
    </redoffice-widget>
    <redoffice-widget :headerText="'Flex direction'" :headerStyle="{'text-align': 'center'}" class="mt-4">
        <template slot="widgetBody">
            <h5 class="p-0"><code>.d-flex .flex-row</code></h5>
            <div class="d-flex flex-row">
                <div class="col-card mr-2">
                    flex-1
                </div>
                <div class="col-card mr-2">
                    flex-2
                </div>
                <div class="col-card mr-2">
                    flex-3
                </div>
            </div>
            <hr>
            <h5 class="p-0 mt-2 text-right"><code>.d-flex .flex-row-reverse</code></h5>
            <div class="d-flex flex-row-reverse">
                <div class="col-card mr-2">
                    flex-1
                </div>
                <div class="col-card mr-2">
                    flex-2
                </div>
                <div class="col-card mr-2">
                    flex-3
                </div>
            </div>
            <hr>
            <h5 class="p-0 mt-2 text-center"><code>.d-flex .flex-column</code></h5>
            <div class="d-flex flex-column">
                <div class="col-card mr-2">
                    flex-1
                </div>
                <div class="col-card mr-2">
                    flex-2
                </div>
                <div class="col-card mr-2">
                    flex-3
                </div>
            </div>
            <hr>
            <h5 class="p-0 mt-2 text-center"><code>.d-flex .flex-column-reverse</code></h5>
            <div class="d-flex flex-column-reverse">
                <div class="col-card mr-2">
                    flex-1
                </div>
                <div class="col-card mr-2">
                    flex-2
                </div>
                <div class="col-card mr-2">
                    flex-3
                </div>
            </div>
        </template>
    </redoffice-widget>
    <redoffice-widget :headerText="'Flex justify content'" :headerStyle="{'text-align': 'center'}" class="mt-4">
        <template slot="widgetBody">
            <h5 class="p-0 text-left"><code>.d-flex .justify-content-start</code></h5>
            <div class="d-flex justify-content-start">
                <div class="col-card mr-2">flex-1</div><div class="col-card mr-2">flex-2</div><div class="col-card mr-2">flex-3</div>
            </div>
            <hr>
            <h5 class="p-0 mt-2 text-right"><code>.d-flex .justify-content-end</code></h5>
            <div class="d-flex justify-content-end">
                <div class="col-card mr-2">flex-1</div><div class="col-card mr-2">flex-2</div><div class="col-card mr-2">flex-3</div>
            </div>
            <hr>
            <h5 class="p-0 mt-2 text-center"><code>.d-flex .justify-content-center</code></h5>
            <div class="d-flex justify-content-center">
                <div class="col-card mr-2">flex-1</div><div class="col-card mr-2">flex-2</div><div class="col-card mr-2">flex-3</div>
            </div>
            <hr>
            <h5 class="p-0 mt-2 text-center"><code>.d-flex .justify-content-between</code></h5>
            <div class="d-flex justify-content-between">
                <div class="col-card mr-2">flex-1</div><div class="col-card mr-2">flex-2</div><div class="col-card mr-2">flex-3</div>
            </div>
            <hr>
            <h5 class="p-0 mt-2 text-center"><code>.d-flex .justify-content-around</code></h5>
            <div class="d-flex justify-content-around">
                <div class="col-card mr-2">flex-1</div><div class="col-card mr-2">flex-2</div><div class="col-card mr-2">flex-3</div>
            </div>
        </template>
    </redoffice-widget>
    <redoffice-widget :headerText="'Alignment'" :headerStyle="{'text-align': 'center'}" class="mt-4" :bodyStyle="{padding: '0'}">
        <template slot="widgetBody">
            <div class="d-flex align-items-start align-box"><div class="col-card m-0 p-1">.align-items-start</div></div>
            <div class="d-flex align-items-end align-box"><div class="col-card m-0 p-1">.align-items-end</div></div>
            <div class="d-flex align-items-center align-box"><div class="col-card m-0 p-1">.align-items-center</div></div>
            <div class="d-flex align-items-baseline align-box"><div class="col-card m-0 p-1">.align-items-baseline</div></div>
            <div class="d-flex align-items-stretch align-box"><div class="col-card m-0 p-1">.align-items-stretch</div></div>
        </template>
    </redoffice-widget>

</div>
</template>
<script>
export default {
    
}
</script>

<style lang="scss">
@import "../../sass/_variables.scss";
code {
    color: black;
}
.col-card{
    display: flex;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
    margin: .3rem 0;
    min-height: 3rem;
    background: $that-cool-red;
    font-family: Montserrat;
    color: #fff;
    border-radius: 4px;
    min-width: 4rem;
}
.align-box{
    height: 100px;
    background: linear-gradient(#e2e2e2, white);
}
</style>
