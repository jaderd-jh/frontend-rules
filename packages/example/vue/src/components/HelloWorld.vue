<script setup lang="ts">
  import { ref } from 'vue'

  defineProps<{ msg: string }>()

  const count = ref(0)
  const obj = ref<{
    a: number
    b: number
  }>()
  const flag = ref(localStorage.getItem('flag') ?? 'nothing')
  const list = ref([432, 424, 234234, 2, 42, 5, 46, 34, 6, 45])
  for (const listElement of list.value) {
    console.log(listElement)
  }
  const a = () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(1)
      }, 1000)
    })
  const b = () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(2)
      }, 1000)
    })
  const c = () =>
    Promise.allSettled([a(), b()]).then(res => {
      console.log(res)
    })
  c()

  const num = BigInt(123)
  console.log(num)
  console.log(obj.value?.a)
  console.log(flag.value)
  fetch('https://google.com')
</script>

<template>
  <h1>{{ msg }}</h1>
  <p>
    <button type="button" @click="count++">count is: {{ count }}</button>
  </p>
  <van-button round type="primary">vant测试</van-button>
</template>

<style scoped lang="scss">
  a {
    color: #42b983;
  }

  label {
    margin: 0 0.5em;
    font-weight: bold;
  }

  .foo {
    display: -webkit-box;
  }

  code {
    border-radius: 4px;
    background-color: #eee;
    padding: 2px 4px;
    color: #304455;
    position: relative;
  }

  .test {
    background: #000;
    transition: background-color 1s ease-in-out;
  }

  .van-button--primary {
    background: #000;
  }

  :global(.foo),
  ::v-deep(.foo),
  ::v-slotted(.foo),
  ::v-global(.foo),
  :deep(.foo),
  :slotted(.foo) {
    color: red;
  }
</style>
