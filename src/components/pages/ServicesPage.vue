<template>
  <div>
    <HeaderSection/>
    <div class="border-2 border-neutral-800">
    <h1 class="font-bold text-4xl text-neutral-800 mt-6">Services page</h1>
    <p class="text-xl pb-80">Test page</p>
    </div>
    <Services/>
    <Bottom/>
    <FooterSection/> 
  </div>
</template>

<script>
import HeaderSection from '../HeaderSection.vue'
import Services from '../Services.vue'
import Bottom from '../Bottom.vue'
import FooterSection from '../FooterSection.vue'

export default {
  name: "ServicesPage",
  components: {
    HeaderSection,
    Services,
    Bottom,
    FooterSection,
  }
}

</script>

<style scoped>

</style>