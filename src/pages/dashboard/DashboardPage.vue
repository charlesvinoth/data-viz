<script setup lang="ts">
import { BarChart } from '@/components/lib'
import type { ChartSeries } from '@/components/lib/types'

// const barChartseries: ChartSeries[] = [
//   {
//     name: '2018',
//     data: [
//       { x: 'Q1', y: 2002 },
//       { x: 'Q2', y: 2484 },
//       { x: 'Q3', y: 1099 },
//       { x: 'Q4', y: 535 },
//     ],
//   },
//   {
//     name: '2019',
//     data: [
//       { x: 'Q1', y: 2283 },
//       { x: 'Q2', y: 2371 },
//       { x: 'Q3', y: 2411 },
//       { x: 'Q4', y: 555 },
//     ],
//   },
//   {
//     name: '2020',
//     data: [
//       { x: 'Q1', y: 1157 },
//       { x: 'Q2', y: 2087 },
//       { x: 'Q3', y: 1404 },
//       { x: 'Q4', y: 1857 },
//     ],
//   },
//   {
//     name: '2021',
//     data: [
//       { x: 'Q1', y: 1336 },
//       { x: 'Q2', y: 2295 },
//       { x: 'Q3', y: 788 },
//       { x: 'Q4', y: 1321 },
//     ],
//   },
//   {
//     name: '2022',
//     data: [
//       { x: 'Q1', y: 1875 },
//       { x: 'Q2', y: 1000 },
//       { x: 'Q3', y: 2244 },
//       { x: 'Q4', y: 1737 },
//     ],
//   },
//   {
//     name: '2023',
//     data: [
//       { x: 'Q1', y: 1382 },
//       { x: 'Q2', y: 678 },
//       { x: 'Q3', y: 1464 },
//       { x: 'Q4', y: 828 },
//     ],
//   },
//   {
//     name: '2024',
//     data: [
//       { x: 'Q1', y: 1914 },
//       { x: 'Q2', y: 2185 },
//       { x: 'Q3', y: 1474 },
//       { x: 'Q4', y: 1329 },
//     ],
//   },
// ]
const barChartseries: ChartSeries[] = [
  // {
  //   name: '2018',
  //   data: [
  //     { x: 'Jan', y: 600 },
  //     { x: 'Feb', y: 650 },
  //     { x: 'Mar', y: 700 },
  //     { x: 'Apr', y: 800 },
  //     { x: 'May', y: 900 },
  //     { x: 'Jun', y: 850 },
  //     { x: 'Jul', y: 750 },
  //     { x: 'Aug', y: 900 },
  //     { x: 'Sep', y: 950 },
  //     { x: 'Oct', y: 1050 },
  //     { x: 'Nov', y: 1150 },
  //     { x: 'Dec', y: 1200 },
  //   ],
  // },
  // {
  //   name: '2019',
  //   data: [
  //     { x: 'Jan', y: 400 },
  //     { x: 'Feb', y: 450 },
  //     { x: 'Mar', y: 500 },
  //     { x: 'Apr', y: 600 },
  //     { x: 'May', y: 700 },
  //     { x: 'Jun', y: 550 },
  //     { x: 'Jul', y: 500 },
  //     { x: 'Aug', y: 600 },
  //     { x: 'Sep', y: 700 },
  //     { x: 'Oct', y: 800 },
  //     { x: 'Nov', y: 900 },
  //     { x: 'Dec', y: 950 },
  //   ],
  // },
  // {
  //   name: '2020',
  //   data: [
  //     { x: 'Jan', y: 500 },
  //     { x: 'Feb', y: 550 },
  //     { x: 'Mar', y: 600 },
  //     { x: 'Apr', y: 650 },
  //     { x: 'May', y: 700 },
  //     { x: 'Jun', y: 600 },
  //     { x: 'Jul', y: 550 },
  //     { x: 'Aug', y: 700 },
  //     { x: 'Sep', y: 750 },
  //     { x: 'Oct', y: 850 },
  //     { x: 'Nov', y: 900 },
  //     { x: 'Dec', y: 1000 },
  //   ],
  // },
  // {
  //   name: '2021',
  //   data: [
  //     { x: 'Jan', y: 550 },
  //     { x: 'Feb', y: 600 },
  //     { x: 'Mar', y: 650 },
  //     { x: 'Apr', y: 700 },
  //     { x: 'May', y: 800 },
  //     { x: 'Jun', y: 750 },
  //     { x: 'Jul', y: 650 },
  //     { x: 'Aug', y: 800 },
  //     { x: 'Sep', y: 850 },
  //     { x: 'Oct', y: 950 },
  //     { x: 'Nov', y: 1050 },
  //     { x: 'Dec', y: 1100 },
  //   ],
  // },
  {
    name: '2022',
    data: [
      { x: 'Jan', y: 600 },
      { x: 'Feb', y: 650 },
      { x: 'Mar', y: 700 },
      { x: 'Apr', y: 800 },
      { x: 'May', y: 900 },
      { x: 'Jun', y: 850 },
      { x: 'Jul', y: 750 },
      { x: 'Aug', y: 900 },
      { x: 'Sep', y: 950 },
      { x: 'Oct', y: 1050 },
      { x: 'Nov', y: 1150 },
      { x: 'Dec', y: 1200 },
    ],
  },
  {
    name: '2023',
    data: [
      { x: 'Jan', y: 650 },
      { x: 'Feb', y: 700 },
      { x: 'Mar', y: 750 },
      { x: 'Apr', y: 850 },
      { x: 'May', y: 950 },
      { x: 'Jun', y: 900 },
      { x: 'Jul', y: 800 },
      { x: 'Aug', y: 950 },
      { x: 'Sep', y: 1000 },
      { x: 'Oct', y: 1100 },
      { x: 'Nov', y: 1200 },
      { x: 'Dec', y: 1250 },
    ],
  },
  {
    name: '2024',
    data: [
      { x: 'Jan', y: 600 },
      { x: 'Feb', y: 650 },
      { x: 'Mar', y: 700 },
      { x: 'Apr', y: 800 },
      { x: 'May', y: 900 },
      { x: 'Jun', y: 850 },
      { x: 'Jul', y: 650 },
      { x: 'Aug', y: 800 },
      { x: 'Sep', y: 850 },
      { x: 'Oct', y: 950 },
      { x: 'Nov', y: 1050 },
      { x: 'Dec', y: 1100 },
    ],
  },
]
</script>

<template>
  <div class="mx-auto p-4">
    <BarChart
      title="Sales report"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      :series="barChartseries"
      hide-x-axis-split-lines
      hide-y-axis-split-lines
    />
  </div>
</template>

<style scoped></style>
