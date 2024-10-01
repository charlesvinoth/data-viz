import type { ChartCommonProps } from '..'

export interface BarChartData {
  x: string
  y: number
}

export interface BarChartSeries {
  data: BarChartData[]
  name: string
}

export interface BarChartMarkLines {
  name: string
  value: number
}

export interface BarChartProps extends ChartCommonProps {
  height?: number
  isStacked?: boolean
  markLines?: BarChartMarkLines[]
  maxValue?: number
  orientation?: 'horizontal' | 'vertical'
  series: BarChartSeries[]
  showLegend?: boolean
  showXAxis?: boolean
  showXAxisSplitLines?: boolean
  showYAxis?: boolean
  showYAxisSplitLines?: boolean
  trigger?: 'item' | 'axis'
}
