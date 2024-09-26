<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface BaseIconProps {
  name: string
}

defineProps<BaseIconProps>()
</script>

<template>
  <Icon inline :icon="name" class="size-5" />
</template>

<style scoped></style>
