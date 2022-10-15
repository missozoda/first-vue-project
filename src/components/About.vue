<template>
  <section class="relative mb-44 mt-36">
    <Container>
      <img class="block" src="../assets/images/about.png" alt="about" width="900" height="655">

      <div class="absolute top-16 bottom-12 right-10 w-[470px] pl-12 py-14 pr-14 text-white bg-blue-800 text-start">
        <h3 class="font-bold text-4xl mb-5">About us</h3>
        <p class="text-xl mb-20">For more than 30 years we have been delivering world-class construction and we've built many lasting relationships along the way. <br>
          <br>We've matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.</p>

          <button class="bg-white rounded text-blue-800 py-3 px-6 font-bold text-lg hover:text-blue-600">More on Our History</button>
      </div>
    </Container>
  </section>
</template>

<script>
import Container from './Container.vue'
export default {
    name:"About",
    components: {
    Container,
}
}
</script>

<style scoped>

</style>