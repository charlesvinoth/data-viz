<script setup lang="ts">
import HeaderNotifications from './HeaderNotifications.vue'
import HeaderSearch from './HeaderSearch.vue'
import HeaderThemeToggle from './HeaderThemeToggle.vue'
import HeaderTitle from './HeaderTitle.vue'
import HeaderUser from './HeaderUser.vue'

const isDrawerOpen = defineModel<boolean>('isDrawerOpen')
const isDrawerXLOpen = defineModel<boolean>('isDrawerXLOpen')
</script>

<template>
  <header
    class="flex h-14 items-center justify-between bg-white px-4 dark:bg-gray-900 xl:bg-transparent dark:xl:bg-transparent"
  >
    <HeaderTitle v-model:isDrawerOpen="isDrawerOpen" v-model:isDrawerXLOpen="isDrawerXLOpen" />

    <div class="flex items-center gap-2">
      <HeaderSearch />
      <HeaderNotifications />
      <HeaderThemeToggle />
      <HeaderUser class="ml-4" />
    </div>
  </header>
</template>

<style scoped></style>
