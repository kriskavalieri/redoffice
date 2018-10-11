<template>
  <div class="board">
    <div class="row">
        <div class="col-md">
          <task-lane id="todo" :title="$t('kanban.todo')" :items="todoItems"></task-lane>
        </div>
        <div class="col-md">
          <task-lane id="inProgress" :title="$t('kanban.in_progress')" :items="inProgressItems"></task-lane>
        </div>
        <div class="col-md">
          <task-lane id="done" :title="$t('kanban.done')" :items="doneItems"></task-lane>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TaskLane from './TaskLane'
export default {
  name: 'KanbanBoard',
  components: {
    'task-lane': TaskLane
  },
  computed: mapState({
    todoItems: s => s.app.kanban.items.todo,
    inProgressItems: s => s.app.kanban.items.inProgress,
    doneItems: s => s.app.kanban.items.done
  })
}
</script>