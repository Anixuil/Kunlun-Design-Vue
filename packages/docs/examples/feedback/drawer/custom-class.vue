<template>
    <div>
        <kl-button @click="drawer = true">自定义样式</kl-button>

        <kl-drawer v-model="drawer" modal-class="modalClass" drawer-class="drawerClass">
            <div>自定义样式</div>
        </kl-drawer>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const drawer = ref(false)
</script>

<style lang="scss" scoped>
:deep(.modalClass) {
    background-color: rgba(255, 0, 0, 0.4);
}

:deep(.drawerClass) {
    background-color: #000;
    color: #fff;
}
</style>
