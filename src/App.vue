<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileMenuOpen = ref(false)

const navigation = [
  { name: 'Tiendas', href: '/stores' },
  { name: 'Restaurantes', href: '/restaurants' },
  { name: 'Cine', href: '/cinema' },
  { name: 'Eventos', href: '/events' },
  { name: 'Promociones', href: '/promotions' },
  // { name: 'Ubicación', href: '/location' },
  { name: 'Contacto', href: '/contact' },
  { name: 'Nosotros', href: '/about' },
]

const socialLinks = [
  {
    name: 'Facebook',
    href: '#',
    icon: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
  },
  {
    name: 'Instagram',
    href: '#',
    icon: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
  },
  {
    name: 'Twitter',
    href: '#',
    icon: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84'
  }
]
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <template v-if="route.path !== '/admin'">
      <header class="bg-[#2AB5A9]">
        <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div class="flex h-16 items-center justify-between">
            <div class="flex items-center">
              <router-link to="/" class="flex">
                <span class="sr-only">Downtown Center</span>
                <img class="h-10 w-auto" src="@/assets/logo.png" alt="Downtown Center" />
              </router-link>
            </div>
            <div class="hidden md:flex md:items-center md:space-x-6">
              <router-link v-for="item in navigation" 
                :key="item.name"
                :to="item.href"
                class="font-montserrat text-sm uppercase tracking-widest text-white hover:text-[#1B3764] transition-colors duration-150"
                :class="{ 'border-b-2 border-[#1B3764] !text-[#1B3764]': $route.path === item.href }"
              >
                {{ item.name }}
              </router-link>
            </div>
            <!-- Mobile menu button -->
            <div class="flex md:hidden">
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/20"
                @click="mobileMenuOpen = !mobileMenuOpen"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
          <!-- Mobile menu -->
          <div v-show="mobileMenuOpen" class="md:hidden">
            <div class="space-y-1 px-2 pb-3 pt-2">
              <router-link
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                class="block rounded-md px-3 py-2 font-montserrat text-sm uppercase tracking-widest text-white hover:bg-white/20 transition-colors duration-150"
                :class="{ 'bg-white/20 !text-white': $route.path === item.href }"
                @click="mobileMenuOpen = false"
              >
                {{ item.name }}
              </router-link>
            </div>
          </div>
        </nav>
      </header>
    </template>

    <main>
      <router-view></router-view>
    </main>

    <!-- Footer -->
    <template v-if="route.path !== '/admin'">
      <footer class="relative bg-gradient-to-b from-[#2AB5A9] to-[#1B3764]">
        <div class="absolute inset-0 bg-[#2AB5A9] opacity-95"></div>
        
        <div class="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-white">
            <!-- Logo and description -->
            <div class="text-center md:text-left">
              <img class="h-14 w-auto mx-auto md:mx-0 filter brightness-0 invert" src="@/assets/logo.png" alt="Downtown Center" />
              <p class="mt-6 text-base text-white/90 leading-relaxed">
                El centro comercial más completo de Santo Domingo. Un espacio donde encontrarás todo lo que necesitas.
              </p>
              <div class="flex justify-center md:justify-start space-x-5 mt-8">
                <a v-for="item in socialLinks" 
                   :key="item.name" 
                   :href="item.href" 
                   class="text-white/90 hover:text-white transform hover:scale-110 transition-all duration-150">
                  <span class="sr-only">{{ item.name }}</span>
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path :d="item.icon" />
                  </svg>
                </a>
              </div>
            </div>

            <!-- Contact info -->
            <div class="text-center md:text-left">
              <h3 class="text-lg font-semibold uppercase tracking-wider mb-6">Contáctanos</h3>
              <div class="space-y-4">
                <a href="https://maps.google.com/?q=Downtown+Center+Santo+Domingo" target="_blank" 
                   class="group block p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <div class="flex items-center gap-3">
                    <svg class="w-5 h-5 text-white/80 group-hover:text-white flex-shrink-0 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div class="text-left text-white/90 group-hover:text-white">
                      <p class="font-medium">Av. Rómulo Betancourt 1890</p>
                      <p>Santo Domingo, República Dominicana</p>
                    </div>
                  </div>
                </a>

                <a href="tel:8095660207" 
                   class="group block p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <div class="flex items-center gap-3">
                    <svg class="w-5 h-5 text-white/80 group-hover:text-white flex-shrink-0 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span class="text-white/90 group-hover:text-white font-medium">(809) 566-0207</span>
                  </div>
                </a>

                <a href="mailto:info@downtowncenter.com.do" 
                   class="group block p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <div class="flex items-center gap-3">
                    <svg class="w-5 h-5 text-white/80 group-hover:text-white flex-shrink-0 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span class="text-white/90 group-hover:text-white font-medium">info@downtowncenter.com.do</span>
                  </div>
                </a>
              </div>
            </div>

            <!-- Hours -->
            <div class="text-center md:text-left">
              <div class="inline-block">
                <h3 class="text-lg font-semibold uppercase tracking-wider mb-6">Horario</h3>
                <div class="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                  <div class="space-y-4">
                    <div class="flex items-center gap-4">
                      <svg class="w-5 h-5 text-white/80 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p class="font-medium text-white/90">Lunes - Viernes</p>
                        <p class="text-white/80">9:00 AM - 9:00 PM</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-4">
                      <svg class="w-5 h-5 text-white/80 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p class="font-medium text-white/90">Sábados</p>
                        <p class="text-white/80">9:00 AM - 8:00 PM</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-4">
                      <svg class="w-5 h-5 text-white/80 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p class="font-medium text-white/90">Domingos</p>
                        <p class="text-white/80">10:00 AM - 7:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Copyright -->
          <div class="mt-12 pt-8 border-t border-white/20">
            <div class="flex flex-col md:flex-row justify-between items-center gap-4">
              <p class="text-sm text-white/80 hover:text-white transition-colors duration-150">
                &copy; {{ new Date().getFullYear() }} Downtown Center. Todos los derechos reservados.
              </p>
              <div class="flex space-x-6 text-sm text-white/80">
                <a href="#" class="hover:text-white transition-colors duration-150">Términos y Condiciones</a>
                <a href="#" class="hover:text-white transition-colors duration-150">Política de Privacidad</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </template>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

:root {
  --font-montserrat: 'Montserrat', sans-serif;
  
  /* Custom color variables */
  --dc-turquoise: #2AB5A9;
  --dc-navy: #1B3764;
  --dc-white: #FFFFFF;
  --dc-gray: #F5F5F5;
}

.font-montserrat {
  font-family: var(--font-montserrat);
}
</style>
