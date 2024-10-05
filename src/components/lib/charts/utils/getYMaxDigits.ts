import type { ChartSeries } from '../types'

/**
 * Calculate the maximum number of digits in the y-axis values of a chart series.
 * @param series The chart series to calculate the maximum number of digits for.
 * @returns The maximum number of digits in the y-axis values.
 */
export default function getYMaxDigits(series: ChartSeries[]): number {
  // Find the maximum y-axis value in the series
  const max = Math.max(...series.flatMap((series) => series.data.map((data) => data.y)))

  // Round up to the nearest 10 to make sure we have enough room for the axis labels
  const ceiled = Math.ceil(max / 10) * 10

  // Return the number of digits in the ceiled value
  return ceiled.toString().length
}
