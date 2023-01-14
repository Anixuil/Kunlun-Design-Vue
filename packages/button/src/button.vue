<template>
  <button>
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'KunlunButton'
}
</script>
<script setup lang="ts"></script>
<script set></script>

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
