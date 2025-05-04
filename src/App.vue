<template>
  <component :is="layoutComponent">
    <router-view />
  </component>
</template>

<script>
import MainLayout from './views/layouts/MainLayout.vue';
// You can import more layouts here if needed in the future

export default {
  computed: {
    layoutComponent() {
      const layout = this.$route.meta.layout || 'MainLayout';
      return {
        MainLayout,
        // Add others here as needed
      }[layout] || MainLayout; // fallback
    }
  }
};
</script>
