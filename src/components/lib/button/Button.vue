<script setup lang="ts">
import { Icon } from '@/components/lib'
import { cn } from '@/utils/cn'
import baseButtonStyles from './styles'
import type { ButtonColor, ButtonSize, ButtonVariant } from './types'

interface ButtonProps {
  color?: ButtonColor
  icon?: string
  iconClass?: string
  isDisabled?: boolean
  isLoading?: boolean
  label: string
  size?: ButtonSize
  suffixIcon?: string
  suffixIconClass?: string
  variant?: ButtonVariant
}

const {
  color = 'primary',
  icon,
  iconClass,
  isDisabled,
  isLoading,
  label,
  size = 'sm',
  suffixIcon,
  suffixIconClass,
  variant = 'primary',
} = defineProps<ButtonProps>()

const sizeClass = cn({
  'h-8 px-3 py-1.5': size === 'xs',
  'h-9 px-3.5 py-2': size === 'sm',
  'h-10 px-4 py-2.5': size === 'md',
  'h-11 px-[18px] py-3': size === 'lg',
})

const classNames = baseButtonStyles(variant, color, [sizeClass])
</script>

<template>
  <button
    v-ripple
    :disabled="isDisabled || isLoading"
    :class="classNames"
  >
    <Icon
      v-if="isLoading"
      name="gg:spinner"
      class="animate-spin"
    />
    <Icon
      v-if="!isLoading && icon"
      :name="icon"
      :class="iconClass"
    />
    {{ label }}
    <Icon
      v-if="!isLoading && suffixIcon"
      :name="suffixIcon"
      :class="suffixIconClass"
    />
  </button>
</template>

<style scoped></style>
