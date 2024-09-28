<script setup lang="ts">
import { CButton, CLogoMark } from '@/components/cui'
</script>

<template>
  <div
    class="flex flex-col items-center justify-center px-6"
    :style="{ height: 'calc(100vh - 56px)' }"
  >
    <div class="relative mb-6 size-24">
      <CLogoMark class="opacity-20" />
      <div class="absolute top-1 flex size-full items-center justify-center">
        <div class="size-14 rounded-full bg-primary-600 dark:bg-primary-400">
          <!-- animated clock icon -->

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="size-14 text-gray-100 dark:text-gray-950"
          >
            <rect
              width="2"
              height="7"
              x="11"
              y="6"
              fill="currentColor"
              rx="1"
            >
              <animateTransform
                attributeName="transform"
                dur="9s"
                repeatCount="indefinite"
                type="rotate"
                values="0 12 12;360 12 12"
              />
            </rect>
            <rect
              width="2"
              height="9"
              x="11"
              y="11"
              fill="currentColor"
              rx="1"
            >
              <animateTransform
                attributeName="transform"
                dur="0.75s"
                repeatCount="indefinite"
                type="rotate"
                values="0 12 12;360 12 12"
              />
            </rect>
          </svg>

          <!-- *** -->
        </div>
      </div>
    </div>

    <p class="mb-2 text-lg font-bold">Coming Soon!</p>
    <p class="text-center text-gray-600 dark:text-gray-400">
      The feature is in development. We will notify you when it is ready.
    </p>
    <CButton
      label="Go back"
      class="mt-6"
      @click="$router.go(-1)"
    />
  </div>
</template>

<style scoped></style>
