import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'

export default createStore({
  state: {
    tasks: [
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
    loadTasks (state, payload) {
      axios.get('https://ancient-surf-2983.getsandbox.com/tasks').then(res => {
        state.tasks = res.data
      })
    }
  },
  actions: {
    addTask (state, payload) {
      axios.post('https://ancient-surf-2983.getsandbox.com/tasks', payload)
      state.commit('loadTasks')
    },
    deleteTask (state, payload) {
      axios.delete('https://ancient-surf-2983.getsandbox.com/tasks', payload)
      state.commit('loadTasks')
    },
    editTask (state, payload) {
      axios.put('https://ancient-surf-2983.getsandbox.com/tasks', payload)
      state.commit('loadTasks')
    }
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
