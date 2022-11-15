<template>
  <div class="main-content-container">
    <div class="main-content-header">
      <h2>Button</h2>
      <component :is="Breadcrumb" :breadcrumbs="[{ name: 'Template' }, { name: 'Element' }, { name: 'Typography' }]" />
    </div>
    <div>a</div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from '@/components/breadcrumb.vue'
</script>
