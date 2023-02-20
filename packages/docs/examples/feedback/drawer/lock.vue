<template>
    <div>
        <kl-button @click="lock = true">锁定滚动条</kl-button>
        <kl-button @click="unlock = true">不锁定滚动条</kl-button>

        <kl-drawer v-model="lock" :lock-scroll="true">
            <div class="header">
                <button @click="lock = false"><KlOtherError /></button>
                <h3>Lock Scroll</h3>
            </div>
            <div class="content">
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </div>
        </kl-drawer>
        <kl-drawer v-model="unlock" :lock-scroll="false">
            <div class="header">
                <button @click="unlock = false"><KlOtherError /></button>
                <h3>Unlock Scroll</h3>
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
const lock = ref(false)
const unlock = ref(false)
</script>

<style lang="scss" scoped>
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
