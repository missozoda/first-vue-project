<template>
  <div>
    <HeaderSection/>
    <div class="border-2 border-neutral-800">
    <h1 class="font-bold text-4xl text-neutral-800 mt-6">Projects page</h1>
    <p class="text-xl pb-80">Test page</p>
    </div>
    <Projects/>
    <Bottom/>
    <FooterSection/> 
  </div>
</template>

<script>
import HeaderSection from '../HeaderSection.vue'
import Projects from '../Projects.vue'
import Bottom from '../Bottom.vue'
import FooterSection from '../FooterSection.vue'

export default {
  name: "ProjectsPage",
  components: {
    HeaderSection,
    Projects,
    Bottom,
    FooterSection,
  }
}

</script>

<style scoped>

</style>