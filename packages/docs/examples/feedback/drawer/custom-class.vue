<template>
    <div>
        <kl-button @click="drawer = true">自定义样式</kl-button>

        <kl-drawer v-model="drawer" modal-class="modalClass" drawer-class="drawerClass">
            <div class="header">
                <button @click="drawer = false"><KlOtherError /></button>
                <h3>Custom Class</h3>
            </div>
            <div class="content">
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </div>
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

.header {
    display: flex;
    padding: 16px 24px;
    border-bottom: 1px solid #ddd;

    h3 {
        white-space: nowrap;
        margin: 0 0 0 10px;
        padding: 0;
    }
}

.content {
    padding: 16px 24px;

    p {
        white-space: nowrap;
    }
}
</style>
