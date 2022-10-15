<template>
    <section class="bg-neutral-50 py-14">
        <Container>
            <h3 class="font-bold text-neutral-800 text-4xl mx-auto mb-5">What can us do for you?</h3>
            <p class="text-xl w-2/5 text-neutral-800 mx-auto mb-9">We are ready to work on a project of any complexity, whether it's commercial or residential.</p>
            <div class="mx-80 text-start">
                <div class="flex justify-betwen items-center mb-5">
                    <input class="block p-2.5 pr-16 mr-8 border border-neutral-100 rounded" type="text" name="name" placeholder="Your Name *" required>
                    <input class="block p-2.5 pr-16 mr-8 border border-neutral-100 rounded" type="email" name="email" placeholder="Email *" required>
                </div>
                <div class="flex justify-betwen items-center mb-5">
                    <input class="block p-2.5 pr-16 mr-8 border border-neutral-100 rounded" type="text" name="name" placeholder="Reason for Contacting *" required>
                    <input class="block p-2.5 pr-16 mr-8 border border-neutral-100 rounded" type="number" name="phone" placeholder="Phone">
                </div>
                <input class="block w-full mb-2 pb-32 p-2.5 pr-16 border border-neutral-100 rounded" type="text" name="massage" placeholder="Massage">
                <span class="text-neutral-500 text-base">* indicates a required field</span>
                <button class="block bg-[#2947A9] text-white rounded py-3 px-24 font-semibold text-lg mx-auto mt-7" type="submit">Submit</button>
            </div>
        </Container>
    </section>
</template>

<script >
import Container from './Container.vue';
export default {
    name: "CTA",
    components: {
        Container,
    }
}
</script>

<style scoped>

</style>