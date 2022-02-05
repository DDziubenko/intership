<template lang="pug">
.draggableEl(:style="cardStyle")
  | {{ item.taskname }}
  div( :class='dateStyle')
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import moment from 'moment'

export default defineComponent({
  name: 'Card',
  props: {
    item: Object as any
  },
  setup (props) {
    const cardStyle = computed(() => {
      let color = ''
      if (props.item.status === 'inprogress') {
        color = '#FFFF99'
      } else if (props.item.status === 'done') {
        color = '#99FF99'
      }
      return { backgroundColor: color }
    })
    const dateStyle = computed(() => {
      let style = 'none'
      if (moment(props.item.date).isBefore(moment().format('YYYY-MM-DD HH:mm')) && props.item.status !== 'done') {
        style = 'before'
      } else if (moment(props.item.date).subtract(1, 'day').isBefore(moment().format('YYYY-MM-DD HH:mm')) && props.item.status !== 'done') {
        style = 'oneDayLeft'
      }
      return style
    })
    return { cardStyle, dateStyle }
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
