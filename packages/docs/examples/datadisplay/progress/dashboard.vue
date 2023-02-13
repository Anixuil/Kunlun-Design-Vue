<template>
    <div class="kl-wrapper">
        <kl-progress :percentage="controlPercentage" :color="color" width="125" type="dashboard" />
        <kl-progress :percentage="percentage" width="125" :color="color" type="dashboard" />
    </div>
    <kl-button plain size="small" @click="decrease">-</kl-button>
    <kl-button plain size="small" @click="increase">+</kl-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const percentage = ref(0)
const color = ref([
    { color: 'red', percentage: 0 },
    { color: 'orange', percentage: 40 },
    { color: 'blue', percentage: 80 },
    { color: 'green', percentage: 100 }
])

setInterval(() => {
    if (percentage.value === 100) {
        percentage.value = 0
    } else {
        percentage.value += 10
    }
}, 1000)

const controlPercentage = ref(10)
const increase = () => {
    controlPercentage.value += 10
    if (controlPercentage.value > 100) {
        controlPercentage.value = 100
    }
}
const decrease = () => {
    controlPercentage.value -= 10
    if (controlPercentage.value < 0) {
        controlPercentage.value = 0
    }
}
</script>

<style scoped>
.kl-wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
}

.kl-button {
    padding: 0 20px;
}
</style>
