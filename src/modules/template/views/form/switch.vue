<template>
  <div class="main-content-container">
    <div class="main-content-header">
      <h2>Form Switch</h2>
      <component :is="Breadcrumb" :breadcrumbs="[{ name: 'Template' }, { name: 'Form' }, { name: 'Switch' }]" />
    </div>
    <div class="card p-4 space-y-5">
      <div class="flex justify-between">
        <h3>Basic Switch</h3>
        <label class="inline-flex items-center space-x-2">
          <span>code</span>
          <input v-model="isShowBasicSwitchSourceCode" class="form-switch" type="checkbox" />
        </label>
      </div>
      <p class="flex">
        Code The Switch component is used as an alternative for the checkbox. The option that the switch controls, as
        well as the state it's in, should be made clear from the corresponding inline label.
      </p>
      <div class="flex flex-wrap gap-5">
        <label class="inline-flex items-center space-x-2">
          <input class="form-switch" type="checkbox" />
          <span>Default</span>
        </label>
        <label class="inline-flex items-center space-x-2">
          <input class="form-switch" type="checkbox" />
          <span>Blue</span>
        </label>
        <label class="inline-flex items-center space-x-2">
          <input class="form-switch" type="checkbox" />
          <span>Red</span>
        </label>
        <label class="inline-flex items-center space-x-2">
          <input class="form-switch" type="checkbox" />
          <span>Yellow</span>
        </label>
      </div>
      <div
        class="card bg-slate-800 dark:bg-slate-700 px-2 text-white transition-all transform-gpu"
        :class="{
          'max-h-[1000px] overflow-auto py-2': isShowBasicSwitchSourceCode,
          'max-h-0 overflow-hidden': !isShowBasicSwitchSourceCode,
        }"
      >
        <pre><code>{{ basicSwitchSourceCode }}</code></pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from '@/components/breadcrumb.vue'
import { ref } from 'vue'

const isShowBasicSwitchSourceCode = ref(false)
const basicSwitchSourceCode = `<label class="inline-flex items-center space-x-2">
  <input class="form-switch" type="checkbox" />
  <span>Yellow</span>
</label>`
</script>
