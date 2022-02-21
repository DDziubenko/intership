<template lang="pug">
.modal-backdrop
  .modal
    button(class="close" @click="close")
    form.addForm(onsubmit="return false" action="/")
    input(class="name" required placeholder="Name" v-model="newtask.taskname")
    textarea(class="description" required cols="40" rows="3"  placeholder="Description" v-model="newtask.taskdescription")
    .radioArea
      input(required type="radio" name="status" value="todo" checked v-model="newtask.status")
      p ToDo
      input(required type="radio" name="status" value="inprogress" v-model="newtask.status")
      p In progress
      input(required type="radio" name="status" value="done" v-model="newtask.status")
      p Done
    flat-pickr(v-model="newtask.date" class="date" :config="config" placeholder="Select Date" name="date")
    input(class="Add" id="addTask" type="submit" value="Add task" @click="addTask")

</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import { uuid } from 'vue-uuid'
export default {
  name: 'tasksModal',
  components: {
    uuid,
    flatPickr
  },

  setup () {
    return {
      v$: useVuelidate()
    }
  },
  data () {
    return {
      newtask: {
        taskname: '',
        taskdescription: '',
        status: 'todo',
        date: '',
        id: ''
      },
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
      newtask: {
        taskname: { required },
        taskdescription: { required },
        date: { required }
      }
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    addTask () {
      this.newtask.id = uuid.v4()
      this.v$.$validate()
      if (!this.v$.$error) {
        this.$emit('add', this.newtask)
        this.newtask = {
          taskname: '',
          taskdescription: '',
          status: 'todo',
          date: '',
          id: ''
        }
        this.close()
      }
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
}

.modal {
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
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
.Add{
  background-color: #4AAE9B;
  border-radius: 8px;
  margin: 10px;
  padding: 5px;
}
</style>
