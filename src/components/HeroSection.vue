<template>
    <section class="hero relative py-60">
        <Container>
            <h1 class="text-6xl font-bold text-neutral-300 w-2/5">Building things is our mission.</h1>

            <div class="absolute bottom-0 right-0 bg-blue-600 text-center pt-5 text-white">
                <h4 class="text-sm mb-3 font-bold">Feature Projects</h4>
                <p class="text-lg mb-2 w-56 mx-auto">The National University of Architecture</p>
                <button class="w-40 border-r-2 bg-neutral-800 p-2 hover:bg-white hover:border-neutral-800 hover:text-neutral-800">← Back</button>
                <button class="w-40 bg-neutral-800 p-2 hover:bg-white hover:border-neutral-800 hover:text-neutral-800">Next →</button>
            </div>
        </Container>
    </section>
</template>

<script>
import Container from './Container.vue'
export default {
    name:"HeroSection",
    components: {
        Container,
    }
}
</script>

<style scoped>
.hero{
    background-image: url(../assets/images/ICA.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto;
}
</style>