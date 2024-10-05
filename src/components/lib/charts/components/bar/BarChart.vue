<script setup lang="ts">
import { ref } from 'vue'
import VChart from 'vue-echarts'
import ChartWrapper from '../chart-wrapper/ChartWrapper.vue'
import type { BarChartProps } from './types'
import useBarChart from './useBarChart'

const {
  height = 320,
  hideLegend,
  hideXAxis,
  hideXAxisSplitLines,
  hideYAxis,
  hideYAxisSplitLines,
  isStacked,
  markLines,
  yMax,
  orientation = 'vertical',
  series,
  title,
  description,
} = defineProps<BarChartProps>()

const chartRef = ref<typeof VChart | null>(null)

const { barChartOptions } = useBarChart({
  hideLegend,
  hideXAxis,
  hideXAxisSplitLines,
  hideYAxis,
  hideYAxisSplitLines,
  isStacked,
  markLines,
  yMax,
  orientation,
  series,
  title,
  description,
})
</script>

<template>
  <ChartWrapper :chart-ref="chartRef">
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
