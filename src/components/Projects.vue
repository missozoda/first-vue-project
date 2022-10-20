<template>
    <section class="md:text-start text-center mb-32">
        <Container>
            <h3 class="font-bold text-neutral-800 text-4xl mb-10">Projects</h3>
            <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                <ul class="list-none xl:col-span-1 md:col-span-2 m-0 p-0 flex xl:flex-col flex-row justify-between xl:justify-start">
                    <li class="md:text-2xl text-lg font-bold text-[#2947A9] xl:border-l-2 border-b-2 xl:border-b-0 border-[#2947A9] px-4 mb-4 ">All</li>
                    <li class="px-4 text-neutral-200 md:text-2xl text-lg font-medium mb-4 hover:text-neutral-500">Commercial</li>
                    <li class="px-4 text-neutral-200 md:text-2xl text-lg font-medium mb-4 hover:text-neutral-500">Residential</li>
                    <li class="px-4 text-neutral-200 md:text-2xl text-lg font-medium mb-4 hover:text-neutral-500">Other</li>
                </ul>
                <div class="text-white text-start flex flex-col">
                    <div class="bg-[#2947A9] inline-block mb-8">
                        <img class="block w-full" src="../assets/images/wildstone-infra-hotel.png" alt="Wildstone Infra Hotel" width="384" height="247">
                        <h5 class="font-bold text-xl my-3 ml-3">Wildstone Infra Hotel</h5>
                        <p class="text-lg mb-4  ml-3">2715 Ash Dr. San Jose, South Dakota</p>
                    </div>
                    <div class="bg-[#2947A9] inline-block mb-8">
                        <img class="block w-full" src="../assets/images/parkinstones-house.png" alt="Mr. Parkinston's House" width="384" height="247">
                        <h5 class="font-bold text-xl my-3  ml-3">Mr. Parkinston's House</h5>
                        <p class="text-lg mb-4  ml-3">3517 W. Gray St. Utica, Pennsylvania</p>
                    </div>
                    <button class="bg-neutral-800 text-white py-4 px-28 hidden md:block">⬅ Back</button>
                </div>
                <div class="text-white text-end flex flex-col">
                    <div class="bg-[#2947A9] inline-block mb-8 text-start">
                        <img class="block w-full" src="../assets/images/wish-stone-building.png" alt="Wish Stone Building" width="384" height="247">
                        <h5 class="font-bold text-xl my-3  ml-3">Wish Stone Building</h5>
                        <p class="text-lg mb-4  ml-3">2972 Westheimer Rd. Santa Ana, Illinois </p>
                    </div>
                    <div class="bg-[#2947A9] inline-block mb-8 text-start">
                        <img class="block w-full" src="../assets/images/oregano-height.png" alt="Oregano Height" width="384" height="247">
                        <h5 class="font-bold text-xl my-3  ml-3">Oregano Height</h5>
                        <p class="text-lg mb-4 ml-3"> 2464 Royal Ln. Mesa, New Jersey </p>
                    </div>
                    <button class="bg-neutral-800 text-white py-4 px-28 hidden md:block">Next ➡</button>
                </div>
                <div class="flex justify-between md:hidden">
                    <button class="block bg-neutral-800 text-white py-2 sm:px-20 px-8">⬅ Back</button>
                    <button class="block bg-neutral-800 text-white py-2 sm:px-20 px-8">Next ➡</button>
                </div>
            </div>
        </Container>
    </section>
</template>

<script>
    import Container from './Container.vue';
    export default {
        name: "Projects",
        components: {
            Container,
        }
    }
</script>

<style scoped>

</style>