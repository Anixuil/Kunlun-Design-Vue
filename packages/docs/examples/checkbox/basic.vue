<template>
    <kl-checkbox v-model="value" label="checkbox" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(true)
</script>
