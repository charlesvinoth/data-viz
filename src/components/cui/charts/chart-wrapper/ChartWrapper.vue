<script setup lang="ts">
import { useFullscreen } from '@vueuse/core'
import { ref } from 'vue'
import { IconButton } from '@/components/cui'
import { cn } from '@/utils/cn'
import downloadChartAsImage from '@/utils/downloadChartAsImage'
import ChartWrapperMenu from './ChartWrapperMenu.vue'
import type { ChartWrapperProps } from './types'

const { chartRef, hideWrapper, hideHeader, title, description } = defineProps<ChartWrapperProps>()

const chartWrapperRef = ref<HTMLElement | null>(null)

const { isFullscreen, toggle } = useFullscreen(chartWrapperRef)

const classNames = {
  root: cn({
    'rounded-md bg-white p-4 dark:bg-gray-900': !hideWrapper,
  }),
  header: 'mb-4 flex items-center justify-between gap-2 px-2',
  title: 'font-poppins text-base font-semibold text-gray-700 dark:text-gray-300',
  description: 'mt-0.5 text-xs text-gray-600 dark:text-gray-400',
}

function downloadChart(type: 'png' | 'jpg') {
  downloadChartAsImage(chartRef, type)
}
</script>

<template>
  <div
    ref="chartWrapperRef"
    :class="classNames.root"
  >
    <div
      v-if="!hideHeader"
      :class="classNames.header"
    >
      <div class="flex-1">
        <h1
          v-if="title"
          :class="classNames.title"
        >
          {{ title }}
        </h1>
        <p
          v-if="description"
          :class="classNames.description"
        >
          {{ description }}
        </p>
      </div>

      <IconButton
        :icon="isFullscreen ? 'material-symbols:fullscreen-exit' : 'material-symbols:fullscreen'"
        variant="secondary"
        @click="toggle"
      />

      <ChartWrapperMenu :download-chart="downloadChart" />
    </div>

    <slot />
  </div>
</template>

<style scoped></style>
