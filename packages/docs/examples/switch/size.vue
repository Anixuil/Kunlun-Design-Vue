<template>
    <kl-switch v-model="value" size="large" active-text="Open" inactive-text="Close"></kl-switch>
    <kl-switch v-model="value" size="default" active-text="Open" inactive-text="Close"></kl-switch>
    <kl-switch v-model="value" size="small" active-text="Open" inactive-text="Close"></kl-switch>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(true)
</script>

<style lang="scss" scoped>
* {
    display: block;
}
</style>
