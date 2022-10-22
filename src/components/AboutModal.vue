<template>
  <div class="modal fixed z-10 left-0 top-0 pt-[100px] w-full h-full truncate bg-white bg-[rgba(0,0,0,0.4)]">
    <div class="modal-content bg-indigo-200 p-[20px] pb-10 m-auto w-3/5 border border-indigo-500 rounded">
      <span class="close-btn float-right text-neutral-700 font-bold text-2xl hover:text-neutral-900 hover:cursor-pointer" @click="$emit('closeModal')">&times;</span>
      <h3 class="modal-heading text-4xl text-neutral-900 font-bold mb-5">{{about.title}}</h3>
      <p class="modal-text text-xl text-neutral-800 whitespace-normal mb-4">{{about.firstText}}</p>
      <p class="modal-text text-xl text-neutral-800 whitespace-normal">{{about.secondText}}</p>
    </div>
  </div>
</template>

<script>
export default{
  name:'AboutModal',
  props:['about'],
}

</script>

<style scoped>
</style>