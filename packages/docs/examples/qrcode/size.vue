<template>
    <div>
        <div class="btns">
            <kl-button @click="() => (size -= 10)">size sub</kl-button>
            <kl-button @click="() => (size += 10)">size add</kl-button>
            <kl-button @click="() => (padding -= 1)">padding sub</kl-button>
            <kl-button @click="() => (padding += 1)">padding add</kl-button>
        </div>
        <kl-qrcode link="https://juejin.cn/" :size="size" :padding="padding"></kl-qrcode>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const size = ref(120)
const padding = ref(3)
</script>

<style lang="scss" scoped>
.btns {
    margin-bottom: 10px;
}
</style>
