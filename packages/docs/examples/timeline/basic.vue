<template>
    <kl-button @click="changeReverse" type="primary" class="button">correct</kl-button>
    <kl-button @click="changeReverse2" type="primary" class="button">reverse</kl-button>
    <div class="main">
        <kl-timeline :reverse="reverse">
            <kl-timeline-item timestamp="2023/02/20">kunlun-design-first</kl-timeline-item>
            <kl-timeline-item timestamp="2023/02/21">kunlun-design-second</kl-timeline-item>
        </kl-timeline>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
let reverse = ref<boolean>(false)
const changeReverse = () => {
    reverse.value = true
}
const changeReverse2 = () => {
    reverse.value = false
}
</script>
<style></style>
