<template lang="pug">
.content_box
  .droppable(v-for="category in categories" :key="category.id" @drop="OnDrop($event, category.id)" @dragover.prevent @dragenter.prevent)
    h1 {{ category.title }}
    .draggable(v-for="(item, index) in items.filter(x => x.status === category.id)" @dragstart="OnDragStart($event, item)" draggable="true" @click="showDetailsModal(item, index)")
      h2 {{ item.taskname }}
  detailsModal(:selectedItem="currentItem" :selectedIndex="currentIndex" v-show="isDetailsModalVisible" @close="closeDetailsModal")
</template>

<script>
import detailsModal from '@/components/modals/detailsModal.vue'
import { ref } from 'vue'

export default {
  name: 'kanban',
  components: {
    detailsModal
  },
  setup () {
    const items = ref([
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
    ])
    const categories = ref([
      {
        id: 'todo',
        title: 'To Do'
      },
      {
        id: 'inprogress',
        title: 'InProgress'
      },
      {
        id: 'done',
        title: 'Done'
      }
    ])

    function OnDragStart (event, item) {
      if (event.dataTransfer != null) {
        event.dataTransfer.dropEffect = 'move'
        event.dataTransfer.effectAllowed = 'move'
        event.dataTransfer.setData('itemId', item.taskname)
      }
    }
    function OnDrop (event, status) {
      if (event.dataTransfer != null) {
        const itemId = event.dataTransfer.getData('itemId')
        items.value = items.value.map(x => {
          if (x.taskname === itemId) {
            if (x.status === 'done' && status === 'todo') {
            } else { x.status = status }
          }
          return x
        })
      }
    }

    return {
      items, categories, OnDragStart, OnDrop
    }
  },
  data () {
    return {
      currentItem: Object,
      currentIndex: Number(),
      isDetailsModalVisible: false
    }
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/ban-types
    showDetailsModal (item, index) {
      this.currentItem = item
      this.currentIndex = index
      this.isDetailsModalVisible = true
    },
    closeDetailsModal () {
      this.isDetailsModalVisible = false
    }
  }
}
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

.droppable {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 8px;
  background-color: #DCDCDC;
  margin: 30px;
}

.droppable h1 {
  font-size: 18px;
  align-self: center;
  margin-bottom: 10px;
}

.draggable {
  display: flex;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
}

.draggable h2 {
  margin: 0;
}
</style>
