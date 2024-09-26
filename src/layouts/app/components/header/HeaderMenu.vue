<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { BaseTabs } from '@/components/base'

const router = useRouter()

const tabs = [
  {
    value: 'dashboard',
    label: 'Dashboard',
  },
  {
    value: 'portfolio',
    label: 'Portfolio',
  },
  {
    value: 'reports',
    label: 'Reports',
  },
  {
    value: 'settings',
    label: 'Settings',
  },
  {
    value: 'help',
    label: 'Help',
  },
]
const tab = ref('dashboard')

watch(tab, () => router.push({ name: tab.value }))
</script>

<template>
  <BaseTabs v-model="tab" :tabs="tabs" class="hidden sm:block" />
</template>

<style scoped></style>
