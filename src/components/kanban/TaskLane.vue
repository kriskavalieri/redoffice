<template>
    <div class="task-lane">
        <div class="card mb-4">
            <h4 class="card-header">{{ title }}</h4>
            <div class="card-body">
                <draggable v-model="draggables" :options="{ group: 'default' }">
                    <div v-for="(item, idx) in items" :key="idx">
                        <item :item="item" :itemId="idx" :category="id"></item>
                    </div>
                </draggable>
            </div>
            <div class="card-footer" >
                {{ itemCount }}
                <i v-if="isTodoCard" class="add-card ion ion-ios-add-circle-outline" @click="openModal()"></i>
            </div>
        </div>
        <redoffice-modal
            v-if="isTodoCard"
            :cancelDisabled="true"
            :large="false" 
            :okText="'OK'"
            @exit="onModalExit"
            @open="onModalOpened"
            ref="addTaskModal">
            <div slot="title">{{ $t('kanban.add_new_task') }}</div>
            <template slot="body">
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <div class="input-group">
                                <input name="task-name" v-model="taskNameInput" required/>
                                <label class="control-label" for="task-name">{{ $t('kanban.task_name') }}</label><i class="bar"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <div class="input-group">
                                <textarea name="task-name" v-model="taskDescription" required></textarea>
                                <label class="control-label" for="task-name">{{ $t('kanban.task_desc') }}</label><i class="bar"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <redoffice-dynamic-list v-model="subtasks" ref="dynlist"  @addedItem="onAddedSubtask" :cta="$t('kanban.add_subtask')"/>                        
                    </div>
                    <div class="col-12">
                        <redoffice-multiselect
                            :label="$t('kanban.select_assignees')"
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
import Draggable from 'vuedraggable'
import TaskLaneItem from './TaskLaneItem'
export default {
  name: 'TaskLane',
  props: ['items', 'title', 'id'],
  components: {
    item: TaskLaneItem,
    draggable: Draggable
  },
  data(){
      return {
          taskNameInput: '',
          taskDescription: '',
          selectedAssignees: [],
          subtasks: []
      }
  },
  computed: {
    isTodoCard(){
        return this.title === this.$t('kanban.todo')
    },
    itemCount() {
      let len = this.items.length
      return this.$t('kanban.tasks', {count: len}, len)
    },
    draggables: {
      get() {
        return this.items
      },
      set(items) {
        this.$store.commit('updateKanbanItems', {
          items,
          id: this.id
        })
      }
    }
  },
  methods: {
    onAddedSubtask(value){

    },
    openModal(){
        this.$refs.addTaskModal.open()
    },
    onModalOpened(){
        this.selectedAssignees = []
        this.taskNameInput = ""
        this.subtasks = []
        this.taskDescription = ""
    },
    onModalExit(){
        // don't perform validation on input, but if either of the fields is empty, don't add a task
        if(this.taskNameInput && this.selectedAssignees[0]){
            this.$store.commit('addKanbanItems', {
                assignees: this.selectedAssignees.map(item => item.id),
                description: this.taskDescription,
                text: this.taskNameInput,
                subtasks: this.subtasks.map(item => {
                    return {
                        text: item,
                        done: false
                    }
                })
            })
        }
    }
  }
}
</script>

<style lang="scss">
    @import "../../sass/_variables.scss";
    .task-lane{
        .card{
            border: none;
            border-radius: 12px;
            box-shadow: 0 7px 13px -4px grey
        }
        .card-header{
            background: #fff;
        }
        h4.card-title{
            margin: 0;
            padding: 0;
        }
        .card-body{
            background: linear-gradient(#f1f1f1, #dadada);
        }
        .card-body > * {
            min-height: 50px;
        }
        .add-card{
            cursor: pointer;
            position: absolute;
            font-size: 1.5rem;
            right: 2rem;
            bottom: .6rem;
        }
        .card-footer{
            background: $that-cool-red;
            color: #fff;
        }
    }
    
</style>