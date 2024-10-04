<script setup lang="ts">
import { Dialog } from '@ark-ui/vue'
import { cn } from '@/utils/cn'

interface SheetProps {
  position?: 'left' | 'right'
}

const { position = 'left' } = defineProps<SheetProps>()

const model = defineModel<boolean>({ default: false })

const classNames = {
  backdrop: 'fixed inset-0 z-10 h-screen w-screen bg-gray-500/60 transition-opacity',
  positioner: 'fixed inset-0 z-20',
  content: cn('absolute bg-white dark:bg-gray-900', {
    'left-0 top-0 h-screen': position === 'left',
    'right-0 top-0 h-screen': position === 'right',
  }),
}
</script>

<template>
  <Dialog.Root v-model:open="model">
    <Teleport to="body">
      <Dialog.Backdrop :class="classNames.backdrop" />
      <Dialog.Positioner :class="classNames.positioner">
        <Dialog.Content :class="classNames.content">
          <div
            v-if="model && position === 'left'"
            v-motion-slide-left
          >
            <slot />
          </div>

          <div
            v-if="model && position === 'right'"
            v-motion-slide-right
          >
            <slot />
          </div>
        </Dialog.Content>
      </Dialog.Positioner>
    </Teleport>
  </Dialog.Root>
</template>

<style scoped></style>
