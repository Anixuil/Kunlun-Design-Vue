<template>
    <kl-switch v-model="value1" active-text="Open" inactive-text="Close"></kl-switch>
    <kl-switch v-model="value2" disabled active-text="Open" inactive-text="Close"></kl-switch>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(false)
</script>

<style lang="scss" scoped>
* {
    display: block;
}
</style>
