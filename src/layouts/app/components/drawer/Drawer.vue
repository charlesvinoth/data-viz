<script setup lang="ts">
import { BaseSheet } from '@/components/base'
import DrawerLogo from './DrawerLogo.vue'
import DrawerMenu from './DrawerMenu.vue'

const isDrawerOpen = defineModel<boolean>({ required: true })
</script>

<template>
  <BaseSheet v-model="isDrawerOpen">
    <div class="w-56">
      <DrawerLogo />
      <DrawerMenu />
    </div>
  </BaseSheet>
</template>

<style scoped></style>
