<template>
  <ul class="nav-list list-none md:grid md:grid-cols-5 md:gap-5 mt-2 md:text-lg lg:text-xl">
      <li class="nav-list py-1">
          <router-link class="nav-link text-stone-800 hover:text-red-500" :to="'/'">Home</router-link>
      </li>
      <li class="nav-list py-1">
          <router-link class="nav-link text-stone-800 hover:text-red-500" :to="'/aboutus'"> About Us</router-link>
      </li>
      <li class="nav-list py-1">
          <router-link class="nav-link text-stone-800 hover:text-red-500" :to="'/projects'"> Projects</router-link>
      </li>
      <li class="nav-list py-1">
          <router-link class="nav-link text-stone-800 hover:text-red-500" :to="'/contacts'"> Contact Us</router-link>
      </li>
      <li class="nav-list py-1">
          <router-link class="nav-link text-stone-800 hover:text-red-500" :to="'/sevices'"> Sevices</router-link>
      </li>
  </ul>
</template>

<script>
export default {
    name:"Navbar"
}
</script>

<style scoped>

</style>