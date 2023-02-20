<template>
    <kl-checkbox-group v-model="value">
        <kl-checkbox label="HuTao" value="胡桃"></kl-checkbox>
        <kl-checkbox label="YeLan" value="夜兰"></kl-checkbox>
        <kl-checkbox label="QiQi" value="七七"></kl-checkbox>
    </kl-checkbox-group>
    <div>value: {{ value }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref([])
</script>
