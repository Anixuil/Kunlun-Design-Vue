<template>
    <div>
        <kl-button @click="dialogFlag = true">click to open the dialog</kl-button>
        <kl-dialog v-model="dialogFlag" :showClose="false" cxtPosition="left">
            <template #header="{ close }">
                <span>Tips</span>
                <kl-button type="danger" @click="close">关闭</kl-button>
            </template>
            this is a message
        </kl-dialog>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const dialogFlag = ref(false)
</script>

<style scoped>
.kl-input {
    margin: 10px 0;
}

.kl-dialog .kl-button {
    margin-left: 50px;
}
</style>
