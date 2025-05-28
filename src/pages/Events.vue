<template>
  <div class="bg-white">
    <!-- Hero section -->
    <div class="relative bg-pattern h-[80vh]">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200"
          alt="Eventos Downtown Center"
          class="w-full h-full object-cover opacity-95"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-[#1B3764]/70 to-[#2AB5A9]/70"></div>
      </div>
      <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 flex items-center h-full">
        <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
          <h1 
            class="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            data-aos="fade-up"
          >
            Eventos
          </h1>
          <p 
            class="text-2xl text-white max-w-3xl mb-12 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Mantente al tanto de nuestros próximos eventos y actividades especiales.
          </p>
          <div 
            class="flex items-center gap-x-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <span class="text-white/90 text-lg">
              <span class="animate-pulse inline-block">⏳</span> En construcción
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import 'aos/dist/aos.css'
</script> 