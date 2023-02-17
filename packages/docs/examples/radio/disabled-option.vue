<template>
    <kl-radio-group v-model="value">
        <kl-radio label="HuTao" value="胡桃" disabled></kl-radio>
        <kl-radio label="YeLan" value="夜兰"></kl-radio>
        <kl-radio label="QiQi" value="七七"></kl-radio>
    </kl-radio-group>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>
