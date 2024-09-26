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
        class="space-y-2 rounded-md border border-gray-200 bg-white p-2 shadow-sm outline-none dark:border-gray-800 dark:bg-gray-900"
      >
        <slot />
      </Menu.Content>
    </Menu.Positioner>
  </Menu.Root>
</template>

<style scoped></style>
