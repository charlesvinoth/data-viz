<script setup lang="ts">
import { IconButton, Menu, MenuItem } from '@/components/lib'

interface ChartWrapperMenuProps {
  downloadChart(type: 'png' | 'jpg'): void
}

defineProps<ChartWrapperMenuProps>()
</script>

<template>
  <Menu is-dense>
    <template #trigger>
      <IconButton
        icon="material-symbols:download"
        variant="secondary"
        size="xs"
        class="md:hidden"
      />
      <IconButton
        icon="material-symbols:download"
        variant="secondary"
        class="hidden md:flex"
      />
    </template>

    <MenuItem
      value="pdf"
      label="PDF"
    />
    <MenuItem
      value="xlsx"
      label="XLSX"
    />

    <MenuItem
      value="png"
      label="PNG"
      @click="downloadChart('png')"
    />
    <MenuItem
      value="jpg"
      label="JPG"
      @click="downloadChart('jpg')"
    />
  </Menu>
</template>

<style scoped></style>
