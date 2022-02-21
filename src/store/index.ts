import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'
import { taskService } from '@/services/taskService'
import { TasksInterface } from '@/types/tasksInterface'

export default createStore({
  state: {
    tasks: [] as TasksInterface[],
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
    activityContent: [
      {
        class: 'checked_ms',
        text: 'Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users',
        time: '8:40 PM',
        comment: '',
        images: ''
      },
      {
        class: 'comment_ms',
        text: 'Emilee Simchenko commented on Account for teams and personal in bottom style',
        time: '7:32 PM',
        comment: 'During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes',
        images: ''
      },
      {
        class: 'upload_ms',
        text: 'Darika Samak uploaded 4 files on An option to search in current projects or in all projects',
        time: '6:02 PM',
        comment: '',
        images: ['https://static4.depositphotos.com/1000423/454/i/600/depositphotos_4548401-stock-photo-symbol-of-yin-and-yang.jpg',
          'https://cs8.pikabu.ru/post_img/big/2016/02/04/7/145458292112119207.jpg',
          'https://static4.depositphotos.com/1000423/454/i/600/depositphotos_4548401-stock-photo-symbol-of-yin-and-yang.jpg',
          'https://cs8.pikabu.ru/post_img/big/2016/02/04/7/145458292112119207.jpg']
      }
    ]
  },
  mutations: {
    refresh (state, payload) {
      state.tasks = payload
    },
    add (state, payload: TasksInterface) {
      state.tasks.push(payload)
    },
    del (state, payload) {
      state.tasks.splice(state.tasks.findIndex(item => item.id === payload.id), 1)
    }
  },
  actions: {
    getTasks (state) {
      return taskService.getTasks().then(res => {
        state.commit('refresh', res.data)
      })
    },
    addTask (state, payload) {
      return taskService.addTask(state, payload).then(() => {
        state.commit('add', payload)
      })
    },
    deleteTask (state, payload) {
      return taskService.deleteTask(state, payload).then(() => {
        state.commit('del', payload)
      })
    },
    editTask (state, payload) {
      return taskService.editTask(state, payload)
    }
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
