<template lang="pug" xmlns:v-bind="">
.content_box
  transition-group(name="fade")
    button(class="addTask" @click="showAddModal") Add Task
    .content(v-for='(element, index) in tasks' :key="element" @click="showDetailsModal(element, index)")
      h1.task_name {{element.taskname}}
      span.time {{element.date}}
      .delete(@click='onDelete(index)') x
  tasksModal(v-show='isAddModalVisible' @close='closeAddModal' @add="AddTask")
  detailsModal(:selectedItem="currentItem" :selectedIndex="currentIndex" v-show="isDetailsModalVisible" @close="closeDetailsModal")

</template>

<script lang="ts">
import detailsModal from '@/components/modals/detailsModal.vue'
import tasksModal from '../components/modals/tasksModal.vue'
import { TasksInterface } from '../types/tasksInterface'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'tasks',
  components: {
    tasksModal,
    detailsModal
  },
  data () {
    return {
      currentItem: {},
      currentIndex: Number(),
      isDetailsModalVisible: false,
      isAddModalVisible: false,
      tasks: [] as TasksInterface []
    }
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/ban-types
    showDetailsModal (element: object, index: number) {
      this.currentItem = element
      this.currentIndex = index
      this.isDetailsModalVisible = true
    },
    closeDetailsModal () {
      this.isDetailsModalVisible = false
    },
    showAddModal () {
      this.isAddModalVisible = true
    },
    closeAddModal () {
      this.isAddModalVisible = false
    },
    onDelete (index: number) {
      this.tasks.splice(index, 1)
    },
    AddTask (newtask: TasksInterface) {
      this.tasks.unshift(newtask)
    }
  },
  created () {
    setTimeout(() => {
      this.tasks = [
        {
          taskname: 'Bug Fix 1',
          taskdescription: 'fix something important 1',
          status: 'inprogress',
          date: '2022-01-08 12:00'
        },
        {
          taskname: 'Bug Fix 2',
          taskdescription: 'fix something important 2',
          status: 'inprogress',
          date: '2022-01-08 12:00'
        },
        {
          taskname: 'Bug Fix 3',
          taskdescription: 'fix something important 3',
          status: 'inprogress',
          date: '2022-01-08 12:00'
        },
        {
          taskname: 'Bug Fix 4',
          taskdescription: 'fix something important 4',
          status: 'inprogress',
          date: '2022-01-08 12:00'
        }
      ] as TasksInterface []
    }, 500)
  }
})
</script>

<style scoped lang="scss">
.content_box {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 730px;
  background-color: #FFFFFF;
  border-radius: 8px;
  margin: 30px auto;
  padding: 30px 10px;
}

.content {
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 60px;
  background-color: #F7F6F3;
  border-radius: 8px;
  margin: 30px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.task_name {
  font-size: 20px;
  line-height: 24px;
}

.time{
  font-size: 16px;
  color: #4AAE9B;
  margin-top: 10px;
}

.addForm {
  display: flex;
  flex-direction: column;
}

.addForm input {
  margin: 10px;
  background-color: #4AAE9B;
  border-radius: 8px;
  min-height: 20px;
}

.addTask {
  display: flex;
  min-height: 40px;
  width: 60px;
  align-self: end;
  background-color: #4AAE9B;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.delete {
  display: flex;
  height: 20px;
  width: 20px;
  margin: 10px;
  border-radius: 100%;
  background-color: #FF0000;
  right: 0;
  position: absolute;
  font-size: 10px;
  font-family: Helvetica;
  color: #EAEAEA;
  justify-content: center;
  align-items: center;
}

.radioArea {
  display: flex;
  font-family: Helvetica;
  font-size: 14px;
}

.radioArea p {
  padding-top: 12px;
}

@keyframes blink {
  50% {border-color: #ffffff} }

.fade-enter-active{
  border: 1px #ffff00 solid;
  animation: blink 3s;
  animation-iteration-count: 3;
  transition: all 4s ease;
}
.fade-leave-active {
  transition: all 2s ease;
}
.fade-enter-from,
.fade-leave-to{
  opacity: 0;
  transform: scale(1.2);
}

</style>
