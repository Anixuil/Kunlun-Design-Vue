<template>
    <kl-switch v-model="value1"></kl-switch>
    <kl-switch v-model="value2" activeIcon="KlOtherCorrect" inactiveIcon="KlOtherError"></kl-switch>
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
