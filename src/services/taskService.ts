import axios from 'axios'
import { TasksInterface } from '@/types/tasksInterface'

export const taskService = {
  addTask (state:any, payload: TasksInterface) {
    return axios.post('https://tasktask.getsandbox.com/tasks', payload)
  },
  deleteTask (state:any, payload: TasksInterface) {
    return axios.delete('https://tasktask.getsandbox.com/tasks', { data: payload.id })
  },
  editTask (state:any, payload:any) {
    return axios.put('https://tasktask.getsandbox.com/tasks', payload)
  },
  getTasks () {
    return axios.get('https://tasktask.getsandbox.com/tasks')
  }
}
