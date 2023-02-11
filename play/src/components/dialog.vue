<template>
    <div>
        <h1>基础使用</h1>
        <kl-button>打开对话框</kl-button>
        <kl-dialog></kl-dialog>
    </div>
</template>

<script setup lang="ts">
import { KlButton, KlDialog } from 'kunlun-design'
</script>

<style scoped lang="scss">
h1 {
    line-height: 100px;
}

button {
    margin: 10px;
}
</style>
