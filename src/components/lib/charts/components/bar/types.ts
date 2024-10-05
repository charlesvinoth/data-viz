import type { ChartCommonProps, ChartSeries } from '../../types'

export interface BarChartMarkLines {
  name: string
  value: number
}

export interface BarChartProps extends ChartCommonProps {
  height?: number
  hideLegend?: boolean
  hideXAxis?: boolean
  hideXAxisSplitLines?: boolean
  hideYAxis?: boolean
  hideYAxisSplitLines?: boolean
  isStacked?: boolean
  markLines?: BarChartMarkLines[]
  yMax?: number
  orientation?: 'horizontal' | 'vertical'
  series: ChartSeries[]
}
