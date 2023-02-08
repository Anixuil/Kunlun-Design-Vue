<template>
    <h2>Input 基础用法</h2>
    <kl-input v-model="input" placeholder="Please input"></kl-input>
</template>

<script setup lang="ts">
import { KlInput } from 'kunlun-design'
import { ref } from 'vue'

const input = ref('')
</script>
