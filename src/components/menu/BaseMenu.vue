<script setup lang="ts">
import { Menu } from '@ark-ui/vue'
</script>

<template>
  <Menu.Root>
    <Menu.Trigger class="outline-none">
      <slot name="trigger" />
    </Menu.Trigger>

    <Menu.Positioner>
      <Menu.Content
        class="space-y-2 rounded-md bg-white p-2 shadow-sm outline-none ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800"
      >
        <slot />
      </Menu.Content>
    </Menu.Positioner>
  </Menu.Root>
</template>

<style scoped></style>
