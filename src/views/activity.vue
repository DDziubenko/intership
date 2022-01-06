<template lang="pug">
.content_box
  .date
    h2 Today
  div(:class="'content'+ (index+1)" v-for='(el, index) in content' :key='index')
    div(:class='el.class')
    p.text {{el.text}}
    p.time {{el.time}}
    .comment(v-if='el.comment')
      p {{el.comment}}
    .images(v-if='el.images')
      img(v-for='(img, i) in el.images' :key='i' :src='img' @click='changeNotif(i)' alt='image')

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'activity',
  components: {},
  data (): Record<string, any> {
    return {
      content: [
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
    }
  },
  methods: {
    changeNotif (index: number) {
      this.$emit('notifChanged', index)
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

.date {
  opacity: 0.5;
  font-family: Helvetica;
  font-size: 14px;
  color: #131313;
  text-transform: uppercase;
  margin: 30px 0 0 35px;
  line-height: 19px;
}

.checked_ms {
  background-color: #CEF9C6;
  height: 40px;
  width: 40px;
  border-radius: 100%;
}

.comment_ms {
  background-color: #FFF8DD;
  height: 40px;
  width: 40px;
  border-radius: 100%;
}

.upload_ms {
  background-color: #E3EFFF;
  height: 40px;
  width: 40px;
  border-radius: 100%;
}

.content1 {
  display: flex;
  margin: 32px 0 0 30px;
  flex-wrap: wrap;
  position: relative;
}

.content2 {
  display: flex;
  margin: 32px 0 0 30px;
  flex-wrap: wrap;
  position: relative;
}

.content3 {
  display: flex;
  margin: 32px 0 0 30px;
  flex-wrap: wrap;
  position: relative;
}

.images img{
  height: 100px;
  width: 100px;
}

.content1 img {
  margin: 15px 0 0 14px;
}

.content2 img {
  margin: 15px 0 0 14px;
}

.content3 img {
  margin: 15px 0 0 14px;
}

.text {
  font-family: Helvetica;
  font-size: 16px;
  color: #131313;
  line-height: 20px;
  margin-left: 20px;
  max-width: 461px;
}

.time {
  opacity: 0.7;
  font-family: Helvetica;
  font-size: 14px;
  color: #131313;
  text-align: right;
  line-height: 20px;
  right: 0;
  position: absolute;
  padding-right: 30px;
}

.comment {
  max-width: 551px;
  min-height: 88px;
  background: #F7F6F3;
  border-radius: 10px;
  margin: 20px 0 0 61px;
}

.comment p {
  font-family: Helvetica;
  font-size: 15px;
  color: #131313;
  margin: 20px 0 20px 30px;
  line-height: 24px;
}

.images {
  margin: 0 0 0 60px;
}

.images img {
  border-radius: 8px;
}

.checked_ms:after {
  content: url("../assets/img/Icon@3x.svg");
  margin: 14px 0 0 14px;
  position: absolute;
}

.comment_ms:after {
  content: url("../assets/img/Icon@3x.svg");
  margin: 14px 0 0 14px;
  position: absolute;
}

.upload_ms:after {
  content: url("../assets/img/Icon@3x.svg");
  margin: 14px 0 0 14px;
  position: absolute;
}
</style>
