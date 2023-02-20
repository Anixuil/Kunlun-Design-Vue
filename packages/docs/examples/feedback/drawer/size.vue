<template>
    <div>
        <kl-button @click="pt20 = true">20%</kl-button>
        <kl-button @click="pt30 = true">30%</kl-button>
        <kl-button @click="px200 = true">200px</kl-button>
        <kl-button @click="px300 = true">300px</kl-button>

        <kl-drawer v-model="pt20" size="20%">
            <div class="header">
                <button @click="pt20 = false"><KlOtherError /></button>
                <h3>Drawer Size</h3>
            </div>
            <div class="content">
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </div>
        </kl-drawer>
        <kl-drawer v-model="pt30" size="30%">
            <div class="header">
                <button @click="pt30 = false"><KlOtherError /></button>
                <h3>Drawer Size</h3>
            </div>
            <div class="content">
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </div>
        </kl-drawer>
        <kl-drawer v-model="px200" :size="200">
            <div class="header">
                <button @click="px200 = false"><KlOtherError /></button>
                <h3>Drawer Size</h3>
            </div>
            <div class="content">
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </div>
        </kl-drawer>
        <kl-drawer v-model="px300" :size="300">
            <div class="header">
                <button @click="px300 = false"><KlOtherError /></button>
                <h3>Drawer Size</h3>
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
const pt20 = ref(false)
const pt30 = ref(false)
const px200 = ref(false)
const px300 = ref(false)
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
