<script setup lang="ts">
import { CBarChart, type CBarChartSeries } from '@/components/cui'

const barChartseries: CBarChartSeries[] = [
  {
    name: '2019 Sales',
    data: [
      { x: 'January', y: 400 },
      { x: 'February', y: 450 },
      { x: 'March', y: 500 },
      { x: 'April', y: 600 },
      { x: 'May', y: 700 },
      { x: 'June', y: 550 },
      { x: 'July', y: 500 },
      { x: 'August', y: 600 },
      { x: 'September', y: 700 },
      { x: 'October', y: 800 },
      { x: 'November', y: 900 },
      { x: 'December', y: 950 },
    ],
  },
  {
    name: '2020 Sales',
    data: [
      { x: 'January', y: 500 },
      { x: 'February', y: 550 },
      { x: 'March', y: 600 },
      { x: 'April', y: 650 },
      { x: 'May', y: 700 },
      { x: 'June', y: 600 },
      { x: 'July', y: 550 },
      { x: 'August', y: 700 },
      { x: 'September', y: 750 },
      { x: 'October', y: 850 },
      { x: 'November', y: 900 },
      { x: 'December', y: 1000 },
    ],
  },
  {
    name: '2021 Sales',
    data: [
      { x: 'January', y: 550 },
      { x: 'February', y: 600 },
      { x: 'March', y: 650 },
      { x: 'April', y: 700 },
      { x: 'May', y: 800 },
      { x: 'June', y: 750 },
      { x: 'July', y: 650 },
      { x: 'August', y: 800 },
      { x: 'September', y: 850 },
      { x: 'October', y: 950 },
      { x: 'November', y: 1050 },
      { x: 'December', y: 1100 },
    ],
  },
  {
    name: '2022 Sales',
    data: [
      { x: 'January', y: 600 },
      { x: 'February', y: 650 },
      { x: 'March', y: 700 },
      { x: 'April', y: 800 },
      { x: 'May', y: 900 },
      { x: 'June', y: 850 },
      { x: 'July', y: 750 },
      { x: 'August', y: 900 },
      { x: 'September', y: 950 },
      { x: 'October', y: 1050 },
      { x: 'November', y: 1150 },
      { x: 'December', y: 1200 },
    ],
  },
  {
    name: '2023 Sales',
    data: [
      { x: 'January', y: 650 },
      { x: 'February', y: 700 },
      { x: 'March', y: 750 },
      { x: 'April', y: 850 },
      { x: 'May', y: 950 },
      { x: 'June', y: 900 },
      { x: 'July', y: 800 },
      { x: 'August', y: 950 },
      { x: 'September', y: 1000 },
      { x: 'October', y: 1100 },
      { x: 'November', y: 1200 },
      { x: 'December', y: 1250 },
    ],
  },
]
</script>

<template>
  <div class="flex items-center justify-center p-6">
    <div class="h-96 w-full rounded-md bg-white p-4 dark:bg-gray-900">
      <CBarChart :series="barChartseries" />
    </div>
  </div>
</template>

<style scoped></style>
