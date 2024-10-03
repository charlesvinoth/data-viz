<script setup lang="ts">
import { IconButton, PingIndicator } from '@/components/lib'
</script>

<template>
  <div className="relative">
    <IconButton
      variant="tertiary"
      icon="material-symbols:notifications-outline-rounded"
    />
    <PingIndicator
      :top="2"
      :right="2"
    />
  </div>
</template>

<style scoped></style>
