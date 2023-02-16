<template>
    <kl-select v-model="value" clearable>
        <kl-option value="胡桃"></kl-option>
        <kl-option value="夜兰"></kl-option>
        <kl-option value="七七"></kl-option>
    </kl-select>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref()
</script>

<style lang="scss" scoped>
* {
    margin-left: 5px;
}
</style>
