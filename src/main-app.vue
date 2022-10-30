<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useFontAwesome } from '@/composable/font-awesome'
import { useDarkMode } from '@/composable/dark-mode'

useFontAwesome()
useDarkMode()
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" src="@/assets/logo-icon.png" class="h-[125px] w-[125px]" />

    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <RouterView />
</template>
