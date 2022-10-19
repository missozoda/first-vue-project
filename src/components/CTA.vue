<template>
    <section class="bg-neutral-50 py-14">
        <Container>
            <h3 class="font-bold text-neutral-800 text-4xl mx-auto mb-5">What can us do for you?</h3>
            <p class="text-xl w-2/5 text-neutral-800 mx-auto mb-9">We are ready to work on a project of any complexity, whether it's commercial or residential.</p>
            <div class="mx-80 text-start">
                <form @submit.prevent>
                    <div class="flex justify-betwen items-center mb-5">
                        <input v-model="name" class="block p-2.5 pr-16 mr-8 border border-neutral-100 rounded" type="text" name="name" placeholder="Your Name *" required >
                        <input v-model="email" class="block p-2.5 pr-16 mr-8 border border-neutral-100 rounded" type="email" name="email" placeholder="Email *" required>
                    </div>
                    <div class="flex justify-betwen items-center mb-5">
                        <input v-model="reason" class="block p-2.5 pr-16 mr-8 border border-neutral-100 rounded" type="text" name="reason" placeholder="Reason for Contacting *" required>
                        <input class="block p-2.5 pr-16 mr-8 border border-neutral-100 rounded" type="number" name="phone" placeholder="Phone">
                    </div>
                    <input class="block w-full mb-2 pb-32 p-2.5 pr-16 border border-neutral-100 rounded" type="text" name="massage" placeholder="Massage">
                    
                    <span class="text-neutral-500 text-base">* indicates a required field</span>
                    
                    <button @click="submitForm" class="block bg-[#2947A9] text-white rounded py-3 px-24 font-semibold text-lg mx-auto mt-7" type="submit"
                    >Submit</button>
                    <vue-basic-alert :duration="300" :closeIn="5000" ref="alert" />
                </form>
            </div>
        </Container>
    </section>
</template>

<script >
import useValidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import VueBasicAlert from 'vue-basic-alert';
import Container from './Container.vue';
export default {
    name: "CTA",
    components: {
        VueBasicAlert,
        Container,
    },
    data: () => ({
        v$: useValidate(),
        name: "",
        email: "",
        reason: "",
    }
    ),
    methods: {
    submitForm() {
        this.v$.$validate()
        if (!this.v$.$error) {
            this.$refs.alert.showAlert(
                'success',
                'Success',
                'Form successfully submitted.',
                'Success 200',
                'Form successfully submitted.'
            )
        } else {
            this.$refs.alert.showAlert(
                'error',
                'Failded',
                'Form failed validation.',
                'Failded 404',
                'Form failed validation.'
            )
        }
    },
    },
    validations() {
        return {
            name: { required },
            email: { required },
            reason: { required },
        }
    },
}
</script>

<style scoped>

</style>