<script setup lang="ts">
import { CIcon } from '@/components/cui'
import { cn } from '@/utils/cn'
import baseButtonStyles from './styles'
import type { ButtonColor, ButtonSize, ButtonVariant } from './types'

interface CButtonProps {
  label: string
  color?: ButtonColor
  icon?: string
  iconClass?: string
  suffixIcon?: string
  suffixIconClass?: string
  isLoading?: boolean
  isDisabled?: boolean
  variant?: ButtonVariant
  size?: ButtonSize
}

const {
  label,
  color = 'primary',
  icon,
  iconClass,
  suffixIcon,
  suffixIconClass,
  isLoading,
  isDisabled,
  variant = 'primary',
  size = 'sm',
} = defineProps<CButtonProps>()

const sizeClass = cn({
  'h-8 px-3 py-1.5': size === 'xs',
  'h-9 px-3.5 py-2': size === 'sm',
  'h-10 px-4 py-2.5': size === 'md',
  'h-11 px-[18px] py-3': size === 'lg',
})

const classNames = baseButtonStyles(variant, color, [sizeClass])
</script>

<template>
  <button v-ripple :disabled="isDisabled || isLoading" :class="classNames">
    <CIcon v-if="isLoading" name="gg:spinner" class="animate-spin" />
    <CIcon v-if="!isLoading && icon" :name="icon" :class="iconClass" />
    {{ label }}
    <CIcon v-if="!isLoading && suffixIcon" :name="suffixIcon" :class="suffixIconClass" />
  </button>
</template>

<style scoped></style>
