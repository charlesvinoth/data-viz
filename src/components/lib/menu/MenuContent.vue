<script setup lang="ts">
import { Menu } from '@ark-ui/vue'

interface Props {
  isDense?: boolean
}

const { isDense = false } = defineProps<Props>()
</script>

<template>
  <Menu.Positioner>
    <Menu.Content
      v-motion-fade
      class="z-30 min-w-24 rounded-md bg-white p-2 shadow-sm outline-none ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700"
      :class="isDense ? 'space-y-1' : 'space-y-2'"
    >
      <slot />
    </Menu.Content>
  </Menu.Positioner>
</template>

<style scoped></style>
