<script setup lang="ts">
import { Menu } from '@ark-ui/vue'
import { CIcon } from '@/components/cui'
import { cn } from '@/utils/cn'

interface CMenuItemProps {
  label: string
  value: string
  icon?: string
  color?: 'default' | 'error'
}

const { label, value, icon, color = 'default' } = defineProps<CMenuItemProps>()

const classNames = {
  root: cn(
    'group flex cursor-pointer items-center gap-2 rounded-md p-2 font-medium outline-none transition-colors duration-200 ease-in-out hover:bg-gray-100 focus-visible:outline-primary-600 data-[highlighted]:bg-gray-100 dark:hover:bg-gray-800 dark:focus-visible:outline-primary-400 dark:data-[highlighted]:bg-gray-800',
  ),
  icon: cn('shrink-0 text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-400', {
    'text-error-600 group-hover:text-error-600 dark:text-error-400 dark:group-hover:text-error-400':
      color === 'error',
  }),
  label: cn(
    'text-gray-600 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300',
    {
      'text-error-600 group-hover:text-error-600 dark:text-error-400 dark:group-hover:text-error-400':
        color === 'error',
    },
  ),
}
</script>

<template>
  <Menu.Item :value="value" :class="classNames.root">
    <CIcon v-if="icon" :name="icon" :class="classNames.icon" />
    <div :class="classNames.label">{{ label }}</div>
  </Menu.Item>
</template>

<style scoped></style>
