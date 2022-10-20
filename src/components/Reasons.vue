<template>
  <section class="py-16">
    <Container>
      <h3 class="md:text-4xl text-2xl font-bold text-neutral-800 mb-12 mx-auto">Our Reputation</h3>
      <div class="flex lg:justify-between flex-col lg:flex-row lg:space-x-16 mx-20">
        <div v-for="reason in reasons" :key="reason" class="reason p-5 lg:text-left text-center lg:w-1/3 w-full mb-12 lg:mb-0 rounded">
          <img class="lg:block inline-block mb-5 mr-8" :src="reason.img" alt="teams" width="40" height="40">
          <p class="mb-5 text-xl text-neutral-700 font-bold lg:block inline-block">{{ reason.menu }}</p>
          <p class="text-base text-neutral-400">{{ reason.title }}</p>
        </div>
      </div>
    </Container>
  </section>
</template>

<script>
import Container from './Container.vue'
import teamImg from '../assets/images/teams.png'
import designImg from '../assets/images/design.png'
  export default {
    name:"Reasons",
    components: {
      Container
    },
    data: () => ({
      reasons: [
        {
          menu: "Best Services",
          title: "Nullam senectus porttitor in eget. Eget rutrum leo interdum.",
          img: teamImg,
        },
        {
          menu: "Best Teams",
          title: "Cursus semper tellus volutpat aliquet lacus. ",
          img: teamImg,
        },
        {
          menu: "Best Design",
          title: "Ultricies at ipsum nunc, tristique nam lectus.",
          img: designImg,
        },
      ]
    })
}
</script>

<style scoped>
.reason{
  border: 1.4px solid #E0E3EB;
  box-shadow: 0px 0px 16px -4px rgba(17, 24, 39, 0.1);
}
</style>