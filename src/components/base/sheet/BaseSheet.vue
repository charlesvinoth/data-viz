<script setup lang="ts">
import { Dialog } from '@ark-ui/vue'

interface BaseSheetProps {
  position?: 'left' | 'right'
}

const { position = 'left' } = defineProps<BaseSheetProps>()

const model = defineModel<boolean>({ default: false })
</script>

<template>
  <Dialog.Root v-model:open="model">
    <Teleport to="body">
      <Dialog.Backdrop
        class="fixed inset-0 z-10 h-screen w-screen bg-gray-500/60 transition-opacity"
      />
      <Dialog.Positioner class="fixed inset-0 z-20">
        <Dialog.Content
          class="absolute bg-white dark:bg-gray-900"
          :class="{
            'left-0 top-0 h-screen': position === 'left',
            'right-0 top-0 h-screen': position === 'right',
          }"
        >
          <div v-if="model && position === 'left'" v-motion-slide-left>
            <slot />
          </div>

          <div v-if="model && position === 'right'" v-motion-slide-right>
            <slot />
          </div>
        </Dialog.Content>
      </Dialog.Positioner>
    </Teleport>
  </Dialog.Root>
</template>

<style scoped></style>
