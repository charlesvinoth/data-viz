import { useDark } from '@vueuse/core'
import { BarChart } from 'echarts/charts'
import {
  GridComponent,
  LegendComponent,
  MarkLineComponent,
  TooltipComponent,
} from 'echarts/components'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import colors from 'tailwindcss/colors'
import { computed } from 'vue'
import type { BarChartProps } from './types'

export default function useBarChart({
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
}: BarChartProps) {
  use([
    CanvasRenderer,
    BarChart,
    TooltipComponent,
    LegendComponent,
    GridComponent,
    MarkLineComponent,
  ])

  const isDark = useDark()

  const colorLight = ['#4a8bdb', '#3abdaf', '#f5ba42', '#f87d51', '#d870ad', '#b377d7', '#7277d5']
  const colorDark = ['#5c9ded', '#47cec0', '#fcce54', '#ef845d', '#ec87bf', '#cb93ec', '#9398ec']

  const getItemBorderRadius = computed(() => {
    return orientation === 'horizontal' ? [0, 4, 4, 0] : [4, 4, 0, 0]
  })

  const legendData = computed(() => series.map(({ name }) => name))
  const xAxisData = computed(() => series[0].data.map(({ x }) => x))
  const yAxisData = computed(() =>
    series.map((item, index) => ({
      type: 'bar',
      name: item.name,
      data: item.data.map(({ y }) => y),
      color: [isDark.value ? colorDark[index] : colorLight[index]],
      itemStyle: {
        borderRadius: isStacked
          ? index === series.length - 1
            ? getItemBorderRadius.value
            : 0
          : getItemBorderRadius.value,
      },
      stack: isStacked ? 'x' : undefined,
      emphasis: {
        focus: 'item',
      },
      markLine: markLines
        ? {
            symbol: [],
            lineStyle: {
              color: colors.gray[500],
            },
            label: {
              position: 'insideEndTop',
              color: colors.white,
              fontFamily: 'Inter',
              lineHeight: 16,
              fontSize: 12,
              fontWeight: 500,
              backgroundColor: colors.gray[500],
              borderRadius: [4, 4, 0, 0],
              padding: [2, 4, 0, 4],
              formatter: '{b}: {c}',
              distance: [0, 0],
            },
            data: markLines.map(({ name, value }) => ({
              name,
              xAxis: orientation === 'horizontal' ? value : undefined,
              yAxis: orientation === 'vertical' ? value : undefined,
            })),
            silent: true,
          }
        : undefined,
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
      textStyle: {
        color: isDark.value ? colors.gray[300] : colors.gray[700],
        fontFamily: 'Inter',
        lineHeight: 16,
      },
    },
    legend: {
      show: showLegend,
      type: 'scroll',
      data: legendData.value,
      itemGap: 16,
      padding: 8,
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
      show: false,
      top: showLegend ? 32 : showYAxis ? 16 : 8,
      right: 16,
      left: showYAxis ? 48 : 8,
      bottom: showXAxis ? 32 : 8,
    },
    xAxis: {
      show: showXAxis,
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
        show: showXAxisSplitLines,
        lineStyle: {
          color: isDark.value ? colors.gray[800] : colors.gray[200],
        },
      },
      data: orientation === 'vertical' ? xAxisData.value : undefined,
      max: orientation === 'horizontal' ? maxValue : undefined,
    },
    yAxis: {
      show: showYAxis,
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
        show: showYAxisSplitLines,
        lineStyle: {
          color: isDark.value ? colors.gray[800] : colors.gray[200],
        },
      },
      data: orientation === 'horizontal' ? xAxisData.value : undefined,
      max: orientation === 'vertical' ? maxValue : undefined,
    },
    series: yAxisData.value,
  }))

  return { barChartOptions }
}
