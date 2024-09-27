<script setup lang="ts">
import avatarImg from '@/assets/avatar.png'
import { BaseMenu, BaseMenuItem, BaseMenuSeparator } from '@/components/base'

const menus = [
  {
    value: 'profile',
    label: 'Profile',
    icon: 'material-symbols:person-outline',
  },
  {
    value: 'upgrade',
    label: 'Upgrade',
    icon: 'material-symbols:shopping-cart-outline-rounded',
  },
  {
    value: 'termsOfUse',
    label: 'Terms of Use',
    icon: 'material-symbols:description-outline-rounded',
  },
  {
    value: 'privacyPolicy',
    label: 'Privacy Policy',
    icon: 'material-symbols:shield-outline-rounded',
  },
]
</script>

<template>
  <div>
    <BaseMenu>
      <template #trigger>
        <img :src="avatarImg" alt="user avatar" class="size-8 rounded-full" />
      </template>

      <div class="flex items-center gap-3 p-2">
        <img :src="avatarImg" alt="user avatar" class="size-10 rounded-full" />

        <div>
          <p class="font-semibold text-gray-700 dark:text-gray-300">Charles Vinoth</p>
          <p class="text-xs leading-5 text-gray-600 dark:text-gray-400">charles@gmail.com</p>
        </div>
      </div>

      <BaseMenuSeparator />

      <BaseMenuItem
        v-for="menu in menus"
        :key="menu.value"
        :value="menu.value"
        :label="menu.label"
        :icon="menu.icon"
      />

      <BaseMenuSeparator />

      <BaseMenuItem
        value="logOut"
        label="Log Out"
        icon="material-symbols:logout-rounded"
        color="error"
      />
    </BaseMenu>
  </div>
</template>

<style scoped></style>
