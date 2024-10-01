<script setup lang="ts">
import { ref } from 'vue'
import VChart from 'vue-echarts'
import { ChartWrapper } from '..'
import type { BarChartProps } from './types'
import useBarChart from './useBarChart'

const {
  hideWrapper = false,
  hideHeader = false,
  title,
  description,
  height = 256,
  isStacked = false,
  markLines,
  maxValue,
  orientation = 'vertical',
  series,
  showLegend = false,
  showXAxis = true,
  showXAxisSplitLines = false,
  showYAxis = true,
  showYAxisSplitLines = false,
  trigger = 'item',
} = defineProps<BarChartProps>()

const chartRef = ref<typeof VChart | null>(null)

const { barChartOptions } = useBarChart({
  isStacked,
  markLines,
  maxValue,
  orientation,
  series,
  showLegend,
  showXAxis,
  showXAxisSplitLines,
  showYAxis,
  showYAxisSplitLines,
  trigger,
})
</script>

<template>
  <ChartWrapper
    :chart-ref="chartRef"
    :hide-wrapper="hideWrapper"
    :hide-header="hideHeader"
    :title="title"
    :description="description"
  >
    <VChart
      ref="chartRef"
      autoresize
      :option="barChartOptions"
      class="w-full"
      :style="{ height: `${height}px` }"
    />
  </ChartWrapper>
</template>

<style scoped></style>
