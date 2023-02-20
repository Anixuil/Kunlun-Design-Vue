<template>
    <div>
        <kl-button @click="rtl = true">right to left</kl-button>
        <kl-button @click="ltr = true">left to right</kl-button>
        <kl-button @click="ttb = true">top to bottom</kl-button>
        <kl-button @click="btt = true">bottom to top</kl-button>

        <kl-drawer v-model="rtl" direction="rtl">
            <div class="header">
                <button @click="rtl = false"><KlOtherError /></button>
                <h3>Basic Drawer</h3>
            </div>
            <div class="content">
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </div>
        </kl-drawer>
        <kl-drawer v-model="ltr" direction="ltr">
            <div class="header">
                <button @click="ltr = false"><KlOtherError /></button>
                <h3>Basic Drawer</h3>
            </div>
            <div class="content">
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </div>
        </kl-drawer>
        <kl-drawer v-model="ttb" direction="ttb">
            <div class="header">
                <button @click="ttb = false"><KlOtherError /></button>
                <h3>Basic Drawer</h3>
            </div>
            <div class="content">
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </div>
        </kl-drawer>
        <kl-drawer v-model="btt" direction="btt">
            <div class="header">
                <button @click="btt = false"><KlOtherError /></button>
                <h3>Basic Drawer</h3>
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
const rtl = ref(false)
const ltr = ref(false)
const ttb = ref(false)
const btt = ref(false)
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
