<template lang="pug">
.header
  .main_header
    img.shapes(width='40' height='40' alt='logo' src='../assets/img/Shapes@2x.png')
    h1 Website Redesign
    .dotdotdot
      div
      div
      div
    .empty
    .active_users
      img(alt='user' src='../assets/img/user_avatar_small.svg')
      img(alt='user' src='../assets/img/user_avatar_small.svg')
      img(alt='user' src='../assets/img/user_avatar_small.svg')
    .share_but
      div Share
    .chat_but
      div Chat
  .slider
    nav.nav
      router-link.nav__link(to='/tasks') Tasks
      router-link.nav__link(to='/kanban') Kanban
      router-link.nav__link(to='/activity') Activity
      router-link.nav__link(to='/calendar') Calendar
      router-link.nav__link(to='/files') Files
</template>

<script lang="ts">
export default {
  name: 'Header'
}
</script>

<style scoped>

.header {
  max-height: 136px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
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

.chat_but div:before {
  content: url("../assets/img/Combined Shape@1x.svg");
  position: absolute;
  left: 0;
  margin-left: 15px;
}
</style>
