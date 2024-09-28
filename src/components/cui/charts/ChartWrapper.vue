<script setup lang="ts">
import { useDark } from '@vueuse/core'
import { BarChart, LineChart } from 'echarts/charts'
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import colors from 'tailwindcss/colors'
import { computed } from 'vue'
import VChart from 'vue-echarts'

const isDark = useDark()

use([CanvasRenderer, BarChart, LineChart, TooltipComponent, LegendComponent, GridComponent])

const option = computed(() => ({
  tooltip: {
    // trigger: 'axis',
  },
  legend: {
    data: ['2023', '2024'],
    show: true,
    itemGap: 16,
    padding: 16,
    // itemWidth: 16,
    // itemHeight: 16,
    // borderRadius: 8,
    textStyle: {
      color: isDark.value ? colors.gray[400] : colors.gray[600],
      fontWeight: 500,
      fontFamily: 'Inter',
      lineHeight: 16,
    },
  },
  grid: {
    show: false,
  },
  xAxis: {
    axisLine: {
      lineStyle: {
        color: isDark.value ? colors.gray[800] : colors.gray[200],
      },
    },
    axisTick: {
      show: false,
      alignWithLabel: true,
    },
    axisLabel: {
      color: isDark.value ? colors.gray[400] : colors.gray[600],
      fontFamily: 'Inter',
      lineHeight: 16,
    },

    data: ['Shirts', 'Cardigans', 'Chiffons', 'Pants', 'Heels', 'Socks'],
  },
  yAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: isDark.value ? colors.gray[800] : colors.gray[200],
      },
    },
    axisTick: {
      show: false,
      alignWithLabel: true,
    },
    axisLabel: {
      color: isDark.value ? colors.gray[400] : colors.gray[600],
      fontFamily: 'Inter',
      lineHeight: 16,
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: isDark.value ? colors.gray[800] : colors.gray[200],
      },
    },
  },
  series: [
    {
      name: '2023',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20],
      color: [colors.blue[400]],
    },
    {
      name: '2024',
      type: 'bar',
      data: [15, 25, 18, 5, 20, 30],
      color: [colors.emerald[400]],
    },
  ],
}))
</script>

<template>
  <VChart
    autoresize
    :option="option"
    class="size-full"
  />
</template>

<style scoped></style>
