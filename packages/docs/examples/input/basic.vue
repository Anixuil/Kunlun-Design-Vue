<template>
    <kl-input v-model="input" placeholder="Please input"></kl-input>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const input = ref('')
</script>
