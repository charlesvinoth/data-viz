import VChart from 'vue-echarts'

export default function downloadChartAsImage(
  chartRef: typeof VChart | null,
  type: 'png' | 'jpg' = 'png',
) {
  if (chartRef) {
    const base64Image = chartRef.getDataURL({
      pixelRatio: 2,
      backgroundColor: '#fff',
    })

    const link = document.createElement('a')
    link.href = base64Image
    link.download = `chart.${type}`

    document.body.appendChild(link)
    link.click()

    document.body.removeChild(link)
  }
}
