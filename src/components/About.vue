<template>
  <section class="relative xl:mb-44 xl:mt-36 mb-28 mt-20">
    <Container>
      <img class="block w-full xl:w-auto" src="../assets/images/about.png" alt="about" width="900" height="655">

      <div class="xl:absolute block top-16 bottom-12 right-10 xl:w-[470px] w-full mx-auto xl:mx-0 pl-12 py-14 pr-14 text-white bg-blue-800 xl:text-start text-centar">
        <h3 class="font-bold text-4xl mb-5 ">{{ about.title }}</h3>
        <p class="md:text-xl text-md mb-20">{{ about.firstText }}<br>
          <br>{{ about.secondText }}</p>

          <button class="bg-white block rounded mx-auto xl:mx-0 text-blue-800 py-3 px-6 font-bold text-lg hover:text-blue-600" @click="showmodal()">More on Our History</button>
          <AboutModal v-if="about.show" :about="about" @closeModal="closeModal"/>
      </div>
    </Container>
  </section>
</template>

<script>
import Container from './Container.vue'
import AboutModal from './AboutModal.vue'
export default {
    name:"About",
    components: {
    Container,
    AboutModal,
},
data: ()=>({
  about:
    {
      show: false,
      title: "About us",
      firstText:"For more than 30 years we have been delivering world-class construction and we've built many lasting relationships along the way.",
      secondText: "We've matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S."
    }
}),
methods:{
  showmodal(){
    return this.about.show = true
  },
  closeModal(){
    return this.about.show = false
  }
}
}
</script>

<style scoped>

</style>