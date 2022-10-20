<template>
  <section class="bg-neutral-50 pt-10 pb-20 md:px-32 px-12">
    <Container>
      <h2 class="font-bold md:text-4xl text-2xl text-neutral-800 mx-auto mb-9">Services</h2>
      <div class="grid xl:grid-cols-3 md:grid-cols-2 lg:gap-24 md:gap-8 grid-col-1 gap-5">
        <div class="lg:py-10 py-6 lg:px-20 px-10 bg-white rounded shadow  transition ease-in-out delay-150 hover:scale-110 duration-500">
          <img class="block mx-auto" src="../assets/images/construction.png" alt="construction" width="40" height="40">
          <hr class="w-16 h-0.5 bg-neutral-100 my-5 mx-auto">
          <p class="font-bold text-xl text-blue-700 mx-auto">Construction</p>
        </div>
        <div class="lg:py-10 py-6 lg:px-20 px-10 bg-blue-700 rounded shadow transition ease-in-out delay-150 hover:scale-110 duration-500">
          <img class="block mx-auto" src="../assets/images/renovation.png" alt="renovation" width="40" height="40">
          <hr class="w-16 h-0.5 bg-neutral-100 my-5 mx-auto">
          <p class="font-bold text-xl text-white mx-auto">Renovation</p>
        </div>
        <div class="lg:py-10 py-6 lg:px-20 px-10 xl:bg-white md:bg-blue-700 bg-white rounded shadow transition ease-in-out delay-150 hover:scale-110 duration-500">
          <img class="block mx-auto" src="../assets/images/construction.png" alt="construction" width="40" height="40">
          <hr class="w-16 h-0.5 bg-neutral-100 my-5 mx-auto">
          <p class="font-bold text-xl xl:text-blue-700 md:text-white text-blue-700 mx-auto">Consultation</p>
        </div>
        <div class="lg:py-10 py-6 lg:px-12 px-10 xl:bg-blue-700 md:bg-white bg-blue-700 rounded shadow transition ease-in-out delay-150 hover:scale-110 duration-500">
          <img class="block mx-auto" src="../assets/images/construction.png" alt="construction" width="40" height="40">
          <hr class="w-16 h-0.5 bg-neutral-100 my-5 mx-auto">
          <p class="font-bold text-xl xl:text-white md:text-blue-700 text-white mx-auto">Repair Services</p>
        </div>
        <div class="lg:py-10 py-6 lg:px-20 px-10 bg-white rounded shadow transition ease-in-out delay-150 hover:scale-110 duration-500">
          <img class="block mx-auto" src="../assets/images/construction.png" alt="construction" width="40" height="40">
          <hr class="w-16 h-0.5 bg-neutral-100 my-5 mx-auto">
          <p class="font-bold text-xl text-blue-700 mx-auto">Architecture</p>
        </div>
        <div class="lg:py-10 py-6 lg:px-20 px-10 bg-blue-700 rounded shadow transition ease-in-out delay-150 hover:scale-110 duration-500">
          <img class="block mx-auto" src="../assets/images/construction.png" alt="construction" width="40" height="40">
          <hr class="w-16 h-0.5 bg-neutral-100 my-5 mx-auto">
          <p class="font-bold text-xl text-white mx-auto">Electric</p>
        </div>
      </div>
    </Container>
  </section>
</template>

<script>
import Container from './Container.vue';
export default {
  name: "Services",
  components:{
    Container,
  }
}

</script>

<style scoped>

</style>