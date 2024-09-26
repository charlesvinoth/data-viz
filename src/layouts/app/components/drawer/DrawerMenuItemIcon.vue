<script setup lang="ts">
import { BaseIcon } from '@/components/base'

interface DrawerMenuIconProps {
  icon: string
  isActive: boolean
}

defineProps<DrawerMenuIconProps>()
</script>

<template>
  <BaseIcon
    :name="icon"
    class="shrink-0"
    :class="
      isActive
        ? 'text-primary-600 dark:text-primary-400'
        : 'text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-400'
    "
  />
</template>

<style scoped></style>
