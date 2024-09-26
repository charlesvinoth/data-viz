<script setup lang="ts">
import { BaseTooltip } from '@/components/base'
import DrawerMenuItem from './DrawerMenuItem.vue'
import DrawerMenuItemIcon from './DrawerMenuItemIcon.vue'
import DrawerMenuItemLabel from './DrawerMenuItemLabel.vue'

const menus = [
  {
    icon: 'material-symbols:dashboard-outline-rounded',
    activeIcon: 'material-symbols:dashboard-rounded',
    label: 'Dashboard',
    route: '/',
  },
  {
    icon: 'material-symbols:business-center-outline-rounded',
    activeIcon: 'material-symbols:business-center-rounded',
    label: 'Portfolio',
    route: '/portfolio',
  },
  {
    icon: 'material-symbols:pie-chart-outline',
    activeIcon: 'material-symbols:pie-chart',
    label: 'Reports',
    route: '/reports',
  },
  {
    icon: 'material-symbols:settings-outline-rounded',
    activeIcon: 'material-symbols:settings-rounded',
    label: 'Settings',
    route: '/settings',
  },
  {
    icon: 'material-symbols:help-outline-rounded',
    activeIcon: 'material-symbols:help-rounded',
    label: 'Help',
    route: '/help',
  },
]

interface DrawerMenuProps {
  isDrawerOpen?: boolean
}

const { isDrawerOpen = true } = defineProps<DrawerMenuProps>()
</script>

<template>
  <nav className="mt-4">
    <ul>
      <li v-for="menu in menus" :key="menu.label" class="mx-2.5 my-3">
        <DrawerMenuItem v-if="isDrawerOpen" :route="menu.route">
          <DrawerMenuItemIcon :icon="menu.icon" :isActive="$route.path === menu.route" />
          <DrawerMenuItemLabel :label="menu.label" :isActive="$route.path === menu.route" />
        </DrawerMenuItem>

        <BaseTooltip v-else :content="menu.label" position="right" class="block">
          <DrawerMenuItem :route="menu.route">
            <DrawerMenuItemIcon :icon="menu.icon" :isActive="$route.path === menu.route" />
          </DrawerMenuItem>
        </BaseTooltip>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
