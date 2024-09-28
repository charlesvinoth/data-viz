<script setup lang="ts">
import VChart from 'vue-echarts'
import type { CBarChartProps } from './types'
import useBarChart from './useBarChart'

const props = defineProps<CBarChartProps>()

const { barChartOptions } = useBarChart(props)
</script>

<template>
  <VChart
    autoresize
    :option="barChartOptions"
    class="size-full"
  />
</template>

<style scoped></style>
