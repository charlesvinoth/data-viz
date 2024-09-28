import { useDark } from '@vueuse/core'
import { BarChart } from 'echarts/charts'
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import colors from 'tailwindcss/colors'
import { computed } from 'vue'
import type { CBarChartProps } from './types'

export default function useBarChart({ series }: CBarChartProps) {
  use([CanvasRenderer, BarChart, TooltipComponent, LegendComponent, GridComponent])

  const isDark = useDark()

  const legendData = computed(() => series.map(({ name }) => name))

  const xAxisData = computed(() => series[0].data.map(({ x }) => x))

  const yAxisData = computed(() =>
    series.map((item) => ({
      type: 'bar',
      name: item.name,
      data: item.data.map(({ y }) => y),
    })),
  )

  const barChartOptions = computed(() => ({
    tooltip: {
      // trigger: 'axis',
    },
    legend: {
      data: legendData.value,
      show: true,
      itemGap: 16,
      padding: 16,
      itemWidth: 24,
      itemHeight: 16,
      borderRadius: 8,
      textStyle: {
        color: isDark.value ? colors.gray[400] : colors.gray[600],
        fontWeight: 500,
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
        color: isDark.value ? colors.gray[400] : colors.gray[600],
        fontFamily: 'Inter',
        lineHeight: 16,
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
    series: yAxisData.value,
  }))

  return { barChartOptions }
}
