<script lang="ts" setup>
  defineProps<{
    title: string
  }>()
</script>

<template>
  <div class="card">卡片</div>
</template>

<style scoped lang="scss">
  .card {
    background: rebeccapurple;
    position: relative;
  }
</style>
