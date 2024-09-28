<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface CIconProps {
  name: string
}

defineProps<CIconProps>()
</script>

<template>
  <Icon
    inline
    :icon="name"
    class="size-5"
  />
</template>

<style scoped></style>
