<script setup lang="ts">
import { CTooltip } from '@/components/cui'
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
    <ul class="flex flex-col gap-y-3" :style="{ height: 'calc(100vh - 80px)' }">
      <li v-for="menu in menus" :key="menu.label" class="mx-2.5">
        <DrawerMenuItem v-if="isDrawerOpen" :route="menu.route">
          <DrawerMenuItemIcon
            :icon="$route.path === menu.route ? menu.activeIcon : menu.icon"
            :isActive="$route.path === menu.route"
          />
          <DrawerMenuItemLabel
            v-motion-fade
            :label="menu.label"
            :isActive="$route.path === menu.route"
          />
        </DrawerMenuItem>

        <CTooltip v-else :content="menu.label" position="right">
          <DrawerMenuItem :route="menu.route">
            <DrawerMenuItemIcon
              :icon="$route.path === menu.route ? menu.activeIcon : menu.icon"
              :isActive="$route.path === menu.route"
            />
          </DrawerMenuItem>
        </CTooltip>
      </li>

      <div class="flex-1" />

      <li class="mx-2.5">
        <DrawerMenuItem v-if="isDrawerOpen" route="/login">
          <DrawerMenuItemIcon icon="material-symbols:logout-rounded" color="error" />
          <DrawerMenuItemLabel v-motion-fade label="Log Out" color="error" />
        </DrawerMenuItem>

        <CTooltip v-else content="Log Out" position="right">
          <DrawerMenuItem route="/login">
            <DrawerMenuItemIcon icon="material-symbols:logout-rounded" color="error" />
          </DrawerMenuItem>
        </CTooltip>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
