<script setup lang="ts">
import { Menu, type MenuOpenChangeDetails } from '@ark-ui/vue'
import { ref } from 'vue'
import MenuContent from './MenuContent.vue'
import MenuTriggerItem from './MenuTriggerItem.vue'

interface MenuNestedProps {
  icon?: string
  label: string
  value: string
  isDense?: boolean
}

defineProps<MenuNestedProps>()

const isMenuOpen = ref(false)

const onOpenChange = (details: MenuOpenChangeDetails) => (isMenuOpen.value = details.open)
</script>

<template>
  <Menu.Root @open-change="onOpenChange">
    <MenuTriggerItem
      :value="value"
      :icon="icon"
      :label="label"
    />

    <MenuContent
      v-if="isMenuOpen"
      :is-dense="isDense"
    >
      <template #default>
        <slot />
      </template>
    </MenuContent>
  </Menu.Root>
</template>

<style scoped></style>
