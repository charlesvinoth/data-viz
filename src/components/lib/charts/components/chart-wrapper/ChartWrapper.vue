<script setup lang="ts">
import { useFullscreen } from '@vueuse/core'
import { useDark } from '@vueuse/core'
import { ref } from 'vue'
import { IconButton } from '@/components/lib'
import downloadChartImage from '@/components/lib/charts/utils/downloadChartImage'
import ChartExport from './ChartExport.vue'
import type { ChartWrapperProps } from './types'

const { chartRef } = defineProps<ChartWrapperProps>()
const chartWrapperRef = ref<HTMLElement | null>(null)

const isDark = useDark()
const { isFullscreen, toggle } = useFullscreen(chartWrapperRef)

const downloadChart = (type: 'png' | 'jpg') => downloadChartImage(chartRef, type, isDark.value)
</script>

<template>
  <div
    ref="chartWrapperRef"
    class="relative bg-white p-2 dark:bg-gray-900"
    :class="isFullscreen ? 'rounded-none' : 'rounded-md'"
  >
    <div class="absolute right-1.5 top-1.5 z-10 flex items-center gap-1 md:right-4 md:top-4">
      <IconButton
        :icon="isFullscreen ? 'ic:round-fullscreen-exit' : 'ic:round-fullscreen'"
        variant="secondary"
        size="xs"
        class="md:hidden"
        @click="toggle"
      />
      <IconButton
        :icon="isFullscreen ? 'ic:round-fullscreen-exit' : 'ic:round-fullscreen'"
        variant="secondary"
        class="hidden md:flex"
        @click="toggle"
      />

      <ChartExport :download-chart="downloadChart" />
    </div>

    <slot />
  </div>
</template>

<style scoped></style>
