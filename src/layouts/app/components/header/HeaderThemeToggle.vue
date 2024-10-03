<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { IconButton } from '@/components/lib'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <IconButton
    variant="tertiary"
    :icon="isDark ? 'material-symbols:light-mode-outline' : 'material-symbols:dark-mode-outline'"
    @click="toggleDark()"
  />
</template>

<style scoped></style>
