<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import BaseIconButton from '@/components/base/button/BaseIconButton.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <BaseIconButton
    variant="tertiary"
    :icon="isDark ? 'material-symbols:light-mode-outline' : 'material-symbols:dark-mode-outline'"
    @click="toggleDark()"
  />
</template>

<style scoped></style>
