import colors from 'tailwindcss/colors'
import VChart from 'vue-echarts'

/**
 * Downloads the chart as an image.
 * @param chartRef The chart component reference.
 * @param format The image format. Defaults to 'png'.
 */
export default function downloadChartImage(
  chartRef: typeof VChart | null,
  format: 'png' | 'jpg' = 'png',
  isDark: boolean,
): void {
  if (!chartRef) {
    return
  }

  const image = chartRef.getDataURL({
    // The pixel ratio determines the quality of the image. A higher
    // value will result in a higher quality image, but it will also
    // increase the file size.
    pixelRatio: 2,
    // The background color of the image. Set it to white so that the
    // chart is visible.
    backgroundColor: isDark ? colors.gray[900] : colors.white,
  })

  const link = document.createElement('a')
  link.href = image
  // Set the download attribute to the filename. The filename should
  // include the format.
  link.download = `chart.${format}`
  // Hide the link so that it doesn't appear on the page.
  link.style.display = 'none'
  document.body.appendChild(link)
  // Trigger a click event on the link to download the image.
  link.click()
  // Remove the link from the page after it has been clicked.
  document.body.removeChild(link)
}
