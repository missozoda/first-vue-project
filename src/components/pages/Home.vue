<template>
  <div>
    <HeaderSection/>
    <HeroSection/>
    <Reasons/>
    <About/>
    <Services/>
    <Stats/>
    <Ads/>
    <Projects/>
    <CTA/>
    <Bottom/>
    <FooterSection/> 
  </div>
</template>

<script>
import HeaderSection from '../HeaderSection.vue'
import HeroSection from '../HeroSection.vue'
import Reasons from '../Reasons.vue'
import About from '../About.vue'
import Services from '../Services.vue'
import Stats from '../Stats.vue'
import Ads from '../Ads.vue'
import Projects from '../Projects.vue'
import Bottom from '../Bottom.vue'
import FooterSection from '../FooterSection.vue'
import CTA from '../CTA.vue'

export default {
  name: "Home",
  components: {
    HeaderSection,
    HeroSection,
    Reasons,
    About,
    Services,
    Stats,
    Ads,
    Projects,
    Bottom,
    FooterSection,
    CTA,
  }
}

</script>

<style scoped>

</style>