<template>
  <div class="main-content-container">
    <div class="main-content-header">
      <h2>Input Text</h2>
      <component :is="Breadcrumb" :breadcrumbs="[{ name: 'template' }, { name: 'form' }, { name: 'input text' }]" />
    </div>
    <div class="card p-4 space-y-5">
      <div class="flex justify-between">
        <h3>Basic Input Text</h3>
        <component :is="Switch" v-model="checked" label="code" />
      </div>
      <p>
        The input element with a type attribute whose value is "text" represents a one-line plain text edit control for
        the input element’s value.
      </p>
      <label class="block">
        <input class="form-input" placeholder="Username" type="text" />
      </label>
      <div
        class="card bg-slate-800 dark:bg-slate-700 px-2 text-white transition-all transform-gpu"
        :class="{
          'max-h-[1000px] overflow-auto py-2': checked,
          'max-h-0 overflow-hidden': !checked,
        }"
      >
        <div class="text-sm p-1">html</div>
        <highlightjs autodetect :code="basicCode" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Breadcrumb from '@/components/breadcrumb.vue'
import Switch from '@/components/switch.vue'

const checked = ref(false)
const basicCode = `<input class="form-input" placeholder="Username" type="text" />`
</script>
