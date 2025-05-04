<template>
    <div>
      <!-- Hero Section -->
      <section class="bg-[#1c0e2b] text-white py-16 text-center">
        <h1 class="text-4xl font-bold">CONTACT US</h1>
      </section>
  
      <!-- Main Content -->
      <section class="py-16 px-4 md:px-20 grid md:grid-cols-2 gap-12 items-start bg-white">
        <!-- Google Map -->
        <div class="w-full h-96">
          <iframe
            src="https://www.google.com/maps?q=Abuja,+Nigeria&output=embed"
            class="w-full h-full border-0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
  
        <!-- Contact Info -->
        <div>
          <h2 class="text-2xl font-bold mb-4">Head Office</h2>
          <p class="text-gray-700 mb-6 leading-relaxed">
            Suit F13, Sabondele Shopping Complex<br />
            Plot 526 Obafemi Awolowo Way, Jabi-FCT, Abuja
          </p>
  
          <!-- Phone Info -->
          <div class="flex items-start mb-6 space-x-3">
            <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.06-.21 12.45 12.45 0 003.91.63 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.75a1 1 0 011 1 12.45 12.45 0 00.63 3.91 1 1 0 01-.21 1.06l-2.55 2.55z" />
            </svg>
            <div>
              <p class="text-gray-800 font-semibold">08055231278</p>
              <p class="text-gray-800 font-semibold">08058300113</p>
              <p class="text-sm text-gray-500">Available Monday to Friday, 9:00 to 20:00 Hrs.</p>
            </div>
          </div>
  
          <!-- Email Info -->
          <div class="flex items-start space-x-3">
            <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.01 4.56l10 7.44 10-7.44C21.95 4.22 22 4.11 22 4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1 0 .11.05.22.01.56zM2 6.32V20c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V6.32l-10 7.44L2 6.32z" />
            </svg>
            <div>
              <p class="text-gray-800 font-semibold">support@royaldiademgroup.com</p>
              <p class="text-sm text-gray-500">Emails are replied within 24 to 48 hours.</p>
            </div>
          </div>
        </div>
      </section>
  
   
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactPage'
  }
  </script>
  