<template>
  <div>
    <HeaderSection/>
    <div class="border-2 border-neutral-800">

      <h1 class="font-bold text-4xl text-neutral-800 mt-6">Projects page</h1>
      <p class="text-xl pb-80">Test page</p>
      <!-- <button @click="getList()" class="my-4 p-5 text-xl font-bold border border-neutral-800"> Show movies </button> -->

    </div>
    <Bottom/>
    <FooterSection/> 
  </div>
</template>

<script>
import HeaderSection from '../HeaderSection.vue';
import Bottom from '../Bottom.vue';
import FooterSection from '../FooterSection.vue';

export default {
  name: "ProjectsPage",
  components: {
    HeaderSection,
    Bottom,
    FooterSection,
  },
  data:()=>({
    movie:[]
  }),
//   methods: {
//       getList() {
//         this.axios.get(`http://www.omdbapi.com/?apikey=b3078df7&s=Hulk&page=2`).then((response) => {
//           console.log(response.data, this.movie)
//           return this.movie=response.data
//         })
// }}
}

</script>

<style scoped>

</style>