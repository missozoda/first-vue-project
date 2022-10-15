<template>
  <section class="ads py-24 mb-20">
    <Container>
      <div class="flex justify-between items-center text-white">
        <div class="w-2/3">
          <h3 class="font-bold text-4xl mb-8">Free consultation with exceptional quality</h3>
          <p class="text-2xl">Just one call away: +84 1102 2703</p>
        </div>
        <div class="w-1/3">
          <button class="border-2 border-white py-3 px-5 text-lg"> Get your consultation </button>
        </div>
      </div>
    </Container>
  </section>
</template>

<script >
import Container from './Container.vue';
export default {
  name: "Ads",
  components:{
    Container,
  }
}
</script>

<style scoped>
.ads {
  background-image: url(../assets/images/ads.png);
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
}
</style>