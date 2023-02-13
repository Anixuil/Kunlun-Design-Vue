<template>
    <div class="kl-wrapper">
        <kl-progress :percentage="percentage" color="lightgreen" :duration="0.3" width="250">
            <kl-button text>content</kl-button>
        </kl-progress>
        <kl-progress
            :percentage="percentage"
            :storke-width="30"
            :show-text="false"
            color="lightgreen"
            :duration="0.3"
            width="250"
        >
            <span>content</span>
        </kl-progress>
        <div style="display: flex; align-items: center">
            <kl-progress :percentage="percentage" type="circle" width="125">
                <kl-button type="success" circle></kl-button>
            </kl-progress>
            <kl-progress :percentage="percentage" type="circle" width="125">
                <template #default="{ percentage }">
                    <span class="progress-value">{{ percentage }}</span>
                    <span class="progress-text">Progressing</span>
                </template>
            </kl-progress>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const percentage = ref(0)

setInterval(() => {
    percentage.value = Math.ceil(Math.random() * 100)
}, 1000)
</script>

<style scoped>
.kl-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    padding: 20px 0;
}

.progress-value {
    display: block;
    text-align: center;
}

.progress-text {
    display: block;
}
</style>
