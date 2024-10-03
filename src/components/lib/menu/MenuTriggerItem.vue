<script setup lang="ts">
import { Menu } from '@ark-ui/vue'
import { Icon } from '@/components/lib'

interface MenuTriggerItemProps {
  icon?: string
  label: string
  value: string
}

defineProps<MenuTriggerItemProps>()

const classNames = {
  root: 'group flex cursor-pointer items-center gap-2 rounded-md p-2 font-medium outline-none transition-colors duration-200 ease-in-out hover:bg-gray-100 focus-visible:outline-primary-600 data-[highlighted]:bg-gray-100 dark:hover:bg-gray-800 dark:focus-visible:outline-primary-400 dark:data-[highlighted]:bg-gray-700',
  icon: 'shrink-0 text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300',
  label:
    'flex-1 text-gray-600 group-hover:text-gray-700 dark:text-gray-300 dark:group-hover:text-gray-200',
}
</script>

<template>
  <Menu.TriggerItem
    :value="value"
    :class="classNames.root"
  >
    <Icon
      v-if="icon"
      :name="icon"
      :class="classNames.icon"
    />
    <div :class="classNames.label">{{ label }}</div>
    <Icon
      name="material-symbols:arrow-right"
      :class="classNames.icon"
    />
  </Menu.TriggerItem>
</template>

<style scoped></style>
