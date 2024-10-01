<script setup lang="ts">
import { IconButton } from '@/components/cui'

const isDrawerOpen = defineModel<boolean>('isDrawerOpen')
const isDrawerXLOpen = defineModel<boolean>('isDrawerXLOpen')
</script>

<template>
  <div class="flex items-center gap-2">
    <IconButton
      icon="tabler:menu-3"
      variant="tertiary"
      class="xl:hidden"
      @click="isDrawerOpen = !isDrawerOpen"
    />
    <IconButton
      icon="tabler:menu-3"
      variant="tertiary"
      class="hidden xl:flex"
      @click="isDrawerXLOpen = !isDrawerXLOpen"
    />
    <h1 class="font-poppins text-lg font-semibold capitalize md:text-2xl">{{ $route.name }}</h1>
  </div>
</template>

<style scoped></style>
