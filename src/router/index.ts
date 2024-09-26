import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'app',
      component: () => import('@/layouts/app/AppLayout.vue'),
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('@/pages/dashboard/DashboardPage.vue'),
        },
        {
          path: '/portfolio',
          name: 'portfolio',
          component: () => import('@/pages/portfolio/PortfolioPage.vue'),
        },
        {
          path: '/reports',
          name: 'reports',
          component: () => import('@/pages/reports/ReportsPage.vue'),
        },
        {
          path: '/settings',
          name: 'settings',
          component: () => import('@/pages/settings/SettingsPage.vue'),
        },
        {
          path: '/help',
          name: 'help',
          component: () => import('@/pages/help/HelpPage.vue'),
        },
      ],
    },
  ],
})

export default router
