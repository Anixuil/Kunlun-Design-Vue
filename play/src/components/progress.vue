<template>
    <div>
        <h1>进度条</h1>
        <kl-progress :percentage="percentage"></kl-progress>
    </div>
</template>

<script setup lang="ts">
import { KlProgress } from 'kunlun-design'
import { ref } from 'vue'
const percentage = ref(0)
setInterval(() => {
    percentage.value++
    if (percentage.value >= 100) {
        percentage.value = 0
    }
}, 100)
</script>

<style scoped></style>
