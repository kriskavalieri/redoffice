<template>
    <div class="root">
      <SortableList lockAxis="y" v-model="values" :transitionDuration="250" >
        <SortableItem v-for="(item, index) in values" :index="index" :key="index" :style="item.style || {}">
          {{ item.name }} {{ item.color }}
        </SortableItem>
      </SortableList>
    </div>
</template>
<script>

import { ContainerMixin, ElementMixin } from 'vue-slicksort'

const SortableList = {
  props: ['autoBackgroundColor'],
  mixins: [ContainerMixin],
  template: `<ul class="sortable-container list"><slot/></ul>`,
}

const SortableItem = {
    props: ['autoBackgroundColor'],
    mixins: [ElementMixin],
    template: `<li class="sortable-item list-item"><slot/></li>`
}

export default {
    name: "redoffice-sortable",
    props: ['value', 'autoBackgroundColor'],
    data(){
        if(this.autoBackgroundColor){

        }
        return {
            values: this.value || []
        }
    },
    components: {
        SortableList,
        SortableItem
    },
}
</script>
<style lang="scss" scoped>
    ul.sortable-container{
        padding: 1px;;
        background: #eee;
    }
li.sortable-item {
  padding: 20px;
  list-style-type: none;
  cursor: pointer;
  background: #FFF;
  border-bottom: 1px solid #EEE;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

h2 {
  font-weight: bold;
  margin-bottom: 15px;
}
</style>

