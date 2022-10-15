<template>
  <section>
    <Container>
      <div class="flex relative py-44">
        <div class="w-1/3 ml-auto text-start">
          <h2 class="font-bold text-6xl text-blue-700 mb-10">30 Years Experience</h2>
          <p class="text-xl text-neutral-600 mb-16">Our company has been the leading provided construction services to clients throughout the USA since 1988.</p>
          <button class="py-3 px-10 bg-blue-700 rounded-sm text-white hover:bg-blue-500" >Contact Us</button>
        </div>

        <div class="absolute top-32 left-80 z-50 p-8 pr-16 border border-white shadow-lg bg-white text-start">
          <img class="block absolute -top-7 left-48" src="../assets/images/happy-clients.png" alt="happy clients" width="97" height="97">
          <h3 class="mb-1 text-black text-7xl font-bold">84</h3>
          <p class="pl-3 border-l-4 border-red-600 text-2xl text-neutral-500">Happy Clients</p>
        </div>
        <div class="absolute top-60 left-20 z-30 p-8 pr-16 border border-white shadow-lg bg-white">
          <img class="block absolute -top-12 -left-8" src="../assets/images/complate.png" alt="projects completed" width="79" height="79">
          <h3 class="mb-1 text-black text-7xl font-bold">123</h3>
          <p class="pl-3 border-l-4 border-red-600  text-2xl text-neutral-500">Projects Completed</p>
        </div>
        <div class="absolute z-40 bottom-40 left-80 p-8 pr-20 border border-white shadow-lg bg-white text-start">
          <img class="block absolute -top-8 left-48" src="../assets/images/award-win.png" alt="award win" width="93" height="93">
          <h3 class="mb-1 text-black text-7xl font-bold">37</h3>
          <p class="pl-3 border-l-4 border-red-600  text-2xl text-neutral-500">Awards Win</p>
        </div>
        <div class="absolute bottom-16 left-24 p-8 pr-12 border border-white shadow-lg bg-white text-start">
          <img class="block absolute top-28 left-64" src="../assets/images/business.png" alt="years in Business" width="84" height="84">
          <h3 class="mb-1 text-black text-7xl font-bold">30</h3>
          <p class="pl-3 border-l-4 border-red-600  text-2xl text-neutral-500">Years in Business</p>
        </div>
      </div>
    </Container>
  </section>
</template>

<script>
import Container from './Container.vue'
export default {
  name: "Stats",
  components: {
    Container,
  }}
</script>

<style scoped>
</style>