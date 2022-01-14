<template lang="pug">
.content_box
  .search
    input(class='searchByName' v-model="search" placeholder='Search')
    flat-pickr(class="searchByDate" v-model='searchDate' :config="config" placeholder="Select Date" name="date")
    button(class="clear" @click="clear") x
  draggable.dragArea(v-for="(category) in categories" @drop='change(category)'  :list='filteredList(category)' :key="category.status" )
    | {{category.name + ' ' + filteredList(category).length}}
    Card(v-for='(element, index) in filteredList(category)' :item="element" :key='element.taskname' @dragstart="clickedElement(element)" @click="showDetailsModal(element, index)")
  detailsModal(:selectedItem="currentItem" :selectedIndex="currentIndex" v-show="isDetailsModalVisible" @close="closeDetailsModal")
</template>
<script>
import detailsModal from '@/components/modals/detailsModal.vue'
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import Card from '../components/Card'
import { defineComponent } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'
import moment from 'moment'

export default defineComponent({
  components: {
    detailsModal,
    flatPickr,
    Card,
    draggable: VueDraggableNext
  },
  data () {
    return {
      currentItem: {},
      currentIndex: Number(),
      isDetailsModalVisible: false,
      enabled: true,
      search: '',
      searchDate: '',
      config: {
        dateFormat: 'Y-m-d',
        mode: 'range'
      },
      tasks: [
        {
          taskname: 'Bug Fix 1',
          taskdescription: 'fix something important 1',
          status: 'inprogress',
          date: '2022-01-14 00:00'
        },
        {
          taskname: 'Bug Fix 2',
          taskdescription: 'fix something important 2',
          status: 'done',
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
      ],
      categories: [
        {
          name: 'To Do',
          status: 'todo'
        },
        {
          name: 'In Progress',
          status: 'inprogress'
        },
        {
          name: 'Done',
          status: 'done'
        }
      ],
      draggedEl: null,
      dragging: false
    }
  },
  computed: {
  },
  methods: {
    showDetailsModal (element, index) {
      this.currentItem = element
      this.currentIndex = index
      this.isDetailsModalVisible = true
    },
    closeDetailsModal () {
      this.isDetailsModalVisible = false
    },
    clickedElement (e) {
      this.draggedEl = this.tasks.findIndex(item => item.taskdescription === e.taskdescription)
    },
    change (category) {
      if (this.tasks[this.draggedEl].status === 'done' && category.status === 'todo') {
        return 0
      } else {
        this.tasks[this.draggedEl].status = category.status
        this.draggedEl = null
      }
    },
    filteredList (category) {
      console.log(moment(this.searchDate))
      return this.tasks.filter(task => {
        return task.taskname.toLowerCase().includes(this.search.toLowerCase()) && task.status === category.status
      })
    },
    clear () {
      this.searchDate = ''
    }
  }
})
</script>

<style scoped>

.content_box {
  margin-top: 30px;
  position: relative;
  display: flex;
  width: 90%;
  background-color: #FFFFFF;
  border-radius: 8px;
  height: 80%;
  justify-content: center;
}
.dragArea {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 8px;
  width: 100%;
  background-color: #DCDCDC;
  margin: 30px;
  font-size: 24px;
}
.search {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
}
.searchByName {
  padding: 2px;
  margin: 0 0 0 30px;
  font-size: 16px;
  background-color: #9B9B9B;
  border-radius: 8px;
}
.searchByDate {
  padding: 2px;
  margin: 0 0 0 10px;
  background-color: #9B9B9B;
  border-radius: 8px;
}
.clear{
  background-color: #FF0000;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  color: #EAEAEA;
}
</style>
