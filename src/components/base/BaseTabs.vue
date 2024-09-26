<script setup lang="ts">
import { Tabs } from '@ark-ui/vue'

interface BaseTab {
  label: string
  value: string
  isDisabled?: boolean
  className?: string
}

interface BaseTabsProps {
  tabs: BaseTab[]
}

const model = defineModel<string>()
defineProps<BaseTabsProps>()
</script>

<template>
  <Tabs.Root v-model="model">
    <Tabs.List class="relative flex items-center gap-2">
      <Tabs.Indicator
        class="rounded-md bg-primary-700/10 dark:bg-primary-300/15"
        :style="{ height: 'var(--height)', width: 'var(--width)', left: 'var(--left)' }"
      />
      <Tabs.Trigger
        v-for="tab in tabs"
        :key="tab.value"
        :value="tab.value"
        :disabled="tab.isDisabled"
        :class="[
          'rounded-md bg-white px-4 py-2 font-medium text-gray-600 outline-primary-600 transition-colors duration-200 hover:text-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:outline-primary-400 dark:hover:text-gray-300',
          {
            'bg-transparent text-primary-700 hover:text-primary-700 dark:bg-transparent dark:text-primary-300 hover:dark:text-primary-300':
              model === tab.value,
          },
          tab.className,
        ]"
      >
        {{ tab.label }}
      </Tabs.Trigger>
    </Tabs.List>
  </Tabs.Root>
</template>

<style scoped></style>
