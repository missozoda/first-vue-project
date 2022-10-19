<template>
  <div>
    <HeaderSection/>
    <div class="border-2 border-neutral-800">
    <h1 class="font-bold text-4xl text-neutral-800 mt-6">Contacts page</h1>
    <p class="text-xl pb-80">Test page</p>
    </div>
    <Ads/>
    <Bottom/>
    <FooterSection/> 
  </div>
</template>

<script>
import HeaderSection from '../HeaderSection.vue'
import Ads from '../Ads.vue'
import Bottom from '../Bottom.vue'
import FooterSection from '../FooterSection.vue'

export default {
  name: "ContactsPage",
  components: {
    HeaderSection,
    Ads,
    Bottom,
    FooterSection,
  }
}

</script>

<style scoped>

</style>