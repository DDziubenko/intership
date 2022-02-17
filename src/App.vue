<template lang="pug">
router-view
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'App',
  setup () {
    const store = useStore()
    store.commit('loadTasks', axios.get('https://tasktask.getsandbox.com/tasks'))
  }
})
</script>

<style lang="scss">
/* обнуление стилей */
* {
  padding: 0;
  margin: 0;
  border: 0;
}

*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

:focus,
:active {
  outline: none;
}

a:focus,
a:active {
  outline: none;
}

nav,
header,
footer,
aside {
  display: block;
}

html,
body,
#app {
  position: relative;
  min-height: 100vh;
  width: 100%;
  line-height: 1;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  font-family: Helvetica;
}

input,
button,
textarea {
  font-family: Helvetica;
}

input::-ms-clear {
  display: none;
}

button {
  cursor: pointer;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

a,
a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: 400;
}

/* конец обнуления */

.wrapper {
  display: flex;
  min-height: 100vh;
  overflow: hidden;
  background-color: #EAEAEA;
}

.sidebar {
  background-color: #000000;
  flex: 0 0 270px;
  min-height: 100%;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
}

.container_column {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
}

.header {
  max-height: 136px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
}

.content_zone {
  display: flex;
  justify-content: center;
  min-width: 100%;
  min-height: 100%;
  align-items: flex-start;

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

.main_header {
  display: flex;
}

.shapes {
  background-color: #FFC200;
  border-radius: 8px;
  margin: 39.5px 0 0 30px;
}

.main_header h1 {
  font-family: Helvetica;
  font-size: 32px;
  color: #131313;
  margin: 35px 0 0 15px;
  white-space: nowrap;
  line-height: 43px;
}

.dotdotdot {
  max-height: 30px;
  min-width: 30px;
  display: flex;
  background-color: #EAEAEA;
  border-radius: 100%;
  justify-content: center;
  margin: 45px 0 0 11px;
  cursor: pointer;
}

.dotdotdot div {
  height: 4px;
  min-width: 4px;
  background-color: #808080;
  border-radius: 100%;
  margin: 13px 1px 13px 1px;
}

.empty {
  flex: 1 0 10px;
}

.active_users img {
  border-radius: 100%;
}

.active_users {
  margin: 44px 5px 0 0;
}

@media screen and (max-width: 990px) {
  .active_users {
    display: none;
  }
}

.share_but {
  height: 30px;
  width: 67px;
  background: #EAEAEA;
  border-radius: 15px;
  border-radius: 15px;
  margin: 45px 0 0 15px;
  cursor: pointer;

}

.share_but div {
  margin: 7px 14px 6px 15px;
  font-family: Helvetica;
  font-size: 14px;
  color: #131313;
}

.chat_but {
  position: relative;
  display: flex;
  height: 30px;
  width: 81px;
  background: #FFF8DD;
  border-radius: 15px;
  border-radius: 15px;
  margin: 45px 30px 0 15px;
  cursor: pointer;
}

.chat_but div {
  margin: 7px 0 0 36px;
  font-family: Helvetica;
  font-size: 14px;
  color: #FFC200;
}

.nav {
  display: flex;
  max-width: 400px;
  height: 100%;
  justify-content: space-around;

}

.nav__link {
  opacity: 0.7;
  font-family: Helvetica;
  font-size: 16px;
  color: #131313;
  text-decoration: none;
  transition: opacity 0.2s linear;
  margin: 20px 0 0 30px;
  line-height: 22px;
}

.nav__link:hover {
  color: #000000;
  opacity: 1;
}

.nav__link:after {
  content: "";
  display: none;
  width: 100%;
  height: 3px;
  background-color: #FFC200;
  margin: 11px 0 0 0;
}

.nav__link:hover:after, .nav__link.active:after {
  display: block;
}

.active {
  color: #000000;
  opacity: 1;
}

/* icons */

.Projectus h1:after {
  content: url("./assets/img/Search@3x.svg");
  display: inline-block;
  position: absolute;
  right: 0;
  margin: 0 20px 0 auto;
  cursor: pointer;
}

.chat_but div:before {
  content: url("./assets/img/Combined Shape@1x.svg");
  position: absolute;
  left: 0;
  margin-left: 15px;
}

</style>
