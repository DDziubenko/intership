<template lang="pug">
.content_box(@click="log")
  div(:class="'content'+ (index+1)" v-for='(el, index) in activityContent' :key='index')
    .images(v-if='el.images')
      img(v-for='(img, i) in el.images' :key='i' :src='img' @click='log(i)' alt='image')
</template>

<script>
import { mapState } from 'vuex'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'files',
  computed: {
    ...mapState(['activityContent'])
  },
  methods: {
    log (e) {
      console.log(e)
    }
  }
})
</script>

<style scoped>
.content_box {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 730px;
  background-color: #FFFFFF;
  border-radius: 8px;
  margin: 30px auto;
  padding: 30px 10px;
}
.content_box img {
  height: 100px;
  width: 100px;
}
</style>
