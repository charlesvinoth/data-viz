<script setup lang="ts">
import { Menu, type MenuOpenChangeDetails } from '@ark-ui/vue'
import { ref } from 'vue'

const isMenuOpen = ref(false)

const onOpenChange = (details: MenuOpenChangeDetails) => (isMenuOpen.value = details.open)
</script>

<template>
  <Menu.Root @open-change="onOpenChange">
    <Menu.Trigger class="outline-none">
      <slot name="trigger" />
    </Menu.Trigger>

    <Menu.Positioner>
      <Menu.Content
        v-if="isMenuOpen"
        v-motion-fade
        class="z-30 space-y-2 rounded-md bg-white p-2 shadow-sm outline-none ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800"
      >
        <slot />
      </Menu.Content>
    </Menu.Positioner>
  </Menu.Root>
</template>

<style scoped></style>
