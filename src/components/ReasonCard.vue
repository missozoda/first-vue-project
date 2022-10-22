<template>
  <div v-for="reason in reasons" :key="reason" class="reason p-5 lg:text-left text-center lg:w-1/3 w-full mb-12 lg:mb-0 rounded">
    <img class="lg:block inline-block mb-5 mr-8" :src="reason.img" alt="teams" width="40" height="40">
    <p class="mb-5 text-xl text-neutral-700 font-bold lg:block inline-block">{{ reason.menu }}</p>
    <p class="text-base text-neutral-400">{{ reason.title }}</p>
  </div>
</template>
<script>
export default {
  name: 'ReasonCard',
  props:['reasons']
}
</script>

<style scoped>
.reason{
  border: 1.4px solid #E0E3EB;
  box-shadow: 0px 0px 16px -4px rgba(17, 24, 39, 0.1);
}
</style>