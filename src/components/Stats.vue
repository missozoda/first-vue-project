<template>
  <section>
    <Container>
      <div class="flex lg:flex-row flex-col relative lg:py-44 py-20">
        <div class="lg:w-1/3 w-2/3 mx-auto lg:mx-0 lg:ml-auto lg:text-start text-center mb-8">
          <h2 class="font-bold lg:text-6xl text-4xl text-blue-700 mb-10">30 Years Experience</h2>
          <p class="md:text-xl text-lg text-neutral-600 mb-16">Our company has been the leading provided construction services to clients throughout the USA since 1988.</p>
          <button class="py-3 px-10 bg-blue-700 rounded-sm text-white hover:bg-blue-500" >Contact Us</button>
        </div>

        <div class="lg:block relative lg:static lg:text-start text-center">
          <div class="lg:absolute relative mb-4 lg:mb-0 lg:top-32 lg:left-80 lg:z-50 p-8 pr-16 border border-white shadow-lg bg-white">
            <img class="block mx-auto lg:mx-0 lg:absolute -top-7 left-48" src="../assets/images/happy-clients.png" alt="happy clients" width="97" height="97">
            <h3 class="mb-1 text-black text-7xl font-bold">84</h3>
            <p class="pl-3 lg:border-l-4 lg:border-red-600 text-2xl text-neutral-500">Happy Clients</p>
          </div>
          <div class="lg:absolute relative mb-4 lg:mb-0 lg:top-60 lg:left-20 lg:z-30 p-8 pr-16 border border-white shadow-lg bg-white">
            <img class="block mx-auto lg:mx-0 lg:absolute -top-12 -left-8" src="../assets/images/complate.png" alt="projects completed" width="79" height="79">
            <h3 class="mb-1 text-black text-7xl font-bold">123</h3>
            <p class="pl-3 lg:border-l-4 lg:border-red-600  text-2xl text-neutral-500">Projects Completed</p>
          </div>
          <div class="lg:absolute relative mb-4 lg:mb-0 lg:z-40 lg:bottom-40 lg:left-80 p-8 pr-20 border border-white shadow-lg bg-white">
            <img class="block mx-auto lg:mx-0 lg:absolute -top-8 left-48" src="../assets/images/award-win.png" alt="award win" width="93" height="93">
            <h3 class="mb-1 text-black text-7xl font-bold">37</h3>
            <p class="pl-3 lg:border-l-4 lg:border-red-600  text-2xl text-neutral-500">Awards Win</p>
          </div>
          <div class="lg:absolute relative mb-4 lg:mb-0 lg:bottom-16 lg:left-24 p-8 pr-12 border border-white shadow-lg bg-white">
            <img class="block mx-auto lg:mx-0 lg:absolute top-28 left-64" src="../assets/images/business.png" alt="years in Business" width="84" height="84">
            <h3 class="mb-1 text-black text-7xl font-bold">30</h3>
            <p class="pl-3 lg:border-l-4 lg:border-red-600  text-2xl text-neutral-500">Years in Business</p>
          </div>
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