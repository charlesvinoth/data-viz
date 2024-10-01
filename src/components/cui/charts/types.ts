import VChart from 'vue-echarts'

export interface ChartCommonProps {
  hideWrapper?: boolean
  hideHeader?: boolean
  title?: string
  description?: string
}

export interface ChartWrapperProps extends ChartCommonProps {
  chartRef: typeof VChart | null
}
