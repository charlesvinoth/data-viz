export interface CBarChartData {
  x: string
  y: number
}

export interface CBarChartSeries {
  data: CBarChartData[]
  name: string
}

export interface CBarChartProps {
  isStacked?: boolean
  series: CBarChartSeries[]
  trigger?: 'item' | 'axis'
}
