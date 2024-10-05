import { useDark } from '@vueuse/core'
import { BarChart } from 'echarts/charts'
import {
  GridComponent,
  LegendComponent,
  MarkLineComponent,
  TitleComponent,
  TooltipComponent,
} from 'echarts/components'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
// import { SVGRenderer } from 'echarts/renderers'
import colors from 'tailwindcss/colors'
import { computed } from 'vue'
import getYMaxDigits from '@/components/lib/charts/utils/getYMaxDigits'
import { colorsDark, colorsLight } from '../../utils/chartColors'
import type { BarChartProps } from './types'

export default function useBarChart(props: BarChartProps) {
  use([
    CanvasRenderer,
    BarChart,
    TooltipComponent,
    TitleComponent,
    LegendComponent,
    GridComponent,
    MarkLineComponent,
  ])

  const isDark = useDark()
  const yMaxDigits = getYMaxDigits(props.series)
  const barBorderRadius = props.orientation === 'horizontal' ? [0, 2, 2, 0] : [2, 2, 0, 0]

  const showLegend = computed(() => props.series.length > 1 && !props.hideLegend)
  const legendData = computed(() => props.series.map(({ name }) => name))

  const xAxisData = computed(() => props.series[0].data.map(({ x }) => x))
  const yAxisData = computed(() =>
    props.series.map((item, index) => ({
      type: 'bar',
      name: item.name,
      data: item.data.map(({ y }) => y),
      silent: props.series.length > 1,
      itemStyle: {
        borderRadius: props.isStacked
          ? index === props.series.length - 1
            ? barBorderRadius
            : 0
          : barBorderRadius,
      },
      stack: props.isStacked ? 'x' : undefined,
      emphasis: {
        focus: props.series.length > 1 ? 'series' : 'item',
      },
      markLine: props.markLines
        ? {
            symbol: [],
            lineStyle: {
              color: colors.gray[500],
            },
            label: {
              position: 'insideEndTop',
              color: colors.white,
              fontSize: 12,
              fontWeight: 500,
              backgroundColor: colors.gray[500],
              borderRadius: [4, 4, 0, 0],
              padding: 4,
              formatter: '{b}: {c}',
              distance: [0, 0],
            },
            data: props.markLines.map(({ name, value }) => ({
              name,
              xAxis: props.orientation === 'horizontal' ? value : undefined,
              yAxis: props.orientation === 'vertical' ? value : undefined,
            })),
            silent: true,
          }
        : undefined,
    })),
  )

  const calculateGridTop = computed(() => {
    const titleHeight = props.title ? 36 : 0
    const descriptionHeight = props.description ? 20 : 0
    const legendHeight = showLegend.value ? 24 : 0
    return titleHeight + descriptionHeight + legendHeight + 8
  })
  const calculateGridRight = computed(() => {
    return props.orientation === 'vertical' ? 8 : yMaxDigits * 4 + 8
  })
  const calculateGridLeft = computed(() => {
    return props.hideYAxis ? 8 : props.orientation === 'horizontal' ? 48 : yMaxDigits * 8 + 12
  })

  const barChartOptions = computed(() => ({
    color: isDark.value ? colorsDark : colorsLight,
    textStyle: {
      fontFamily: 'Inter',
    },
    title: {
      show: props.title,
      padding: [4, 8, 0, 8],
      text: props.title,
      textStyle: {
        color: isDark.value ? colors.gray[50] : colors.gray[900],
        fontSize: 16,
        fontWeight: 600,
        fontFamily: 'Poppins',
        lineHeight: 24,
      },
      subtext: props.description,
      subtextStyle: {
        color: isDark.value ? colors.gray[400] : colors.gray[600],
        fontSize: 12,
        lineHeight: 16,
      },
      itemGap: props.description ? 4 : 0,
    },
    legend: {
      show: showLegend.value,
      type: 'scroll',
      data: legendData.value,
      top: props.title && props.description ? 64 : props.title ? 44 : 8,
      itemGap: 16,
      padding: 0,
      itemWidth: 24,
      itemHeight: 16,
      borderRadius: 8,
      textStyle: {
        color: isDark.value ? colors.gray[400] : colors.gray[600],
        fontWeight: 500,
      },
      inactiveColor: isDark.value ? colors.gray[600] : colors.gray[400],
      pageIconColor: isDark.value ? colors.gray[400] : colors.gray[600],
      pageIconInactiveColor: isDark.value ? colors.gray[600] : colors.gray[400],
      pageTextStyle: {
        color: isDark.value ? colors.gray[400] : colors.gray[600],
      },
    },
    grid: {
      show: false,
      top: calculateGridTop.value,
      right: calculateGridRight.value,
      left: calculateGridLeft.value,
      bottom: props.hideXAxis ? 8 : 24,
    },

    xAxis: {
      show: !props.hideXAxis,
      axisLine: {
        show: !props.hideYAxisSplitLines,
        lineStyle: {
          color: isDark.value ? colors.gray[800] : colors.gray[200],
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        margin: 4,
        color: isDark.value ? colors.gray[400] : colors.gray[600],
        formatter: (value: number) => value,
        hideOverlap: true,
      },
      splitLine: {
        show: !props.hideXAxisSplitLines,
        lineStyle: {
          color: isDark.value ? colors.gray[800] : colors.gray[200],
        },
      },
      data: props.orientation === 'vertical' ? xAxisData.value : undefined,
      max: props.orientation === 'horizontal' ? props.yMax : undefined,
    },
    yAxis: {
      show: !props.hideYAxis,
      axisLine: {
        show: !props.hideXAxisSplitLines,
        lineStyle: {
          color: isDark.value ? colors.gray[800] : colors.gray[200],
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: isDark.value ? colors.gray[400] : colors.gray[600],
        formatter: (value: number) => value,
      },
      splitLine: {
        show: !props.hideYAxisSplitLines,
        lineStyle: {
          color: isDark.value ? colors.gray[800] : colors.gray[200],
        },
      },
      data: props.orientation === 'horizontal' ? xAxisData.value : undefined,
      max: props.orientation === 'vertical' ? props.yMax : undefined,
    },
    tooltip: {
      trigger: props.series.length > 1 ? 'axis' : 'item',
      axisPointer: {
        lineStyle: {
          color: isDark.value ? colors.gray[500] : colors.gray[400],
        },
      },
      backgroundColor: isDark.value ? colors.gray[900] : colors.white,
      borderColor: isDark.value ? colors.gray[800] : colors.gray[200],
      textStyle: {
        color: isDark.value ? colors.gray[300] : colors.gray[700],
      },
    },
    series: yAxisData.value,
  }))

  return { barChartOptions }
}
