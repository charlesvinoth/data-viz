<script setup lang="ts">
interface DrawerMenuLabelProps {
  label: string
  isActive: boolean
}

defineProps<DrawerMenuLabelProps>()
</script>

<template>
  <div
    class="font-medium"
    :class="
      isActive
        ? 'text-primary-600 dark:text-primary-400'
        : 'text-gray-600 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300'
    "
  >
    {{ label }}
  </div>
</template>

<style scoped></style>
