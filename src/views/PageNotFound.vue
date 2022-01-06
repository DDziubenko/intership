<template lang="pug">
.container
  p
    | 404
  router-link.back(to='/') Back
</template>

<script>
export default {
  name: 'PageNotFound'
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  min-width: 100vh;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}
p {
  font-size: 72px;
  font-family: Helvetica;
  color: #4AAE9B;
}
.back{
  font-family: Helvetica;
  font-size: 24px;
  color: #4AAE9B;
}

</style>
