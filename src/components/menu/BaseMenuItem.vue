<script setup lang="ts">
import { Menu } from '@ark-ui/vue'
import { BaseIcon } from '@/components/base'

interface BaseMenuItemProps {
  label: string
  value: string
  icon?: string
  color?: 'default' | 'error'
}

const { label, value, icon, color = 'default' } = defineProps<BaseMenuItemProps>()
</script>

<template>
  <Menu.Item
    :value="value"
    class="flex cursor-pointer items-center gap-2 rounded-md p-2 font-medium outline-none transition-colors duration-200 ease-in-out hover:bg-gray-100 focus-visible:outline-primary-600 data-[highlighted]:bg-gray-100 dark:hover:bg-gray-800 dark:focus-visible:outline-primary-400 dark:data-[highlighted]:bg-gray-800"
    :class="
      color === 'error' ? 'text-error-600 dark:text-error-400' : 'text-gray-700 dark:text-gray-300'
    "
  >
    <BaseIcon v-if="icon" :name="icon" class="shrink-0" />
    {{ label }}
  </Menu.Item>
</template>

<style scoped></style>
