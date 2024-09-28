<script setup lang="ts">
import DrawerLogo from './DrawerLogo.vue'
import DrawerMenu from './DrawerMenu.vue'

const isDrawerOpen = defineModel<boolean>({ required: true })
</script>

<template>
  <div
    class="fixed left-0 top-0 hidden h-screen bg-white transition-[width] duration-200 dark:bg-gray-900 xl:block"
    :class="isDrawerOpen ? 'w-56' : 'w-14'"
  >
    <DrawerLogo :is-drawer-open="isDrawerOpen" />
    <DrawerMenu :is-drawer-open="isDrawerOpen" />
  </div>
</template>

<style scoped></style>
