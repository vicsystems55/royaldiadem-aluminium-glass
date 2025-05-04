<template>
    <div>
  
      <!-- Hero Section -->
      <section class="relative bg-cover bg-center h-64 md:h-80 text-white" style="background-image: url('https://via.placeholder.com/1600x600');">
        <div class="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div class="text-center px-4">
            <h1 class="text-4xl md:text-5xl font-bold">Our Blog</h1>
            <p class="mt-2 text-lg">Updates, stories, and insights from Royal Diadem</p>
          </div>
        </div>
      </section>
  
      <!-- Blog Content -->
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="post in posts" :key="post.id" class="bg-white shadow-md rounded-lg overflow-hidden">
            <img :src="post.image" alt="Post image" class="w-full h-48 object-cover">
            <div class="p-4">
              <h2 class="text-xl font-semibold">{{ post.title }}</h2>
              <p class="text-gray-600 mt-2">{{ post.excerpt }}</p>
              <router-link :to="`/blog/${post.slug}`" class="text-blue-600 hover:underline mt-3 inline-block">
                Read More →
              </router-link>
            </div>
          </div>
        </div>
  
        <!-- Pagination -->
        <div class="mt-10 flex justify-center">
          <button class="px-4 py-2 border rounded-l bg-white hover:bg-gray-100">Previous</button>
          <button class="px-4 py-2 border-t border-b bg-white">1</button>
          <button class="px-4 py-2 border rounded-r bg-white hover:bg-gray-100">Next</button>
        </div>
      </main>
  
  
    </div>
  </template>
  
  <script>
  
  
  export default {
    name: 'Blog',
    components: {
  
    },
    data() {
      return {
        posts: [
          {
            id: 1,
            title: 'Welcome to Our New Site',
            excerpt: 'We’re excited to launch our new online presence...',
            slug: 'welcome-to-our-new-site',
            image: 'https://via.placeholder.com/600x400'
          },
          {
            id: 2,
            title: 'Upcoming Event in Abuja',
            excerpt: 'Join us for our training and relationship seminar...',
            slug: 'upcoming-event-abuja',
            image: 'https://via.placeholder.com/600x400'
          },
          {
            id: 3,
            title: 'New Clinic Services',
            excerpt: 'We are expanding our clinic with more services...',
            slug: 'new-clinic-services',
            image: 'https://via.placeholder.com/600x400'
          },
          {
            id: 4,
            title: 'Aluminium Business Growth',
            excerpt: 'Our aluminium and glass enterprise is booming...',
            slug: 'aluminium-business-growth',
            image: 'https://via.placeholder.com/600x400'
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  /* You can add hover effects or transitions if needed */
  </style>
  