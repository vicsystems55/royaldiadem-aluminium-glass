import { createRouter, createWebHistory } from 'vue-router';

// Import views from src/views/pages
import HomeView from '../views/pages/HomeView.vue';
import AboutView from '../views/pages/AboutView.vue';
import BlogView from '../views/pages/BlogView.vue';
import ContactView from '../views/pages/ContactView.vue';
import ServicesView from '../views/pages/ServicesView.vue';
// Add more views if you have them, like Training or Clinic

const routes = [
  {
    path: '/',
    component: HomeView,
    meta: { layout: 'MainLayout', pageTitle: 'Home' }
  },
  {
    path: '/about',
    component: AboutView,
    meta: { layout: 'MainLayout', pageTitle: 'About Us' }
  },
  {
    path: '/blog',
    component: BlogView,
    meta: { layout: 'MainLayout', pageTitle: 'Blog' }
  },
  {
    path: '/contact',
    component: ContactView,
    meta: { layout: 'MainLayout', pageTitle: 'Contact' }
  },
  {
    path: '/services',
    component: ServicesView,
    meta: { layout: 'MainLayout', pageTitle: 'Our Services' }
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Set dynamic document title
router.afterEach((to) => {
  const title = to.meta.pageTitle || 'My App';
  document.title = `${title} | Royal Diadem Autotracker`;
});

export default router;
