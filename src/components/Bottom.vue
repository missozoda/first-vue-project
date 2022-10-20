<template>
    <section class="py-20">
        <Container class="md:grid md:grid-cols-2 md:gap-4">
            <div class="md:text-start text-center mb-10">
                <ul class="list-none">
                    <li class="text-xl text-[#2947A9] font-medium mb-8">Address: <span class="text-xl text-neutral-800"> 6391 Elgin St.Celina, Delaware 10299</span></li>
                    <li class="text-xl text-[#2947A9] font-medium mb-8">Phone:  <a class="text-xl text-neutral-800" href="tel:+84 1102 2703"> +84 1102 2703</a></li>
                    <li class="text-xl text-[#2947A9] font-medium mb-8">Email:  <a class="text-xl text-neutral-800" href="mailto:hello@thebox.com"> hello@thebox.com</a></li>
                </ul>
                <div class="flex justify-start align-baseline w-min mx-auto md:mx-0">
                    <img class="block logo" src="../assets/images/logo.svg" alt="logo" width="38" height="48">
                    <span class=" block text-blue-500 hover:text-blue-400 text-2xl font-bold mt-2 mx-3">TheBox</span>
                </div>
            </div>
            <div class="md:text-start text-center xl:pl-20 pl-0">
                <label class="font-bold text-[#2947A9] text-xl px-3" for="email">Newsletter: <br class="sm:hidden md:block">
                    <input class="py-2 px-3 mb-4 border-2 border-neutral-100 rounded bg-white mr-4 mt-5" type="email" id="email" name="email" placeholder="Your email here">
                    <button class="text-white font-bold border-2 bg-[#F9995D] py-2.5 px-5 rounded hover:bg-transparent hover:border-2 hover: border-[#F9995D] hover:text-[#F9995D]" type="submit">Subscribe</button>
                </label>
                <p class="text-xl font-bold text-[#2947A9] px-3 mt-10 mb-5">Social:</p>
                <div class="grid grid-cols-3 gap-3 md:w-44 w-3/5 mx-auto md:mx-0 px-3">
                    <img class="block" src="../assets/images/facebook.svg" alt="facebook" width="40" height="40">
                    <img class="block" src="../assets/images/linkedin.svg" alt="linkedin" width="40" height="40">
                    <img class="block" src="../assets/images/twitter.svg" alt="twitter" width="40" height="40">
                </div>
            </div>
        </Container>
    </section>
</template>

<script>
import Container from './Container.vue';
export default {
    name: "Bottom",
    components: {
        Container,

    }
}
</script>

<style scoped>

</style>