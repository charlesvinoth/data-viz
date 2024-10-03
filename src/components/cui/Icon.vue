<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface IconProps {
  name: string
}

defineProps<IconProps>()
</script>

<template>
  <Icon
    inline
    :icon="name"
    class="size-5"
  />
</template>

<style scoped></style>
