<template>
    <kl-checkbox label="HuTao" value="胡桃" v-model="value"></kl-checkbox>
    <kl-checkbox label="YeLan" value="夜兰" v-model="value"></kl-checkbox>
    <kl-checkbox label="QiQi" value="七七" v-model="value"></kl-checkbox>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>
