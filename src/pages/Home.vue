<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <div class="relative bg-pattern h-screen">
      <div class="absolute inset-0">
        <img 
          :src="hero.image" 
          :alt="hero.imageAlt" 
          class="w-full h-full object-cover opacity-95"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-[#1B3764]/70 to-[#2AB5A9]/70"></div>
      </div>
      <div class="relative h-full flex items-center">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p 
            class="text-xl text-white/90 mb-4"
            data-aos="fade-up"
          >
            {{ hero.announcement }}
          </p>
          <h1 
            class="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight max-w-4xl"
            data-aos="fade-up"
          >
            {{ hero.title }}
          </h1>
          <p 
            class="text-2xl text-white max-w-3xl mb-12 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {{ hero.description }}
          </p>
          <div 
            class="flex flex-wrap gap-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a :href="hero.primaryAction.href" class="btn btn-primary hover-lift">
              {{ hero.primaryAction.text }}
            </a>
            <a :href="hero.secondaryAction.href" class="btn btn-navy hover-lift">
              {{ hero.secondaryAction.text }}
            </a>
          </div>
        </div>
      </div>
      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>

    <!-- Features Section -->
    <div class="py-32 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="section-header" data-aos="fade-up">
          <h2 class="section-title">Nuestras Atracciones</h2>
          <p class="section-subtitle">
            Todo lo que buscas en un solo lugar. Descubre por qué somos el destino favorito de Santo Domingo.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <div 
            v-for="feature in features" 
            :key="feature.name"
            class="card shape-ticket group"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="relative h-56 w-full overflow-hidden">
              <img 
                :src="feature.image" 
                :alt="feature.name"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#1B3764]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="p-8">
              <h3 class="text-2xl font-bold text-[#1B3764] mb-4">
                {{ feature.name }}
              </h3>
              <p class="text-lg text-[#4A5568]">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-[#2AB5A9]">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 
            class="text-3xl font-bold text-white mb-4"
            data-aos="fade-up"
          >
            ¿Listo para visitarnos?
          </h2>
          <p 
            class="text-lg text-white/90 mb-8 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Ven y descubre por qué somos el centro comercial preferido de Santo Domingo.
          </p>
          <a 
            href="/location" 
            class="btn btn-navy bg-white text-[#2AB5A9] hover:bg-[#1B3764] hover:text-white"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Cómo Llegar
          </a>
        </div>
      </div>
    </div>

    <!-- Promotions Section -->
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Últimas Promociones</h2>
          <p class="mt-2 text-lg leading-8 text-gray-600">
            Descubre las mejores ofertas y descuentos de nuestras tiendas
          </p>
        </div>
        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article v-for="(promotion, index) in promotions" 
            :key="promotion.id" 
            class="flex flex-col items-start"
            :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
            :data-aos-delay="index * 100"
          >
            <div class="relative w-full overflow-hidden rounded-2xl">
              <img
                :src="promotion.image"
                :alt="promotion.title"
                class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] transition-all duration-500 hover:scale-110"
              />
              <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div class="max-w-xl">
              <div class="mt-8 flex items-center gap-x-4 text-xs">
                <time :datetime="promotion.datetime" class="text-gray-500">{{ promotion.date }}</time>
                <span
                  class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {{ promotion.store }}
                </span>
              </div>
              <div class="group relative">
                <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a :href="promotion.href">
                    <span class="absolute inset-0" />
                    {{ promotion.title }}
                  </a>
                </h3>
                <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ promotion.description }}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>

    <!-- Events Section -->
    <div class="bg-gray-50 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Próximos Eventos</h2>
          <p class="mt-2 text-lg leading-8 text-gray-600">
            No te pierdas nuestros emocionantes eventos y actividades
          </p>
        </div>
        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <article v-for="(event, index) in events" 
            :key="event.id" 
            class="flex flex-col items-start"
            :data-aos="index === 0 ? 'fade-right' : 'fade-left'"
          >
            <div class="relative w-full overflow-hidden rounded-2xl">
              <img
                :src="event.image"
                :alt="event.title"
                class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] transition-all duration-500 hover:scale-110"
              />
              <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div class="max-w-xl">
              <div class="mt-8 flex items-center gap-x-4 text-xs">
                <time :datetime="event.datetime" class="text-gray-500">{{ event.date }}</time>
                <span
                  class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {{ event.category }}
                </span>
              </div>
              <div class="group relative">
                <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a :href="event.href">
                    <span class="absolute inset-0" />
                    {{ event.title }}
                  </a>
                </h3>
                <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ event.description }}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>

    <!-- About Section -->
    <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src="https://downtowncenter.com.do/wp-content/uploads/2023/12/downtown-interior.jpg"
        alt="Interior de Downtown Center"
        class="absolute inset-0 -z-10 h-full w-full object-cover opacity-20 transition-all duration-700 hover:opacity-30"
      />
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0" data-aos="fade-up">
          <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Sobre Downtown Center</h2>
          <p class="mt-6 text-lg leading-8 text-gray-300">
            {{ about.description }}
          </p>
          <div class="mt-10 flex items-center gap-x-6">
            <a
              href="/about"
              class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300 hover:scale-105"
            >
              Conocer más
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import homeData from '../content/home.json'

const { hero, promotions, events, stores, about, features } = homeData
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

/* Hover effects */
.hover-scale {
  transition: transform 0.3s ease-in-out;
}

.hover-scale:hover {
  transform: scale(1.05);
}

/* Custom transitions */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style> 