<script setup lang="ts">
import { LogoMark } from '@/components/cui'

interface DrawerLogoProps {
  isDrawerOpen?: boolean
}

const { isDrawerOpen = true } = defineProps<DrawerLogoProps>()
</script>

<template>
  <div class="flex items-center gap-2 p-3">
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
