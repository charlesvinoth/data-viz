<script setup lang="ts">
import { Icon } from '@/components/cui'

interface DrawerMenuIconProps {
  color?: 'default' | 'error'
  icon: string
  isActive?: boolean
}

defineProps<DrawerMenuIconProps>()
</script>

<template>
  <Icon
    :name="icon"
    class="shrink-0"
    :class="
      color === 'error'
        ? 'text-error-600 dark:text-error-400'
        : isActive
          ? 'text-primary-600 dark:text-primary-400'
          : 'text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-400'
    "
  />
</template>

<style scoped></style>
