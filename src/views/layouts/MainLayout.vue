<template>
    <div>
      <Header />
      
      <main class="min-h-screen  py-1">
        <slot />
      </main>
      
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '../../components/Header.vue'
  import Footer from '../../components/Footer.vue'
  
  export default {
    name: 'MainLayout',
    components: {
      Header,
      Footer
    }
  }
  </script>
  