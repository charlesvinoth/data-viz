export interface ChartCommonProps {
  title?: string
  description?: string
}

export interface ChartData {
  x: string
  y: number
}

export interface ChartSeries {
  data: ChartData[]
  name: string
}
