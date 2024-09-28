<script setup lang="ts">
import { CIcon } from '@/components/cui'
import { cn } from '@/utils/cn'
import baseButtonStyles from './styles'
import type { ButtonColor, ButtonSize, ButtonVariant } from './types'

interface CIconButtonProps {
  color?: ButtonColor
  icon: string
  iconClass?: string
  isDisabled?: boolean
  isLoading?: boolean
  size?: ButtonSize
  variant?: ButtonVariant
}

const {
  color = 'primary',
  icon,
  iconClass,
  isDisabled,
  isLoading,
  size = 'sm',
  variant = 'primary',
} = defineProps<CIconButtonProps>()

const sizeClass = cn({
  'size-7': size === 'xs',
  'size-8': size === 'sm',
  'size-10': size === 'md',
  'size-11': size === 'lg',
})

const classNames = baseButtonStyles(variant, color, [sizeClass, 'rounded-full'])
</script>

<template>
  <button
    v-ripple
    :disabled="isDisabled || isLoading"
    :class="classNames"
  >
    <CIcon
      v-if="isLoading"
      name="gg:spinner"
      class="animate-spin"
    />
    <CIcon
      v-if="!isLoading"
      :name="icon"
      :class="iconClass"
    />
  </button>
</template>

<style scoped></style>
