<template>
    <div>
        <kl-button @click="dialogFlag = true">click to open the dialog</kl-button>
        <kl-dialog v-model="dialogFlag" :showClose="false" cxtPosition="right">
            <template #header>
                <span>Tips</span>
            </template>
            <div>
                <kl-input type="text" placeholder="username" />
                <kl-input type="password" placeholder="password" />
            </div>
            <template #footer>
                <span class="footer">
                    <kl-button @click="dialogFlag = false">Cancel</kl-button>
                    <kl-button type="primary" @click="dialogFlag = false">Enter</kl-button>
                </span>
            </template>
        </kl-dialog>
    </div>
</template>

<script setup lang="ts">
import { KlMessage } from '@kunlun-design/components'
import { ref } from 'vue'
const dialogFlag = ref(false)
const handleClose = (done: () => void) => {
    KlMessage.warning('2s 后关闭对话框')
    setTimeout(() => {
        done()
    }, 2000)
}
</script>

<style scoped>
.kl-input {
    margin: 10px 0;
}
</style>
