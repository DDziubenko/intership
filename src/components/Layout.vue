<template lang="pug">
.wrapper
  Sidebar
  .container_column
    Header
    .content_zone
      router-view(@notifСhanged='notifications=$event')
</template>

<script lang="ts">
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
export default {
  name: 'Layout',
  components: { Header, Sidebar }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  min-height: 100vh;
  overflow: hidden;
  background-color: #EAEAEA;
}
.content_zone {
  display: flex;
  justify-content: center;
  min-width: 100%;
  min-height: 100%;
  align-items: flex-start;
}

.container_column {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
}
</style>
