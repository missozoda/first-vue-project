<template>
    <section class="hero relative h-[650px]">
        <swiper
        :options="swiperOptions"
    :modules="modules"
    navigation
    :slides-per-view="1"
    :space-between="50"
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    >
    <swiper-slide v-for="bgImage in bgImages" :key="bgImage.id">
        <div class="w-full h-[600px]">
            <img :src="bgImage.image" alt="image" class=" w-full h-[600px] object-cover" height="650">
        </div>
    </swiper-slide>
    </swiper>
    <h1 class="absolute z-20 left-14 top-60 lg:text-6xl text-2xl font-bold text-neutral-900 md:w-2/5 w-3/4">Building things is our mission.</h1>
    <div class="parallax-slider-navigation absolute z-20 bottom-[90px] right-0 left-0 md:left-auto bg-blue-600 text-center pt-5 text-white px-[90px]">
        <h4 class="md:text-sm text-md mb-3 font-bold">Feature Projects</h4>
        <p class="text-lg mb-2 md:w-56 w-full mx-auto">The National University of Architecture</p>
    </div>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination,  A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import image1 from '../assets/images/parkinstones-house.png';
import image2 from '../assets/images/wish-stone-building.png';
import image3 from '../assets/images/oregano-height.png';
import image4 from '../assets/images/wildstone-infra-hotel.png';

export default {
    name:"HeroSection",
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
        console.log(swiper);
        };
        const onSlideChange = () => {
        console.log('slide change');
        };
        return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, A11y],
        };
    },
    data: () =>({
        bgImages: [
            {
                id: 1,
                image: image1
            },
            {
                id: 2,
                image: image2
            },
            {
                id: 3,
                image: image3
            },
            {
                id: 3,
                image: image4
            },
        ]
    })
};
</script>

<style>
.swiper-button-next{
    z-index: 100 !important;
    width: 207px;
    height: 35px;
    top: 98% !important;
    right: 0 !important;
}
.swiper-button-prev{
    z-index: 100 !important;
    width: 207px;
    height: 35px;
    top: 98% !important;
    left: auto !important;
    right: 197px !important
}
@media only screen and (max-width: 767px) {
    .swiper-button-prev {
        width: 120px;
        left: 0 !important;
        right: auto !important
    }
    .swiper-button-next{
        width: 120px;
    }
}

.swiper-button-next:after, .swiper-rtl .swiper-button-prev:after {
    content: url("../assets/images/next.png") !important;
}
.swiper-button-prev:after, .swiper-rtl .swiper-button-next:after {
    content: url("../assets/images/back.png") !important;
}
</style>