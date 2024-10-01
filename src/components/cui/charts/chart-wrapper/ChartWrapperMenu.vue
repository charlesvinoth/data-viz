<script setup lang="ts">
import { IconButton, Menu, MenuItem, MenuNested } from '@/components/cui'

interface ChartWrapperMenuProps {
  downloadChart(type: 'png' | 'jpg'): void
}

defineProps<ChartWrapperMenuProps>()
</script>

<template>
  <Menu>
    <template #trigger>
      <IconButton
        icon="material-symbols:more-vert"
        variant="secondary"
      />
    </template>

    <MenuItem
      value="viewData"
      label="View Data"
    />

    <!-- Export Data -->

    <MenuNested
      label="Export Data"
      value="exportData"
    >
      <MenuItem
        value="xlsx"
        label="XLSX"
      />
      <MenuItem
        value="pdf"
        label="PDF"
      />
    </MenuNested>

    <!-- Export Chart -->

    <MenuNested
      value="exportChart"
      label="Export Chart"
    >
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
    </MenuNested>

    <!-- ... -->
  </Menu>
</template>

<style scoped></style>
