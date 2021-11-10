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
    color: #61dafb;
    position: relative;
    display: grid;
    row-gap: 10px;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 10px;

    &_title {
      color: beige;
      display: flex;
      vertical-align: top;
    }

    &_content {
      aspect-ratio: 1 / 1;
      position: relative;
    }

    &_footer {
      margin-block-end: 10px;
      margin-block-start: 10px;
    }
  }

  :global(.foo) {
    color: #61dafb;
  }

  div {
    transition: margin 350ms ease-in;
  }
</style>
