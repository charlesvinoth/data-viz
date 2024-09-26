<script setup lang="ts">
interface DrawerMenuItemProps {
  route: string
}

defineProps<DrawerMenuItemProps>()
</script>

<template>
  <RouterLink
    :to="route"
    class="group flex items-center gap-2 rounded-md p-2 outline-none transition-colors duration-200 ease-in-out hover:bg-gray-100 focus-visible:outline-primary-600 dark:hover:bg-gray-800 dark:focus-visible:outline-primary-400"
    :class="{ 'bg-gray-100 dark:bg-gray-800': $route.path === route }"
  >
    <slot />
  </RouterLink>
</template>

<style scoped></style>
