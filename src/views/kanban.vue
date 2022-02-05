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
import { computed, defineComponent, ref } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'
import moment from 'moment'
import { useStore } from 'vuex'

export default defineComponent({
  components: {
    detailsModal,
    flatPickr,
    Card,
    draggable: VueDraggableNext
  },
  setup () {
    const store = useStore()
    const currentItem = ref({})
    const currentIndex = ref(Number())
    const isDetailsModalVisible = ref(false)
    const enabled = ref(true)
    const search = ref('')
    const searchDate = ref('')
    const firstDate = ref('')
    const secondDate = ref('')
    const config = {
      dateFormat: 'Y-m-d',
      mode: 'range'
    }
    const draggedEl = ref(null)
    const dragging = ref(false)

    const tasks = computed(() => {
      return store.state.tasks
    })
    const categories = computed(() => {
      return store.state.categories
    })

    const showDetailsModal = (element, index) => {
      currentItem.value = element
      currentIndex.value = index
      isDetailsModalVisible.value = true
    }
    const closeDetailsModal = () => {
      isDetailsModalVisible.value = false
    }
    const clickedElement = (e) => {
      draggedEl.value = tasks.value.findIndex(item => item.taskdescription === e.taskdescription)
    }
    const change = (category) => {
      if (tasks.value[draggedEl.value].status === 'done' && category.status === 'todo') {
        return 0
      } else {
        tasks.value[draggedEl.value].status = category.status
        draggedEl.value = null
      }
    }
    const filteredList = (category) => {
      return tasks.value.filter(task => {
        if (firstDate.value === '') {
          return task.taskname.toLowerCase().includes(search.value.toLowerCase()) && task.status === category.status
        } else {
          return task.taskname.toLowerCase().includes(search.value.toLowerCase()) && task.status === category.status && moment(task.date).isBefore(moment(secondDate.value)) && moment(task.date).isAfter(moment(firstDate.value))
        }
      })
    }
    const clear = () => {
      searchDate.value = ''
      search.value = ''
    }
    return { showDetailsModal, clickedElement, change, clear, tasks, categories, currentItem, currentIndex, isDetailsModalVisible, enabled, search, searchDate, firstDate, secondDate, config, draggedEl, dragging, filteredList, closeDetailsModal }
  },
  watch: {
    searchDate () {
      if (this.searchDate === '') {
        this.firstDate = ''
        this.secondDate = ''
      } else if (this.searchDate != null && this.searchDate.length > 10) {
        this.firstDate = this.searchDate.slice(0, 10)
        this.secondDate = this.searchDate.slice(14)
      }
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
