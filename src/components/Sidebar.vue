<template lang="pug">
.sidebar
  .Projectus
    img.logo(src='~@/assets/img/Logo@3x.svg' alt='logo')
    h1 PROJECTUS
  #user.user
    img.user_avatar(:src='User.image' alt='user_avatar')
    ul.user_info
      li.user_name {{ User.name }}
      li.user_status {{ User.status }}
    .dotdotdot_user
      div
      div
      div
    // dotdotdot
  .tasks
    ul.completed(@click='changeTasks')
      li.counter {{ completedCount }}
      li Completed Tasks
    ul.open(@click="openTasks")
      li.counter {{ openCount }}
      li Open Tasks
  .navigation
    .notifications
      p {{notifications}}
    ul
      li.menu MENU
      li.menu_li Home
      li.menu_li My Tasks
      li.menu_li Notification
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import router from '@/router'

export default defineComponent({
  name: 'Sidebar',
  data (): Record<string, any> {
    return {
      notifications: 3,
      completedCount: 237,
      openCount: 10,
      User: {
        image: require('@/assets/img/user_avatar.svg'),
        name: 'Jean Gonzales',
        status: 'Product Owner'
      }
    }
  },
  methods: {
    changeTasks () {
      if (this.openCount > 0) {
        const submit = confirm('Are you sure you want to change the number of tasks?')
        if (submit && this.openCount > 0) {
          this.completedCount++
          this.openCount--
        }
      }
    },
    openTasks () {
      if (this.openCount > 0) {
        router.push('/')
      }
    }
  }
})

</script>

<style scoped>
.sidebar {
  background-color: #000000;
  flex: 0 0 270px;
  min-height: 100%;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
}

.Projectus {
  min-width: 100%;
  min-height: 84px;
  display: flex;
  position: relative;
}

.logo {
  margin: 32.5px 0 32.6px 20.4px;
}

.Projectus h1 {
  margin: 31px 0 0 13px;
  font-family: Helvetica;
  font-size: 16px;
  color: #FFFFFF;
  line-height: 24px;
}

.user {
  flex: 0 0 80px;
  background-color: #202020;
  display: flex;
  position: relative;
}

.user_avatar {
  border-radius: 100px;
  border: 0px solid #202020;
  margin: 16px 0 16px 30px;
}

.user_info {
  margin: 20px 0 0 15px;
}

.user_name {
  font-family: Helvetica;
  font-size: 14px;
  color: #FFFFFF;
  line-height: 19px;
}

.user_status {
  font-family: Helvetica;
  font-size: 12px;
  color: #9B9B9B;
  margin-top: 2px;
  line-height: 17px;
}

.dotdotdot_user {
  position: absolute;
  right: 0;
  display: flex;
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
  max-height: 3px;
  min-width: 16px;
  margin: 38px 20px 0 0;
}

.dotdotdot_user div {
  min-height: 4px;
  min-width: 4px;
  background-color: #D8D8D8;
  border: 0px;
  border-radius: 100%;
  margin: 0px 2px 0 0;
}

.tasks {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 141px;
}

.completed {
  cursor: pointer;
}

.open {
  cursor: pointer;
}

.tasks li {
  opacity: 0.5;
  font-family: Helvetica;
  font-size: 12px;
  color: #FFFFFF;
  line-height: 17px;
}

.tasks li.counter {
  font-family: Helvetica;
  font-size: 20px;
  color: #FFFFFF;
  opacity: 100%;
  margin-bottom: 2px;
  line-height: 27px;
}

.navigation ul {
  margin: 0 0 0 30px;
}

.menu {
  font-family: Helvetica;
  font-size: 12px;
  color: #878787;
  line-height: 18px;
  margin: 0 0 18px 0;
}

.menu_li {
  margin: 0 0 16px 0;
  font-family: Helvetica;
  font-size: 14px;
  color: #FFFFFF;
  line-height: 22px;
}

.notifications {
  height: 20px;
  width: 20px;
  border-radius: 100%;
  background: #FFC200;
  position: absolute;
  margin: 112px 0 0 110px;
}

.notifications p {
  font-family: Helvetica;
  font-size: 13px;
  color: #131313;
  margin: 2px 0 0 6px;
  line-height: 18px;
}

.Projectus h1:after {
  content: url("../assets/img/Search@3x.svg");
  display: inline-block;
  position: absolute;
  right: 0;
  margin: 0 20px 0 auto;
  cursor: pointer;
}
</style>
