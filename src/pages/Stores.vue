<template>
  <div class="bg-white">
    <!-- Hero section -->
    <div class="relative bg-pattern h-[60vh]">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1200"
          alt="Tiendas Downtown Center"
          class="w-full h-full object-cover opacity-95"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-[#1B3764]/70 to-[#2AB5A9]/70"></div>
      </div>
      <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
          <h1 
            class="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            data-aos="fade-up"
          >
            Tiendas
          </h1>
          <p 
            class="text-2xl text-white max-w-3xl mb-12 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Explora nuestra amplia variedad de tiendas, desde moda y accesorios hasta tecnología y servicios.
          </p>
        </div>
      </div>
    </div>

    <!-- Store sections -->
    <div v-for="(category, key) in stores.stores" :key="key" class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8" :class="{ 'mb-32': key === 'entertainment' }">
      <div class="mx-auto max-w-2xl lg:mx-0" data-aos="fade-up">
        <h2 class="text-3xl font-bold tracking-tight text-[#1B3764] sm:text-4xl">{{ category.title }}</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          {{ category.description }}
        </p>
      </div>
      <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <div 
          v-for="(store, index) in category.items" 
          :key="store.name"
          data-aos="fade-up" 
          :data-aos-delay="100 * (index + 1)"
          class="group hover:scale-105 transition-transform duration-300"
        >
          <img 
            :src="store.image" 
            :alt="store.name" 
            class="w-full h-48 object-cover rounded-lg mb-4 group-hover:opacity-90 transition-opacity duration-300" 
          />
          <dt class="font-montserrat text-lg text-[#1B3764] group-hover:text-[#2AB5A9] transition-colors duration-300">
            {{ store.name }}
            <span class="text-sm text-gray-500 ml-2">{{ store.floor }}</span>
          </dt>
          <dd class="mt-1 text-gray-600">{{ store.description }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import stores from '@/content/stores.json'

onMounted(() => {
  AOS.init({
    duration: 400,
    easing: 'ease-out',
    once: true,
    offset: 50,
    throttleDelay: 50
  })
})
</script> 