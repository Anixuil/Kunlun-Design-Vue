<template>
    <kl-input v-model="input" placeholder="Please input text" type="textarea" :rows="4"></kl-input>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const input = ref('')
const input1 = ref('')
</script>
