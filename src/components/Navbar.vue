<template>
    <ul class="nav-list list-none md:grid md:grid-cols-6 md:gap-5 mt-2 md:text-lg lg:text-xl">
        <li class="nav-list py-1">
            <router-link class="nav-link text-stone-800 hover:text-red-500" :to="'/'">{{ $t('home') }}</router-link>
        </li>
        <li class="nav-list py-1">
            <router-link class="nav-link text-stone-800 hover:text-red-500" :to="'/aboutus'">{{ $t('about') }}</router-link>
        </li>
        <li class="nav-list py-1">
            <router-link class="nav-link text-stone-800 hover:text-red-500" :to="'/projects'">{{ $t('project') }}</router-link>
        </li>
        <li class="nav-list py-1">
            <router-link class="nav-link text-stone-800 hover:text-red-500" :to="'/contacts'">{{ $t('contacts') }}</router-link>
        </li>
        <li class="nav-list py-1">
            <router-link class="nav-link text-stone-800 hover:text-red-500" :to="'/sevices'">{{ $t('services') }}</router-link>
        </li>
        <li class="nav-list py-1 md:block hidden"><SwitchLang/></li>
    </ul>
</template>

<script>
import SwitchLang from '../components/Switchlang.vue'
export default {
    name:"Navbar",
    components:{
        SwitchLang
    }
}
</script>

<style scoped>

</style>