<template>
  <section class="ads py-24 mb-20">
    <Container>
      <div class="flex lg:flex-row flex-col justify-between items-center text-white">
        <div class="lg:w-2/3 w-full mb-8 lg:mb-0">
          <h3 class="font-bold md:text-4xl text-2xl mb-8">Free consultation with exceptional quality</h3>
          <p class="md:text-2xl text-xl">Just one call away: +84 1102 2703</p>
        </div>
        <div class="lg:w-1/3 w-full">
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