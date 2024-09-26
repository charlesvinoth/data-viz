<script setup lang="ts">
import avatarImg from '@/assets/avatar.png'
import { BaseMenu, BaseMenuItem } from '@/components/base'
</script>

<template>
  <div>
    <BaseMenu>
      <template #trigger>
        <img :src="avatarImg" alt="user avatar" class="size-8 rounded-full" />
      </template>

      <BaseMenuItem value="profile" label="Profile" icon="material-symbols:person-outline" />
      <BaseMenuItem
        value="upgrade"
        label="Upgrade"
        icon="material-symbols:shopping-cart-outline-rounded"
      />
      <BaseMenuItem
        value="termsOfUse"
        label="Terms of Use"
        icon="material-symbols:description-outline-rounded"
      />
      <BaseMenuItem
        value="privacyPolicy"
        label="Privacy Policy"
        icon="material-symbols:shield-outline-rounded"
      />
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
