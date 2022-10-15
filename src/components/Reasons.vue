<template>
  <section class="py-16">
    <Container>
      <h3 class="text-4xl font-bold text-neutral-800 mb-12 mx-auto">Our Reputation</h3>
      <div class="flex justify-between space-x-16 mx-20">
        <div v-for="reason in reasons" :key="reason" class="reason p-5 text-left w-80 rounded">
          <img class="block mb-5" src="../assets/images/teams.png" alt="teams" width="40" height="40">
          <p class="mb-5 text-xl text-neutral-700 font-bold">{{ reason.menu }}</p>
          <p class="text-base text-neutral-400">{{ reason.title }}</p>
        </div>
      </div>
    </Container>
  </section>
</template>

<script>
import Container from './Container.vue'
  export default {
    name:"Reasons",
    components: {
      Container
    },
    data: () => ({
      reasons: [
        {
          menu: "Best Services",
          title: "Nullam senectus porttitor in eget. Eget rutrum leo interdum."
        },
        {
          menu: "Best Teams",
          title: "Cursus semper tellus volutpat aliquet lacus. "
        },
        {
          menu: "Best Design",
          title: "Ultricies at ipsum nunc, tristique nam lectus."
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