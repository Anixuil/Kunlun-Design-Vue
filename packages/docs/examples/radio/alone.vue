<template>
    <kl-radio label="HuTao" value="胡桃" v-model="value"></kl-radio>
    <kl-radio label="YeLan" value="夜兰" v-model="value"></kl-radio>
    <kl-radio label="QiQi" value="七七" v-model="value"></kl-radio>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>
