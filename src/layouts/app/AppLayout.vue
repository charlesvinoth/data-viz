<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Drawer from './components/drawer/Drawer.vue'
import DrawerXL from './components/drawer/DrawerXL.vue'
import Header from './components/header/Header.vue'

const isDrawerOpen = ref(false)
const isDrawerXLOpen = ref(false)
</script>

<template>
  <Drawer v-model="isDrawerOpen" />
  <DrawerXL v-model="isDrawerXLOpen" />

  <div
    class="transition-[margin] duration-200 ease-in-out"
    :class="isDrawerXLOpen ? 'xl:ml-56' : 'xl:ml-14'"
  >
    <Header v-model:isDrawerOpen="isDrawerOpen" v-model:isDrawerXLOpen="isDrawerXLOpen" />
    <RouterView />
  </div>
</template>

<style scoped></style>
