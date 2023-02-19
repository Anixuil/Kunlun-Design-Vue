<template>
    <div>
        <div class="btns">
            <kl-button @click="changeErrorLevel('L')">L</kl-button>
            <kl-button @click="changeErrorLevel('M')">M</kl-button>
            <kl-button @click="changeErrorLevel('Q')">Q</kl-button>
            <kl-button @click="changeErrorLevel('H')">H</kl-button>
        </div>
        <kl-qrcode link="https://juejin.cn/" :error-level="errorLevel"></kl-qrcode>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const errorLevel = ref<string>('L')
const changeErrorLevel = (level: 'L' | 'M' | 'Q' | 'H') => {
    errorLevel.value = level
}
</script>

<style lang="scss" scoped>
.btns {
    margin-bottom: 10px;
}
</style>
