<script setup lang="ts">
import { cn } from '@/utils/cn'

interface PingIndicatorProps {
  top?: number
  right?: number
  color?: 'primary' | 'success' | 'warning' | 'error'
}

const { top = 0, right = 0, color = 'primary' } = defineProps<PingIndicatorProps>()

const colorClassNames = cn({
  'bg-primary-600 dark:bg-primary-400': color === 'primary',
  'bg-error-600 dark:bg-error-400': color === 'error',
  'bg-success-600 dark:bg-success-400': color === 'success',
  'bg-warning-600 dark:bg-warning-400': color === 'warning',
})

const classNames = {
  outer: cn('absolute size-2 animate-ping rounded-full', colorClassNames),
  inner: cn('absolute size-2 rounded-full', colorClassNames),
}
</script>

<template>
  <span :class="classNames.outer" :style="{ right: `${right}px`, top: `${top}px` }" />
  <span :class="classNames.inner" :style="{ right: `${right}px`, top: `${top}px` }" />
</template>

<style scoped></style>
