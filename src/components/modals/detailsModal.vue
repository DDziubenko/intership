<template lang="pug">
.modal-backdrop
  .modal
    .details(v-if="!isEdit")
      button(class="close" @click="close")
      .task_name {{selectedItem.taskname}}
      .task_description {{selectedItem.taskdescription}}
      .task_status {{selectedItem.status}}
      .task_date {{selectedItem.date}}
      button.editBtn(@click="Edit") Edit
    .edit(v-if="isEdit")
      button(class="close" @click="close")
      form.addForm(onsubmit="return false" action="/")
      input(class="name" required placeholder="Name" v-model="selectedItem.taskname" @input="isEdited")
      textarea(class="description" required cols="40" rows="3"  placeholder="Description" v-model="selectedItem.taskdescription" @input="isEdited")
      .radioArea
        input(required type="radio" name="status" value="todo" v-model="selectedItem.status" @change="isEdited")
        p ToDo
        input(required type="radio" name="status" value="inprogress" v-model="selectedItem.status" @change="isEdited")
        p In progress
        input(required type="radio" name="status" value="done" v-model="selectedItem.status" @change="isEdited")
        p Done
      flat-pickr(class="date" :config="config" placeholder="Select Date" name="date" v-model="selectedItem.date" @input="isEdited")
      button.cancel(@click="isEdit=false") Cancel
      button.save(v-show="isChanged" @click="Save(selectedItem, selectedIndex)") Save
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import { useStore } from 'vuex'
export default {
  name: 'detailsModal',
  props: {
    selectedItem: Object,
    selectedIndex: Number
  },
  components: {
    flatPickr
  },

  setup () {
    const store = useStore()
    const edit = (item) => {
      store.dispatch('editTask', item)
      console.log(item)
    }
    return {
      v$: useVuelidate(),
      edit
    }
  },
  mounted () {
    this.task = this.selectedItem
  },
  data () {
    return {
      isChanged: false,
      isEdit: false,
      config: {
        enableTime: true,
        dateFormat: 'Y-m-d H:i',
        minDate: 'today',
        time_24hr: true
      }
    }
  },
  validations () {
    return {
      task: {
        taskname: { required },
        taskdescription: { required },
        date: { required }
      }
    }
  },
  methods: {
    Save (item) {
      this.edit(item)
      this.close()
    },
    isEdited () {
      if (this.isChanged === false) {
        this.isChanged = true
      }
    },
    Edit () {
      this.isChanged = false
      this.isEdit = true
    },
    close () {
      this.isEdit = false
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vh;
}

.modal {
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  min-height: 50px;
  min-width: 50px;
}
.details{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.edit{
  display: flex;
  flex-direction: column;
}
.task_name{
  margin: 10px;
  font-size: 24px;
}
.task_description{
  margin: 10px;
  font-size: 18px;
}
.task_status{
  padding: 10px;
  margin: 10px;
  border:2px solid #5c575b;
  align-self: end;
}
.task_date{
  margin: 10px;
  align-self: end;
  color: #4AAE9B;
}
.editBtn {
  margin: 10px;
  min-width: 20px;
  min-height: 20px;
  background-color: #4AAE9B;
  align-self: flex-start;
  padding: 10px;
  border-radius: 8px;
}
.close{
  background-color: #FF0000;
  height: 10px;
  width: 10px;
  border-radius: 100%;
  align-self: end;
  margin: 10px 10px 0 0;
}
.name{
  background-color: #9B9B9B;
  border-radius: 2px;
  padding: 5px;
  margin: 10px;
}
.description{
  margin: 10px;
  padding: 5px;
  border-radius: 2px;
  background-color: #9B9B9B;
}
.radioArea{
  display: flex;
  padding: 10px;
}
.radioArea p {
  margin-right: 10px;
}
.date{
  margin: 10px;
  padding: 5px;
  background-color: #9B9B9B;
  border-radius: 2px;
}
.cancel{
  color: #5c575b;
  font-size: 16px;
  align-self: flex-start;
  margin: 10px;
}
.save{
  margin: 10px;
  min-width: 20px;
  min-height: 20px;
  background-color: #4AAE9B;
  padding: 10px;
  border-radius: 8px;
}
</style>
