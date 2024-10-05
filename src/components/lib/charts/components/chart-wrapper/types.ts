import VChart from 'vue-echarts'
import type { ChartCommonProps } from '../../types'

export interface ChartWrapperProps extends ChartCommonProps {
  chartRef: typeof VChart | null
}
