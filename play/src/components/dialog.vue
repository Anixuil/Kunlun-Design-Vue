<template>
    <div>
        <h1>基础使用</h1>
        <kl-button @click="dialogFlag = true">打开对话框</kl-button>
        <kl-dialog v-model="dialogFlag"></kl-dialog>
        <kl-button @click="dialogFlag2 = true">打开正常对话框</kl-button>
        <kl-dialog v-model="dialogFlag2" mode="normal"></kl-dialog>
    </div>
</template>

<script setup lang="ts">
import { KlButton, KlDialog } from 'kunlun-design'
import { ref } from 'vue'

const dialogFlag = ref(false)
const dialogFlag2 = ref(false)
</script>

<style scoped lang="scss">
h1 {
    line-height: 50px;
}

button {
    margin: 10px;
}
</style>
