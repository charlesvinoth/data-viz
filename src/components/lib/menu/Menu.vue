<script setup lang="ts">
import { Menu, type MenuOpenChangeDetails } from '@ark-ui/vue'
import { ref } from 'vue'
import MenuContent from './MenuContent.vue'

const isMenuOpen = ref(false)

const onOpenChange = (details: MenuOpenChangeDetails) => (isMenuOpen.value = details.open)
</script>

<template>
  <Menu.Root @open-change="onOpenChange">
    <Menu.Trigger class="outline-none">
      <slot name="trigger" />
    </Menu.Trigger>

    <MenuContent v-if="isMenuOpen">
      <template #default>
        <slot />
      </template>
    </MenuContent>
  </Menu.Root>
</template>

<style scoped></style>
