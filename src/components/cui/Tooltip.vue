<script setup lang="ts">
import { Tooltip } from '@ark-ui/vue'
import { cn } from '@/utils/cn'

type Placement = 'end' | 'start'
type Side = 'top' | 'right' | 'bottom' | 'left'
type Position = Side | `${Side}-${Placement}`

interface TooltipProps {
  color?: 'default' | 'primary' | 'success' | 'warning' | 'error'
  content: string
  gutter?: number
  position?: Position
  withArrow?: boolean
}

const {
  color = 'default',
  gutter = 8,
  position = 'top',
  withArrow = true,
} = defineProps<TooltipProps>()

const classNames = {
  content: cn(
    'text-balance rounded-md px-3 py-1.5 text-xs font-medium text-white dark:text-black',
    {
      'bg-gray-900 dark:bg-white': color === 'default',
      'bg-primary-600 dark:bg-primary-400': color === 'primary',
      'bg-error-600 dark:bg-error-400': color === 'error',
      'bg-success-600 dark:bg-success-400': color === 'success',
      'bg-warning-600 dark:bg-warning-400': color === 'warning',
    },
  ),
  arrow: cn('!bg-current', {
    'text-gray-900 dark:text-white': color === 'default',
    'text-primary-600 dark:text-primary-400': color === 'primary',
    'text-error-600 dark:text-error-400': color === 'error',
    'text-success-600 dark:text-success-400': color === 'success',
    'text-warning-600 dark:text-warning-400': color === 'warning',
  }),
}
</script>

<template>
  <Tooltip.Root
    :open-delay="200"
    :close-delay="100"
    :positioning="{
      placement: position,
      gutter,
    }"
  >
    <Tooltip.Trigger>
      <slot />
    </Tooltip.Trigger>

    <Tooltip.Positioner>
      <Tooltip.Content :class="classNames.content">
        <Tooltip.Arrow v-if="withArrow">
          <Tooltip.ArrowTip :class="classNames.arrow" />
        </Tooltip.Arrow>

        {{ content }}
      </Tooltip.Content>
    </Tooltip.Positioner>
  </Tooltip.Root>
</template>

<style scoped></style>
