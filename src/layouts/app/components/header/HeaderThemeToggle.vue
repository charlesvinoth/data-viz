<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { CIconButton } from '@/components/cui'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <CIconButton
    variant="tertiary"
    :icon="isDark ? 'material-symbols:light-mode-outline' : 'material-symbols:dark-mode-outline'"
    @click="toggleDark()"
  />
</template>

<style scoped></style>
