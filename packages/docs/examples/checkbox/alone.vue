<template>
    <kl-checkbox v-model="value1"><KlLogoQq /></kl-checkbox>
    <kl-checkbox v-model="value2">Hello</kl-checkbox>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(false)
const value3 = ref(false)
</script>
