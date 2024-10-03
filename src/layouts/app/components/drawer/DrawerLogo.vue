<script setup lang="ts">
import { LogoMark } from '@/components/lib'

interface DrawerLogoProps {
  isDrawerOpen?: boolean
}

const { isDrawerOpen = true } = defineProps<DrawerLogoProps>()
</script>

<template>
  <div class="mb-4 flex items-center gap-2 p-3">
    <LogoMark class="size-8 shrink-0" />
    <div
      v-if="isDrawerOpen"
      class="font-bungee text-xl text-primary-600 dark:text-primary-400"
    >
      hexa
    </div>
  </div>
</template>

<style scoped></style>
