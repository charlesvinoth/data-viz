<script setup lang="ts">
import { ScrollArea, Tooltip } from '@/components/lib'
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
  <ScrollArea height="calc(100vh - 72px)">
    <nav class="h-full pb-4">
      <ul class="flex h-full flex-col gap-y-3">
        <li
          v-for="menu in menus"
          :key="menu.label"
          class="mx-2.5"
        >
          <DrawerMenuItem
            v-if="isDrawerOpen"
            :route="menu.route"
          >
            <DrawerMenuItemIcon
              :icon="$route.path === menu.route ? menu.activeIcon : menu.icon"
              :is-active="$route.path === menu.route"
            />
            <DrawerMenuItemLabel
              v-motion-fade
              :label="menu.label"
              :is-active="$route.path === menu.route"
            />
          </DrawerMenuItem>

          <Tooltip
            v-else
            :content="menu.label"
            position="right"
          >
            <DrawerMenuItem :route="menu.route">
              <DrawerMenuItemIcon
                :icon="$route.path === menu.route ? menu.activeIcon : menu.icon"
                :is-active="$route.path === menu.route"
              />
            </DrawerMenuItem>
          </Tooltip>
        </li>

        <div class="min-h-10 flex-1" />

        <li class="mx-2.5">
          <DrawerMenuItem
            v-if="isDrawerOpen"
            route="/login"
          >
            <DrawerMenuItemIcon
              icon="material-symbols:logout-rounded"
              color="error"
            />
            <DrawerMenuItemLabel
              v-motion-fade
              label="Log Out"
              color="error"
            />
          </DrawerMenuItem>

          <Tooltip
            v-else
            content="Log Out"
            position="right"
          >
            <DrawerMenuItem route="/login">
              <DrawerMenuItemIcon
                icon="material-symbols:logout-rounded"
                color="error"
              />
            </DrawerMenuItem>
          </Tooltip>
        </li>
      </ul>
    </nav>
  </ScrollArea>
</template>

<style scoped></style>
