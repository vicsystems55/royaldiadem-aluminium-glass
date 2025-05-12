<template>
  <header class="bg-gray-800 text-white p-4">
    <div class="flex justify-between items-center">
      <!-- Logo with Brand Name -->
      <div class="flex items-center space-x-2">
        <img src="/src/assets/logo.png" alt="Logo" class="h-19 w-auto" />
    
      </div>

      <!-- Hamburger Button (mobile only) -->
      <button @click="toggleMenu" class="md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Navigation -->
    <nav
      :class="[isMenuOpen ? 'block' : 'hidden', 'mt-4 md:mt-0 md:flex md:justify-end md:items-center gap-4']"
    >
      <router-link to="/" class="block md:inline-block px-2 py-1 hover:underline">Home</router-link>
      <router-link to="/about" class="block md:inline-block px-2 py-1 hover:underline">About</router-link>
      <router-link to="/services" class="block md:inline-block px-2 py-1 hover:underline">Services</router-link>
      <router-link to="/blog" class="block md:inline-block px-2 py-1 hover:underline">Blog</router-link>
      <router-link to="/contact" class="block md:inline-block px-2 py-1 hover:underline">Contact</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>
