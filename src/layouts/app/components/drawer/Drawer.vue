<script setup lang="ts">
import { Sheet } from '@/components/cui'
import DrawerLogo from './DrawerLogo.vue'
import DrawerMenu from './DrawerMenu.vue'

const isDrawerOpen = defineModel<boolean>({ required: true })
</script>

<template>
  <Sheet v-model="isDrawerOpen">
    <div class="w-56">
      <DrawerLogo />
      <DrawerMenu @click="isDrawerOpen = false" />
    </div>
  </Sheet>
</template>

<style scoped></style>
