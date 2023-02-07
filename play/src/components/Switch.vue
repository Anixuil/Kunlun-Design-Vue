<template>
    <h1>Switch</h1>
    <kl-switch v-model="isM" activeColor="#33CCFF" inactiveColor="#DCDCDC"></kl-switch>
</template>

<script lang="ts" setup>
import { KlSwitch } from '@kunlun-design/components'
import { ref } from 'vue'
const isM = ref(true)
</script>

<style scoped></style>
