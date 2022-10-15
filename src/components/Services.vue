<template>
  <section class="bg-neutral-50 pt-10 pb-20 px-32">
    <Container>
      <h2 class="font-bold text-4xl text-neutral-800 mx-auto mb-9">Services</h2>
      <div class="grid grid-cols-3 gap-24">
        <div class="py-10 px-20 bg-white rounded shadow hover:transition hover:ease-in-out duration-500  hover:scale-110">
          <img class="block mx-auto" src="../assets/images/construction.png" alt="construction" width="40" height="40">
          <hr class="w-16 h-0.5 bg-neutral-100 my-5 mx-auto">
          <p class="font-bold text-xl text-blue-700 mx-auto">Construction</p>
        </div>
        <div class="py-10 px-20 bg-blue-700 rounded shadow hover:scale-110">
          <img class="block mx-auto" src="../assets/images/renovation.png" alt="renovation" width="40" height="40">
          <hr class="w-16 h-0.5 bg-neutral-100 my-5 mx-auto">
          <p class="font-bold text-xl text-white mx-auto">Renovation</p>
        </div>
        <div class="py-10 px-20 bg-white rounded shadow hover:scale-110">
          <img class="block mx-auto" src="../assets/images/construction.png" alt="construction" width="40" height="40">
          <hr class="w-16 h-0.5 bg-neutral-100 my-5 mx-auto">
          <p class="font-bold text-xl text-blue-700 mx-auto">Consultation</p>
        </div>
        <div class="py-10 px-12 bg-blue-700 rounded shadow hover:scale-110">
          <img class="block mx-auto" src="../assets/images/construction.png" alt="construction" width="40" height="40">
          <hr class="w-16 h-0.5 bg-neutral-100 my-5 mx-auto">
          <p class="font-bold text-xl text-white mx-auto">Repair Services</p>
        </div>
        <div class="py-10 px-20 bg-white rounded shadow hover:scale-110">
          <img class="block mx-auto" src="../assets/images/construction.png" alt="construction" width="40" height="40">
          <hr class="w-16 h-0.5 bg-neutral-100 my-5 mx-auto">
          <p class="font-bold text-xl text-blue-700 mx-auto">Architecture</p>
        </div>
        <div class="py-10 px-20 bg-blue-700 rounded shadow hover:scale-110">
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