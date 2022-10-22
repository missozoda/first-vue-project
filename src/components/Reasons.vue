<template>
  <section class="py-16">
    <Container>
      <h3 class="md:text-4xl text-2xl font-bold text-neutral-800 mb-12 mx-auto">Our Reputation</h3>
      <div class="flex lg:justify-between flex-col lg:flex-row lg:space-x-16 mx-20">
        <ReasonCard :reasons="reasons" />
      </div>
    </Container>
  </section>
</template>

<script>
import Container from './Container.vue'
import ReasonCard from './ReasonCard.vue'
import teamImg from '../assets/images/teams.png'
import designImg from '../assets/images/design.png'
  export default {
    name:"Reasons",
    components: {
      Container,
      ReasonCard
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

</style>