<template>
  <div>
    <HeaderSection/>
    <div class="border-2 border-neutral-800">

      <h1 class="font-bold text-4xl text-neutral-800 mt-6">Projects page</h1>
      <p class="text-xl pb-80">Test page</p>
      <ul class="movie-list grid grid-cols-3 gap-5 list-none m-0 p-0">
        <li class="border border-neutral-800 rounded p-5 text-neutral-800 bg-white " v-for="movie in movies" :key="movie">
          <h3 class="title font-bold text-2xl">Title: {{movie.Title}}</h3>
          <p class="text-xl">Year: {{movie.Year}}</p>
        </li>
      </ul>
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
    movies:null
  }),
  methods: {
    init(){
      this.axios.get(`http://www.omdbapi.com/?apikey=b3078df7&s=Hulk&page=2`).then((response) => {
        console.log(response.data.Search)
        return this.movies=response.data.Search
      })
    }
},
mounted(){
  this.init();
}
}

</script>

<style scoped>

</style>