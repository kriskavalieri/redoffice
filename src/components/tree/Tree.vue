<template>
    <redoffice-widget :headerText="'Tree'">
        <template slot="widgetBody" :headerText="'Tree'">
            <tree
              class="tree-highlights"
              :filter="treeFilter0"
              :data="treeData0"
              :options="treeOptions0" />
        </template>
    </redoffice-widget>
</template>
<script>
import ex_data from './data.json'
export default {
    data(){
        return {
            treeData0: ex_data,
            treeFilter0: '',
            treeOptions0: {
                filter: {
                    emptyText: 'empty text filter!'
                }
            }
        }
    }
}
</script>
