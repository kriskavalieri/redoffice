<template>
  <div class="card task-lane-item mb-4" >
    <div class="card-block" :style="{padding: '.5rem 0 0'}">
        <h5 class="card-title text-center">
            <span class="text-center">{{item.text}}</span>
        </h5>
            <redoffice-expander>
                <p class="text-center dim p-2">
                    {{ item.description }}
                </p>
                <div v-if="item.subtasks[0]">
                    <hr>
                    <div class="subtask-container ml-2 mb-2" v-if="subtask.text" v-for="(subtask, subtaskIdx) in item.subtasks" :key="subtask.text">
                        <div class="row">
                            <div class="col-12">
                                <span class="marker" @click="subtaskChecked(itemId, subtaskIdx)">
                                    <i v-if="subtask.done" class="ion ion-ios-checkmark-outline" :style="{color: '#b71c1c'}"></i>
                                </span>
                                <div class="col-11 subtask-text" :class="subtask.done && 'crossed-out'">
                                    {{ subtask.text }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </redoffice-expander>
        <hr>
        <div class="container" :style="{width: 'fit-content'}">
            <div class="row" :style="{margin: 0}">
                <div class="col-xs-1" v-for="user_id in item.assignees" :key="user_id">
                    <redoffice-tooltip :options="{content: $store.getters.users[user_id].name, placement: 'top'}">
                        <div class="face-thumb">
                            <img width="40" height="40" :src="$store.getters.users[user_id].thumbnail"/>
                        </div>
                    </redoffice-tooltip>
                </div>
            </div>
        </div>
        <span class="badge badge-pill badge-danger" :style="{width: '100%'}">
            <timeago :datetime="item.date" :auto-update="5"></timeago>
        </span>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
    name: 'TaskLaneItem',
    props: ['item', 'itemId', 'category'],
    methods: {
        subtaskChecked(itemId, subtaskIdx){
            this.$store.commit('toggleSubtask', {
                itemId,
                subtaskIdx,
                title: this.category
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .subtask-container{
        overflow: hidden;
    }
    .dim{
        color: gray;
    }
    .task-lane-item{
        border-bottom-right-radius: 12px;
        border-bottom-left-radius: 12px;
        border-bottom-width: 0px;
    }
    .face-thumb{
        img{
            border-radius: 50%;
            margin: .15rem;
            border: 3px solid #eee;
        }
    }
    .subtask-text{
        position: relative;
        left: 1.5rem;
        // bottom: 2px;
    }
    .marker {
        border-color: white;
        position: absolute;
        font-size: 1.8rem;
        border: 1px solid #ababab;
        height: 1.2rem;
        width: 1.2rem;
        border-radius: 10rem;
        background: white;
        cursor: pointer;
        i{
            bottom: 13px;
            position: relative;
            left: 3px;
        }
    }
</style>
