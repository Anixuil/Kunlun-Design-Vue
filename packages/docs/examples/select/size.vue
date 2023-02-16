<template>
    <kl-select v-model="value2" size="large">
        <kl-option value="胡桃">HuTao</kl-option>
        <kl-option value="夜兰">YeLan</kl-option>
        <kl-option value="七七">QiQi</kl-option>
    </kl-select>
    <kl-select v-model="value1">
        <kl-option value="胡桃">HuTao</kl-option>
        <kl-option value="夜兰">YeLan</kl-option>
        <kl-option value="七七">QiQi</kl-option>
    </kl-select>
    <kl-select v-model="value3" size="small">
        <kl-option value="胡桃">HuTao</kl-option>
        <kl-option value="夜兰">YeLan</kl-option>
        <kl-option value="七七">QiQi</kl-option>
    </kl-select>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref()
const value2 = ref()
const value3 = ref()
</script>

<style lang="scss" scoped>
* {
    margin-top: 5px;
}
</style>
