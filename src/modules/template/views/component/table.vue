<template>
  <div class="main-content-container">
    <div class="main-content-header">
      <h2>Table</h2>
      <component :is="Breadcrumb" :breadcrumbs="[{ name: 'Template' }, { name: 'Component' }, { name: 'Table' }]" />
    </div>
    <div class="card p-4 space-y-5">
      <h3>Basic Table</h3>
      <p>Tables display information in a way that's easy to scan, so that users can look for patterns and insights.</p>
      <div class="table-container">
        <table class="table">
          <thead>
            <tr class="basic-table-row">
              <th class="basic-table-head">#</th>
              <th class="basic-table-head">Name</th>
              <th class="basic-table-head">Job</th>
              <th class="basic-table-head">Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            <tr class="basic-table-row">
              <td class="basic-table-body">1</td>
              <td class="basic-table-body">Cy Ganderton</td>
              <td class="basic-table-body">Quality Control Specialist</td>
              <td class="basic-table-body">Blue</td>
            </tr>
            <tr class="basic-table-row">
              <td class="basic-table-body">2</td>
              <td class="basic-table-body">Hart Hagerty</td>
              <td class="basic-table-body">Desktop Support Technician</td>
              <td class="basic-table-body">Purple</td>
            </tr>
            <tr class="basic-table-row">
              <td class="basic-table-body">3</td>
              <td class="basic-table-body">Brice Swyre</td>
              <td class="basic-table-body">Tax Accountant</td>
              <td class="basic-table-body">Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="card p-4 space-y-5">
      <h3>Bordered Table</h3>
      <p>Tables display information in a way that's easy to scan, so that users can look for patterns and insights.</p>
      <div class="table-container">
        <table class="table">
          <thead>
            <tr>
              <th class="bordered-table-head">#</th>
              <th class="bordered-table-head">Name</th>
              <th class="bordered-table-head">Job</th>
              <th class="bordered-table-head">Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="bordered-table-body">1</td>
              <td class="bordered-table-body">Cy Ganderton</td>
              <td class="bordered-table-body">Quality Control Specialist</td>
              <td class="bordered-table-body">Blue</td>
            </tr>
            <tr>
              <td class="bordered-table-body">2</td>
              <td class="bordered-table-body">Hart Hagerty</td>
              <td class="bordered-table-body">Desktop Support Technician</td>
              <td class="bordered-table-body">Purple</td>
            </tr>
            <tr>
              <td class="bordered-table-body">3</td>
              <td class="bordered-table-body">Brice Swyre</td>
              <td class="bordered-table-body">Tax Accountant</td>
              <td class="bordered-table-body">Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from '@/components/breadcrumb.vue'
</script>
