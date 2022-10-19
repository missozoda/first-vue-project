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
import './assets/styles/output.css'
import HeaderSection from './components/HeaderSection'
import HeroSection from './components/HeroSection.vue'
import Reasons from './components/Reasons.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import Stats from './components/Stats.vue'
import Ads from './components/Ads.vue'
import Projects from './components/Projects.vue'
import Bottom from './components/Bottom.vue'
import FooterSection from './components/FooterSection.vue'
import CTA from './components/CTA.vue'

export default {
  name: 'App',
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
}}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 12px;
}
</style>
