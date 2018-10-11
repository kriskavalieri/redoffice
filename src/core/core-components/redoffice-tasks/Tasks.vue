<template>
    <div class="task-container">
        <div class="controls">
            <div class="row">
                <h4>Tasks</h4>
                <button class="btn btn-primary btn-with-icon add-task" @click="addNewTask">
                    <div class="btn-with-icon-content">
                        <i class="ion-ios-add-outline ion"></i>
                    </div>
                </button>
            </div>
        </div>
        <div class="tasks">
            <div :class="{disabled: task_obj.resolved && task_obj.editable === false, resolved: task_obj.resolved}" 
                  class="task list-group-item" 
                  v-for="(task_obj, idx) in tasks" :key="task_obj.name">
                <span class="marker" @click="toggleResolved(idx, task_obj.editable === false)">
                    <i v-if="task_obj.resolved" class="ion ion-ios-checkmark-outline"></i>
                </span>
                <div class="d-flex flex-row">
                    <h5 class="task-name">{{ task_obj.name }}</h5>
                </div>
                <div class="adjusted-pill">
                    <span v-if="task_obj.resolved" class="badge badge-pill badge-success">
                        <timeago ref="timeago" :datetime="task_obj.resolved" :auto-update="5"></timeago>
                    </span>
                    <span v-else class="badge badge-pill badge-warning">Open</span>
                </div>
                <div class="row">
                    <div class="col-xs-12" v-for="user_id in task_obj.assignees" :key="user_id">
                        <redoffice-tooltip :options="{content: $store.getters.users[user_id].name, placement: 'top'}">
                            <div class="face-thumb">
                                <img width="40" height="40" :src="$store.getters.users[user_id].thumbnail"/>
                            </div>
                        </redoffice-tooltip>
                    </div>
                </div>
            </div>
        </div>
        <redoffice-modal
            :cancelDisabled="true"
            :large="false" 
            :okText="'OK'"
            @exit="onModalExit"
            @open="onModalOpened"
            ref="addTaskModal">
            <div slot="title">Add new task</div>
            <template slot="body">
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <div class="input-group">
                                <input name="task-name" v-model="taskNameInput" required/>
                                <label class="control-label" for="task-name">Task name</label><i class="bar"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <redoffice-multiselect
                            label="Select assignees"
                            v-model="selectedAssignees"
                            :optionKey="'name'"
                            :options="$store.getters.users" />
                    </div>
                </div>
            </template>
        </redoffice-modal>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "redoffice-tasks",
        data(){
            return {
                selectedAssignees: [],
                taskNameInput: ""
            }
        },
        mounted(){
            console.log(this.$refs.timeago)
        },
        props: {
            tasks: {
                type: Array,
                default(){
                    return [{}]
                }
            }
        },
        methods: {
            onModalOpened(){
                this.selectedAssignees = []
                this.taskNameInput = ""
            },
            onModalExit(){
                // don't perform validation on input, but if either of the fields is empty, don't add the task
                if(this.taskNameInput && this.selectedAssignees[0]){
                    this.tasks.push({
                        name: this.taskNameInput,
                        assignees: this.selectedAssignees.map(item => item.id)
                    })
                }
            },
            addNewTask(){
                this.$refs.addTaskModal.open()
            },
            toggleResolved(index, disabled){
                if(disabled) return
                if(this.tasks[index].resolved){
                    return Vue.set(this.tasks[index], 'resolved', "")
                }
                Vue.set(this.tasks[index], 'resolved', new Date())
            }
        }
    }
</script>

<style lang="scss">
@import "~bootstrap/scss/mixins/breakpoints";
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
.adjusted-pill {
    transition: top .5s;
    display: flex;
    top: 1.5rem;
    position: relative;
    padding: .2rem 0 .4rem 0;
    @include media-breakpoint-up(lg) {
        padding: 0;
        display: block;
        top: -.1rem;
    }
}
.task-container{
    width: 100%;
    .controls{
        padding: 1rem;
        .add-task{
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            padding: 0;
            position: absolute;
            top: 0;
            right: 36px;
            i{
               left: 13px !important;
                top: 7px !important;
            }
        }
    }

.tasks {
    width: 100%;
    .task{
        border: 0;
        border-left: 1px solid rgba(0, 0, 0, 0.125);
        &:hover{
            background: #eee;
        }
        .marker {
            border-color: white;
            position: absolute;
            left: -10px;
            font-size: 1.8rem;
            border: 1px solid #ababab;
            height: 1.2rem;
            width: 1.2rem;
            border-radius: 10rem;
            background: white;
            cursor: pointer;
            &:hover{
                box-shadow: 0 0 8px #afafaf;
                border-color: white;
            }
            i{
                bottom: 13px;
                position: relative;
                left: 3px;
            }
        }
        .task-name {
            line-height: 1.2;
            font-size: .9rem;
            max-width: 12rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-family: Montserrat;
            letter-spacing: -.5px;
            font-weight: 100;
        }
        .badge{
            float: right;
            font-size: .4rem;
            position: relative;
            bottom: 1.55rem;
        }
    }
    .face-thumb{
        img{
            border-radius: 50%;
            margin: .15rem;
            border: 3px solid #eee;
        }
    }
    
    .disabled{
        opacity: .5;
        cursor: not-allowed;
        .marker{
            &:hover{
                cursor: not-allowed;
                box-shadow: none !important;
                border-color: #ababab !important;
            }
        }
    }
    .resolved{
        .task-name {
            text-decoration: line-through !important;
        }
    }
}
}
</style>