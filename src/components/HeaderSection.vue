<template>
    <header class="mt-0 py-2 pb-3">
        <Container>
            <div class="navbar flex justify-between">
                <div class="flex justify-between align-baseline">
                    <img class="block logo" src="../assets/images/logo.svg" alt="logo" width="38" height="47.5">
                    <span class=" block text-blue-500 hover:text-blue-400 text-2xl font-bold mt-2 mx-3">TheBox</span>
                </div>
                <ul class="list-none flex justify-between gap-5 mt-2">
                    <li class="nav-list mx-4 text-xl"><a class="nav-link text-stone-800 hover:text-red-500" href="#">Home</a></li>
                    <li class="nav-list mx-4 text-xl"><a class="nav-link text-stone-800 hover:text-red-500" href="#"> About Us</a></li>
                    <li class="nav-list mx-4 text-xl"><a class="nav-link text-stone-800 hover:text-red-500" href="#"> Projects</a></li>
                    <li class="nav-list mx-4 text-xl"><a class="nav-link text-stone-800 hover:text-red-500" href="#"> Contact Us</a></li>
                    <li class="nav-list mx-4 text-xl"><a class="nav-link text-stone-800 hover:text-red-500" href="#"> Sevices</a></li>
                </ul>
            </div>
        </Container>
    </header>
</template>

<script>
import Container from './Container.vue'
export default {
    name:"HeaderSection",
    components: {
    Container,
}
}
</script>

<style scoped>

.logo:hover{
    transform: scale(1.2);
}
</style>


