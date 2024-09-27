<script setup lang="ts">
interface DrawerMenuLabelProps {
  label: string
  isActive?: boolean
  color?: 'default' | 'error'
}

defineProps<DrawerMenuLabelProps>()
</script>

<template>
  <div
    class="whitespace-nowrap font-medium"
    :class="
      color === 'error'
        ? 'text-error-600 dark:text-error-400'
        : isActive
          ? 'text-primary-600 dark:text-primary-400'
          : 'text-gray-600 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300'
    "
  >
    {{ label }}
  </div>
</template>

<style scoped></style>
