<template>
  <div class="main-content-container">
    <div class="main-content-header">
      <h2>Input Group</h2>
      <component :is="Breadcrumb" :breadcrumbs="[{ name: 'template' }, { name: 'form' }, { name: 'input-group' }]" />
    </div>
    <div class="card p-4 space-y-5">
      <div class="flex justify-between">
        <h5 class="font-semibold">Input Addon</h5>
        <component :is="Switch" v-model="inputGroupCodeToggle" label="code" />
      </div>
      <p>
        Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom
        selects, and custom file inputs.
      </p>
      <div>
        <span>Prepend Addon:</span>
        <label class="mt-1.5 flex -space-x-px">
          <div
            class="dark:border-slate-500 flex items-center justify-center rounded-l-lg border border-slate-300 px-3.5"
          >
            <span class="-mt-1">@</span>
          </div>
          <input
            class="focus:border-primary dark:focus:border-accent dark:border-slate-500 dark:hover:border-slate-400 w-full rounded-r-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10"
            placeholder="Username"
            type="text"
          />
        </label>
      </div>
      <div>
        <span>Append Addon:</span>
        <label class="mt-1.5 flex -space-x-px">
          <input
            class="focus:border-primary dark:focus:border-accent dark:border-slate-500 dark:hover:border-slate-400 w-full rounded-l-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10"
            placeholder="Username"
            type="text"
          />
          <div
            class="dark:border-slate-500 flex items-center justify-center rounded-r-lg border border-slate-300 px-3.5"
          >
            <span>@site.com</span>
          </div>
        </label>
      </div>
      <div>
        <span>Between input:</span>
        <label class="mt-1 flex -space-x-px">
          <div
            class="dark:border-slate-500 flex items-center justify-center rounded-l-lg border border-slate-300 px-3.5"
          >
            <span>$</span>
          </div>
          <input
            class="focus:border-primary dark:focus:border-accent dark:border-slate-500 dark:hover:border-slate-400 w-full border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10"
            placeholder="Enter Price"
            type="text"
          />
          <div
            class="dark:border-slate-500 flex items-center justify-center rounded-r-lg border border-slate-300 px-3.5"
          >
            <span>.00</span>
          </div>
        </label>
      </div>
      <div
        class="card bg-slate-800 dark:bg-slate-700 px-2 text-white transition-all transform-gpu"
        :class="{
          'max-h-[10000px] overflow-auto py-2': inputGroupCodeToggle,
          'max-h-0 overflow-hidden': !inputGroupCodeToggle,
        }"
      >
        <div class="text-sm p-1">html</div>
        <highlightjs autodetect :code="inputGroupCode" />
      </div>
    </div>
    <div class="card p-4 space-y-5">
      <div class="flex justify-between">
        <h5 class="font-semibold">Input Addon</h5>
        <component :is="Switch" v-model="inputGroupCodeToggle" label="code" />
      </div>
      <p>
        Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom
        selects, and custom file inputs.
      </p>
      <div class="space-y-4">
        <label class="relative flex">
          <input
            class="form-input peer focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400"
            placeholder="Search here..."
            type="text"
          />
          <div
            class="peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4.5 w-4.5 transition-colors duration-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M3.316 13.781l.73-.171-.73.171zm0-5.457l.73.171-.73-.171zm15.473 0l.73-.171-.73.171zm0 5.457l.73.171-.73-.171zm-5.008 5.008l-.171-.73.171.73zm-5.457 0l-.171.73.171-.73zm0-15.473l-.171-.73.171.73zm5.457 0l.171-.73-.171.73zM20.47 21.53a.75.75 0 101.06-1.06l-1.06 1.06zM4.046 13.61a11.198 11.198 0 010-5.115l-1.46-.342a12.698 12.698 0 000 5.8l1.46-.343zm14.013-5.115a11.196 11.196 0 010 5.115l1.46.342a12.698 12.698 0 000-5.8l-1.46.343zm-4.45 9.564a11.196 11.196 0 01-5.114 0l-.342 1.46c1.907.448 3.892.448 5.8 0l-.343-1.46zM8.496 4.046a11.198 11.198 0 015.115 0l.342-1.46a12.698 12.698 0 00-5.8 0l.343 1.46zm0 14.013a5.97 5.97 0 01-4.45-4.45l-1.46.343a7.47 7.47 0 005.568 5.568l.342-1.46zm5.457 1.46a7.47 7.47 0 005.568-5.567l-1.46-.342a5.97 5.97 0 01-4.45 4.45l.342 1.46zM13.61 4.046a5.97 5.97 0 014.45 4.45l1.46-.343a7.47 7.47 0 00-5.568-5.567l-.342 1.46zm-5.457-1.46a7.47 7.47 0 00-5.567 5.567l1.46.342a5.97 5.97 0 014.45-4.45l-.343-1.46zm8.652 15.28l3.665 3.664 1.06-1.06-3.665-3.665-1.06 1.06z"
              ></path>
            </svg>
          </div>
        </label>
        <label class="relative flex">
          <input
            class="form-input peer focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pr-9 placeholder:text-slate-400/70 hover:border-slate-400"
            placeholder="Password"
            type="text"
          />
          <div
            class="peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent pointer-events-none absolute right-0 flex h-full w-10 items-center justify-center text-slate-400"
          >
            <svg fill="currentColor" class="h-4.5 w-4.5" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
              <path
                fill-rule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </label>
        <label class="relative flex">
          <input
            class="form-input peer focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent w-full rounded-lg border border-slate-300 bg-transparent px-9 py-2 placeholder:text-slate-400/70 hover:border-slate-400"
            placeholder="Search here..."
            type="text"
          />
          <div
            class="peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4.5 w-4.5 transition-colors duration-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M3.316 13.781l.73-.171-.73.171zm0-5.457l.73.171-.73-.171zm15.473 0l.73-.171-.73.171zm0 5.457l.73.171-.73-.171zm-5.008 5.008l-.171-.73.171.73zm-5.457 0l-.171.73.171-.73zm0-15.473l-.171-.73.171.73zm5.457 0l.171-.73-.171.73zM20.47 21.53a.75.75 0 101.06-1.06l-1.06 1.06zM4.046 13.61a11.198 11.198 0 010-5.115l-1.46-.342a12.698 12.698 0 000 5.8l1.46-.343zm14.013-5.115a11.196 11.196 0 010 5.115l1.46.342a12.698 12.698 0 000-5.8l-1.46.343zm-4.45 9.564a11.196 11.196 0 01-5.114 0l-.342 1.46c1.907.448 3.892.448 5.8 0l-.343-1.46zM8.496 4.046a11.198 11.198 0 015.115 0l.342-1.46a12.698 12.698 0 00-5.8 0l.343 1.46zm0 14.013a5.97 5.97 0 01-4.45-4.45l-1.46.343a7.47 7.47 0 005.568 5.568l.342-1.46zm5.457 1.46a7.47 7.47 0 005.568-5.567l-1.46-.342a5.97 5.97 0 01-4.45 4.45l.342 1.46zM13.61 4.046a5.97 5.97 0 014.45 4.45l1.46-.343a7.47 7.47 0 00-5.568-5.567l-.342 1.46zm-5.457-1.46a7.47 7.47 0 00-5.567 5.567l1.46.342a5.97 5.97 0 014.45-4.45l-.343-1.46zm8.652 15.28l3.665 3.664 1.06-1.06-3.665-3.665-1.06 1.06z"
              ></path>
            </svg>
          </div>
          <div
            class="peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent pointer-events-none absolute right-0 flex h-full w-10 items-center justify-center text-slate-400"
          >
            <div
              class="spinner border-slate-150 dark:border-navy-500 dark:border-r-navy-300 h-5 w-5 animate-spin rounded-full border-2 border-r-slate-400"
            ></div>
          </div>
        </label>
      </div>

      <div
        class="card bg-slate-800 dark:bg-slate-700 px-2 text-white transition-all transform-gpu"
        :class="{
          'max-h-[100000px] overflow-auto py-2': inputGroupCodeToggle,
          'max-h-0 overflow-hidden': !inputGroupCodeToggle,
        }"
      >
        <div class="text-sm p-1">html</div>
        <highlightjs autodetect :code="inputGroupCode" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Breadcrumb from '@/components/breadcrumb.vue'
import Switch from '@/components/switch.vue'

const inputGroupCodeToggle = ref(false)
const inputGroupCode = `<div>
  <span>Prepend Addon:</span>
  <label class="mt-1.5 flex -space-x-px">
    <div
      class="flex items-center justify-center rounded-l-lg border border-slate-300 px-3.5 dark:border-slate-500"
    >
      <span class="-mt-1">@</span>
    </div>
    <input
      class="form-input w-full rounded-r-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-slate-500 dark:hover:border-slate-400 dark:focus:border-accent"
      placeholder="Username"
      type="text"
    />
  </label>
</div>
<div>
  <span>Append Addon:</span>
  <label class="mt-1.5 flex -space-x-px">
    <input
      class="form-input w-full rounded-l-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-slate-500 dark:hover:border-slate-400 dark:focus:border-accent"
      placeholder="Username"
      type="text"
    />
    <div
      class="flex items-center justify-center rounded-r-lg border border-slate-300 px-3.5 dark:border-slate-500"
    >
      <span>@site.com</span>
    </div>
  </label>
</div>
<div>
  <span>Between input:</span>
  <label class="mt-1 flex -space-x-px">
    <div
      class="flex items-center justify-center rounded-l-lg border border-slate-300 px-3.5 dark:border-slate-500"
    >
      <span>$</span>
    </div>
    <input
      class="form-input w-full border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-slate-500 dark:hover:border-slate-400 dark:focus:border-accent"
      placeholder="Enter Price"
      type="text"
    />
    <div
      class="flex items-center justify-center rounded-r-lg border border-slate-300 px-3.5 dark:border-slate-500"
    >
      <span>.00</span>
    </div>
  </label>
</div>`
</script>
