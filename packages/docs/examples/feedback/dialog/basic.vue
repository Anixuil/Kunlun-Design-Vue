<template>
    <div>
        <kl-button @click="dialogFlag = true">click to open the dialog</kl-button>
        <kl-dialog v-model="dialogFlag">
            <template #header>Tips</template>
            <span>this is a message</span>
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
import { ref } from 'vue'
const dialogFlag = ref(false)
</script>

<style scoped></style>
