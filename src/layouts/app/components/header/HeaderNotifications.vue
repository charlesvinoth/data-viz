<script setup lang="ts">
import { BaseIconButton, BasePingIndicator } from '@/components/base'
</script>

<template>
  <div className="relative">
    <BaseIconButton variant="tertiary" icon="material-symbols:notifications-outline-rounded" />
    <BasePingIndicator :top="2" :right="2" />
  </div>
</template>

<style scoped></style>
