<template>
  <button>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'

defineComponent({
  name: 'kunlunButton'
})
</script>

<style scoped lang="scss">
button {
  box-sizing: border-box;
  padding: 20px 40px;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: aquamarine;
  color: black;
  font-size: 16px;
  cursor: pointer;
}
</style>
