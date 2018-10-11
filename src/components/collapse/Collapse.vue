<template>
<div>
    <redoffice-widget :headerText="'Collapsible cards'" >
        <template slot="widgetBody">
            <div class="row">
                <div class="col-md-6 ">
                    <redoffice-collapse theme="success" :folded.sync="card1">
                        <template slot="header">Click to {{ card1 | wordFilter }}</template>
                        <template slot="body">
                            <div class="p-5">
                                <h5 class="card-title">Title</h5>
                                <p class="card-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </template>
                    </redoffice-collapse>
                </div>
                <div class="col-md-6 ">
                    <redoffice-collapse theme="danger" :folded.sync="card2">
                        <template slot="header">Click to {{ card2 | wordFilter }}</template>
                        <template slot="body">
                            <div class="p-5">
                                <h5 class="card-title">Title</h5>
                                <p class="card-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </template>
                    </redoffice-collapse>
                </div>
            </div>
        </template>
    </redoffice-widget>
    <redoffice-widget :headerText="'Accordion'" class="mt-5">
        <template slot="widgetBody">
            <h4 class="text-center font-weight-light">Same theme for each card, default style</h4>
            <redoffice-accordion :cards="accordionItems" theme="danger" />
            <h4 class="text-center font-weight-light mt-5">Various theme for each card, custom header and body slots</h4>
            <redoffice-accordion :cards="accordionItems2" theme="danger">
                <template slot="accordionHeader" slot-scope="slotProps">
                    <h4 class="text-left pt-3">{{ slotProps.card.header }}</h4>
                </template>
                <template slot="accordionBody" slot-scope="slotProps">
                    <div class="p-4">
                        <p class="lead">
                            {{ slotProps.card.body }}
                        </p>
                    </div>
                </template>
            </redoffice-accordion>
        </template>
    </redoffice-widget>
</div>
</template>

<script>
export default {
    data(){
        return {
            card1: false,
            card2: true,
            expanderItems: [
                {text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
                {text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
            ],
            accordionItems: [
                {header: "Default header 1", title: 'Title 1', body: 'sunt in culpa qui officia deserunt mollit anim id est laborum', folded: true},
                {header: "Default header 2", title: 'Title 2', body: 'sunt in culpa qui officia deserunt mollit anim id est laborum2', folded: true},
                {header: "Default header 3", title: 'Title 3', body: 'sunt in culpa qui officia deserunt mollit anim id est laborum3', folded: true}
            ],
            accordionItems2: [
                {header: "Fat header 1", theme: "warning", body: 'sunt in culpa qui officia deserunt mollit anim id est laborum', folded: true},
                {header: "Fat header 2", theme: "info", body: 'sunt in culpa qui officia deserunt mollit anim id est laborum2', folded: true},
                {header: "Fat header 3", theme: "success", body: 'sunt in culpa qui officia deserunt mollit anim id est laborum3', folded: true}
            ]
        }
    },
    filters: {
        wordFilter(flag){
            return flag ? "expand" : 'fold'
        }
    }
}
</script>
