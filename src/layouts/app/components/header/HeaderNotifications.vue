<script setup lang="ts">
import { CIconButton, CPingIndicator } from '@/components/cui'
</script>

<template>
  <div className="relative">
    <CIconButton variant="tertiary" icon="material-symbols:notifications-outline-rounded" />
    <CPingIndicator :top="2" :right="2" />
  </div>
</template>

<style scoped></style>
