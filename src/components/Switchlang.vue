<template>
  <div class="locale-changer flex fit-cover h-[25px]">
    <img class="w-[25px] h-[25px] block rounded" :src="lang" alt="lang">
    <select class="rounded focus:outline-none text-xl" v-model="$i18n.locale" @change="switchlang($i18n.locale)">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale"> {{ locale }} 
      </option>
    </select>
  </div>
</template>

<script>
  import en from '../assets/images/en.png'
  import uz from '../assets/images/uz.png'
  const defFlag = localStorage.getItem('flag')

  export default {
    name: 'Switchlang',
    data:()=>({
      lang: defFlag || en 
    }),
    methods:{
      switchlang(locale){
        if(locale == 'en'){
          this.lang=en;
          localStorage.setItem('flag', en)
          console.log(locale);
        }
        else{
          console.log(locale);
          localStorage.setItem('flag', uz)
          this.lang=uz
        }
        localStorage.setItem('lang', locale)
      }
      
    }
  }
</script>