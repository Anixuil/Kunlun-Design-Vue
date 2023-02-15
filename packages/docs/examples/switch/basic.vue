<template>
    <kl-switch v-model="value1"></kl-switch>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(false)
</script>

<style lang="scss" scoped>
* {
    margin-left: 5px;
}
</style>
