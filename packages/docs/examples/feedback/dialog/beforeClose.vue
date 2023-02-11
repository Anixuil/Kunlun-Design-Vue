<template>
    <div>
        <kl-button @click="dialogFlag = true">click to open the dialog</kl-button>
        <kl-dialog v-model="dialogFlag" :before-close="handleClose" cxtPosition="center">
            <template #header>
                <span>Tips</span>
            </template>
            this is a message
        </kl-dialog>
    </div>
</template>

<script setup lang="ts">
import { KlMessage } from '@kunlun-design/components'
import { ref } from 'vue'
const dialogFlag = ref(false)
const handleClose = (done: () => void) => {
    let num = 3
    KlMessage.warning(`${num}s 后关闭对话框`)
    let time = setInterval(() => {
        num--
        if (num == 0) {
            KlMessage.success(`关闭对话框`)
        } else {
            KlMessage.warning(`${num}s 后关闭对话框`)
        }
    }, 1000)
    setTimeout(() => {
        clearInterval(time)
        done()
    }, 3000)
}
</script>

<style scoped>
.kl-input {
    margin: 10px 0;
}
</style>
