<script setup lang="ts">
import { Menu } from '@ark-ui/vue'

interface MenuGroupProps {
  label: string
}

defineProps<MenuGroupProps>()
</script>

<template>
  <Menu.ItemGroup>
    <Menu.ItemGroupLabel class="my-2 text-xs font-medium text-gray-500">
      {{ label }}
    </Menu.ItemGroupLabel>
    <slot />
  </Menu.ItemGroup>
</template>

<style scoped></style>
