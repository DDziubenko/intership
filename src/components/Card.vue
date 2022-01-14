<template lang="pug">
.draggableEl(:style="cardStyle" @click="cardStylef")
  | {{ item.taskname }}
  div( :class='dateStyle')
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import moment from 'moment'

export default defineComponent({
  name: 'Card',
  props: {
    item: Object as any
  },
  computed: {
    cardStyle (): { backgroundColor: string } {
      let color = ''
      if (this.item.status === 'inprogress') {
        color = '#FFFF99'
      } else if (this.item.status === 'done') {
        color = '#99FF99'
      }
      return { backgroundColor: color }
    },
    dateStyle () {
      let style = 'none'
      if (moment(this.item.date).isBefore(moment().format('YYYY-MM-DD HH:mm')) && this.item.status !== 'done') {
        style = 'before'
      } else if (moment(this.item.date).subtract(1, 'day').isBefore(moment().format('YYYY-MM-DD HH:mm')) && this.item.status !== 'done') {
        style = 'oneDayLeft'
      }
      return style
    }
  }
})
</script>

<style scoped>
.draggableEl {
  display: flex;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 8px;
  margin-top: 10px;
  font-size: 18px;
  position: relative;
}
.none {
  visibility: hidden;
}
.oneDayLeft {
  display: flex;
  position: absolute;
  height: 90%;
  width: 5px;
  border-radius: 8px;
  right: 2%;
  align-self: center;
  background-color: #ffA500;
}
.before {
  display: flex;
  position: absolute;
  height: 90%;
  width: 5px;
  border-radius: 8px;
  right: 2%;
  align-self: center;
  background-color: #FF0000;
}
</style>
