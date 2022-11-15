<template>
  <div class="main-content-container">
    <div class="main-content-header">
      <h2>Avatar</h2>
      <component :is="Breadcrumb" :breadcrumbs="[{ name: 'Template' }, { name: 'Element' }, { name: 'Avatar' }]" />
    </div>
    <div class="card p-4 space-y-5">
      <h3>Avatar</h3>
      <p>Avatar</p>
      <div></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from '@/components/breadcrumb.vue'
</script>
