<template>
    <header class="mt-0 py-2 pb-3">
        <Container>
            <div class="navbar flex justify-between relative">
                <div class="flex justify-between align-baseline">
                    <img class="block logo" src="../assets/images/logo.svg" alt="logo" width="38" height="47.5">
                    <span class=" block text-blue-500 hover:text-blue-400 text-2xl font-bold mt-2 mx-3">TheBox</span>
                </div>
                <div class="flex justify-between item-center">
                    <Navbar class="md:block hidden"/>
                    <Switchlang class="md:hidden block h-[25px] mt-2 mr-4"/>
                    <button class="md:hidden inline-block" @click="navOpen=!navOpen"><img class="block w-7 h-7 " src="../assets/images/hamburger.svg" alt="hamburger" width="50" height="50"></button>
                    <Navbar class="md:hidden block absolute top-0 right-28 z-50 text-end bg-neutral-50 p-1 py-2 pl-3 rounded" v-show="navOpen"/>
                </div>
            </div>
        </Container>
    </header>
</template>

<script>
import Container from './Container.vue'
import Navbar from './Navbar.vue'
import Switchlang from './Switchlang.vue';
export default {
    name:"HeaderSection",
    components: {
    Container,
    Navbar,
    Switchlang
},
    data: ()=>( {
        navOpen: false,
    }),
}
</script>

<style scoped>

.logo:hover{
    transform: scale(1.2);
}
</style>


