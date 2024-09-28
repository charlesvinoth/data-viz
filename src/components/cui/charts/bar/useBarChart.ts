import { useDark } from '@vueuse/core'
import { BarChart } from 'echarts/charts'
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import colors from 'tailwindcss/colors'
import { computed } from 'vue'
import type { CBarChartProps } from './types'

export default function useBarChart({
  isStacked = false,
  series,
  trigger = 'axis',
}: CBarChartProps) {
  use([CanvasRenderer, BarChart, TooltipComponent, LegendComponent, GridComponent])

  const isDark = useDark()

  const colorLight = ['#4a8bdb', '#3abdaf', '#f5ba42', '#f87d51', '#d870ad', '#b377d7', '#7277d5']
  const colorDark = ['#5c9ded', '#47cec0', '#fcce54', '#ef845d', '#ec87bf', '#cb93ec', '#9398ec']

  const legendData = computed(() => series.map(({ name }) => name))
  const xAxisData = computed(() => series[0].data.map(({ x }) => x))
  const yAxisData = computed(() =>
    series.map((item, index) => ({
      type: 'bar',
      name: item.name,
      data: item.data.map(({ y }) => y),
      color: [isDark.value ? colorDark[index] : colorLight[index]],
      stack: isStacked ? 'x' : undefined,
      emphasis: {
        focus: 'series',
      },
      silent: true,
    })),
  )

  const barChartOptions = computed(() => ({
    tooltip: {
      trigger,
      axisPointer: {
        lineStyle: {
          color: isDark.value ? colors.gray[500] : colors.gray[400],
        },
      },
      backgroundColor: isDark.value ? colors.gray[900] : colors.white,
      borderColor: isDark.value ? colors.gray[800] : colors.gray[200],
      padding: 8,
      textStyle: {
        color: isDark.value ? colors.gray[300] : colors.gray[700],
        fontFamily: 'Inter',
        lineHeight: 16,
      },
    },
    legend: {
      type: 'scroll',
      data: legendData.value,
      show: true,
      itemGap: 16,
      padding: 16,
      itemWidth: 24,
      itemHeight: 16,
      borderRadius: 8,
      textStyle: {
        color: isDark.value ? colors.gray[300] : colors.gray[700],
        fontWeight: 500,
        fontFamily: 'Inter',
        lineHeight: 16,
      },
      inactiveColor: isDark.value ? colors.gray[500] : colors.gray[400],
      pageIconColor: isDark.value ? colors.gray[400] : colors.gray[500],
      pageIconInactiveColor: isDark.value ? colors.gray[700] : colors.gray[300],
      pageTextStyle: {
        color: isDark.value ? colors.gray[300] : colors.gray[700],
        fontFamily: 'Inter',
        lineHeight: 16,
      },
    },
    grid: {
      show: true,
      borderColor: isDark.value ? colors.gray[800] : colors.gray[200],
    },
    xAxis: {
      axisLine: {
        lineStyle: {
          color: isDark.value ? colors.gray[800] : colors.gray[200],
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: isDark.value ? colors.gray[300] : colors.gray[700],
        fontFamily: 'Inter',
        lineHeight: 16,
      },
      splitLine: {
        lineStyle: {
          color: isDark.value ? colors.gray[800] : colors.gray[200],
        },
      },
      data: xAxisData.value,
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
      },
      axisLabel: {
        color: isDark.value ? colors.gray[300] : colors.gray[700],
        fontFamily: 'Inter',
        lineHeight: 16,
      },
      splitLine: {
        lineStyle: {
          color: isDark.value ? colors.gray[800] : colors.gray[200],
        },
      },
    },
    series: yAxisData.value,
  }))

  return { barChartOptions }
}
