<script setup lang="ts">
import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue'

interface Props {
  height?: string
}

const { height = 'auto' } = defineProps<Props>()
</script>

<template>
  <OverlayScrollbarsComponent
    defer
    :style="{ height }"
  >
    <slot />
  </OverlayScrollbarsComponent>
</template>

<style>
@import url('overlayscrollbars/overlayscrollbars.css');

.os-scrollbar-vertical {
  width: 4px !important;
  margin: 1px !important;
  padding: 0 !important;
}

.os-scrollbar-handle {
  background-color: theme(colors.gray.300) !important;

  &:hover {
    background-color: theme(colors.gray.400) !important;
  }
}

.dark .os-scrollbar-handle {
  background-color: theme(colors.gray.700) !important;

  &:hover {
    background-color: theme(colors.gray.600) !important;
  }
}
</style>
