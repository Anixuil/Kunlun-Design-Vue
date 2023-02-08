<template>
    <kl-input v-model="password" placeholder="Please input" disabled> </kl-input>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const password = ref('')
</script>
