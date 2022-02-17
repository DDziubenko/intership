import axios from 'axios'

export const taskService = {
  addTask (state:any, payload:any) {
    axios.post('https://tasktask.getsandbox.com/tasks', payload)
    state.commit('loadTasks')
  },
  deleteTask (state:any, payload:any) {
    console.log(state, payload)
    axios.delete('https://tasktask.getsandbox.com/tasks', payload)
    state.commit('loadTasks')
  },
  editTask (state:any, payload:any) {
    axios.put('https://tasktask.getsandbox.com/tasks', payload)
    state.commit('loadTasks')
  }
}
