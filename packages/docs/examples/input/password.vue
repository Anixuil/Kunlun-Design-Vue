<template>
    <kl-input v-model="password" type="password" placeholder="Please input password"> </kl-input>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const password = ref('')
</script>
